from lot_wrapper import Lot


class PriceService:
    def __init__(self, session):
        self.session = session

    def get_price(self):
        # TODO
        origin: str = "WAW"
        destination: str = "MAD"
        departureDate: str = "22102019"
        returnDate: str = "12112019"
        adults: int = 1

        lot = Lot()
        lot.auth()
        result = lot.get_availability(origin, destination, departureDate, returnDate, adults)
        flights = [r[0] for r in result]
        flight = flights[0]
        return {
            'price': flight['totalPrice']['price'],
            'currency': flight['totalPrice']['currency'],
            'url': flight['url'],
            'time_outbound': flight['outbound']['duration'],
            'time_inbound': flight['inbound']['duration'],
        }
