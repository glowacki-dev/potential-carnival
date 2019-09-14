import requests


class Passenger:
    """
    {
    "idPax": 1,
    "title": "MR",
    "name": " John ", "surname": "Smith", "typePax": "ADT",
    "sex": "M",
    "email": "j.smith @lot.pl"
    }
    """

    def __init__(
        self,
        name: str,
        surename: str,
        sex: str,
        pax_type: str = "ADT",
        email: str = "test@test.com",
    ):
        self.name = name
        self.surename = surename
        self.pax_type = pax_type
        self.email = email
        self.pac_id = 1
        self.sex = sex
        self.title = "MR" if sex == "M" else "MS"

    @property
    def json(self):
        return {
            "idPax": self.pac_id,
            "title": self.title,
            "name": self.name,
            "surname": self.surename,
            "typePax": self.pax_type,
            "sex": self.sex,
            "email": self.email,
        }


class Lot:
    LOT_KEY = "9YFNNKS31u9gCFKPetPWdAAjEXnED0B3K18AeYgg"
    LOT_SECRET = "2przp49a52"
    token = None

    @staticmethod
    def check_error(response):
        if response.status_code != 200:
            raise Exception(f"Request failed: \n {response.json()}")

    @property
    def headers(self) -> dict:
        return {
            "Content-Type": "application/json",
            "X-Api-Key": self.LOT_KEY,
            "Authorization": "Bearer " + self.token,
        }

    def auth(self) -> str:
        headers = {"Content-Type": "application/json", "X-Api-Key": self.LOT_KEY}
        data = {"secret_key": self.LOT_SECRET}
        response = requests.post(
            "https://api.lot.com/flights-dev/v2/auth/token/get",
            json=data,
            headers=headers,
        )
        self.check_error(response)
        self.token = response.json().get("access_token")
        return response.json().get("access_token")

    def refresh_token(self, token: str = None) -> None:
        token = token or self.token
        headers = {
            "Content-Type": "application/json",
            "X-Api-Key": self.LOT_KEY,
            "Authorization": "Bearer " + token,
        }
        response = requests.post(
            "https://api.lot.com/flights-dev/v2/auth/token/refresh", headers=headers
        )
        self.check_error(response)

    def make_call(self, url: str, body: dict = None) -> dict:
        response = requests.post(url, headers=self.headers, json=body)
        if response.status_code != 200:
            raise Exception(f"Request to {url} failed: \n {response.json()}")
        return response.json().get("data")

    def get_availability(
        self,
        origin: str,
        destination: str,
        departureDate: str,
        returnDate: str,
        adults: int,
        tripType: str = "R",
        cabinClass: str = "E",
    ) -> dict:
        """
        date = ddmmYYYY
        tripType = R|O
        class = E|B|F
        fare type = ["ALL"|"SAVER"|" STANDARD"|"FLEX"
        """
        params = dict(
            market="PL",
            origin=[origin],
            destination=[destination],
            departureDate=[departureDate],
            cabinClass=cabinClass,
            adt=adults,
            tripType=tripType,
        )
        if returnDate:
            params["returnDate"] = returnDate

        body = {"params": params}
        url = "https://api.lot.com/flights-dev/v2/booking/availability"
        return self.make_call(url, body)

    # def get_fare(self, listIdOutbound: List[int], idInbound: int = None):
    #     url = "https://api.lot.com/flights-dev/v2/booking/fare"
    #     body = {"params": {"listIdOutbound": [1], "idInbound": 1, "idOffer": [1]}}
    #     return self.make_call(url, body)

    def get_airport(self):
        url = "https://api.lot.com/flights-dev/v2/airports/get"
        response = requests.get(url, headers=self.headers)
        self.check_error(response)
        return response.json()
