import requests

from secret import EVENT_API_KEY


class Events:
    def get_event(self, lat: float, long: float):
        url = "https://app.ticketmaster.com/discovery/v2/events.json"
        query = {
            "latlong": "{},{}".format(lat, long),
            "radius": "50",
            "unit": ["km"],
            "apikey": EVENT_API_KEY,
        }
        response = requests.get(url, params=query)
        if response.status_code != 200:
            raise Exception("Request failed: \n".format(response.json()))
        body = response.json().get("_embedded", {})
        return {
            "attractions": [
                self._simplify_attraction(a) for a in body.get("attractions", [])
            ],
            "events": [self._simplify_event(a) for a in body.get("events", [])],
        }

    @staticmethod
    def _simplify_event(event: dict) -> dict:
        new_event = {
            "name": event["name"],
            "url": event["url"],
            "image_url": event["images"][0]["url"] if event["images"] else None,
            "date": event["dates"]["start"].get("localDate"),
            # "classifications": [c.get("name") for c in event["classifications"]]
        }
        return new_event

    @staticmethod
    def _simplify_attraction(attraction: dict) -> dict:
        new_attraction = {
            "name": attraction["name"],
            "image_url": attraction["images"][0]["url"]
            if attraction["images"]
            else None,
        }
        return new_attraction
