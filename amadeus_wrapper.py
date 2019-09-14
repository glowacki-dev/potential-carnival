import os
from amadeus import Client


class Amadeus:
    def __init__(self):
        ama_api_key = os.environ.get("AMA_API_KEY")
        ama_api_secret = os.environ.get("AMA_API_SECRET")
        self.amadeus = Client(client_id=ama_api_key, client_secret=ama_api_secret, log_level='debug')

    def get_inspiration(self, origin: str):
        """
        The Flight Inspiration Search API is an open search API for flight destinations and prices.
        It provides inspiration by returning a list of flight destinations from a given origin (city or airport),
        for a given budget and for a specific date or time period.
        The response is a list of 'flight-destination' options containing the flight dates and prices.
        Links to the Flight Low-fare Search API are also provided to allow you to confirm the price and availability
        of the fare. Answers the question: Where can I fly to from Paris in the next months for 200 euros?
        Please, be informed that, in case you are developing an app for airline companies, y
        ou should use Enterprise APIs.
        """
        response = self.amadeus.shopping.flight_destinations.get(origin=origin)
        return response.data

    def get_cheapest(self, origin: str, dest: str):
        response = self.amadeus.shopping.flight_dates.get(
            origin=origin, destination=dest
        )
        return response.data

    def get_most_booked(self, dest: str, period: str):
        """
        The Flight Most Booked Destinations API provides a list of the most popular
        flight destinations from a given origin during a specific time period. The results
        are based on the total number of bookings (PNRs created). Answers the question:
        Where were the most number of bookings made to from London last November?
        """
        response = self.amadeus.travel.analytics.air_traffic.booked.get(
            originCityCode=dest, period=period
        )
        return response.data

    def get_busiest(self, dest: str, period: str, direction: str = "ARRIVING"):
        """
        This API allows the user to retrieve a list of reports showing the monthly traveler traffic for a given city.
        It is based on estimated flight traffic summary data of the past 12 months.
        Traffic summary data are limited to bookings done through travel agencies (online or not) with Amadeus system.
        It returns the travelers score for every month of the past year.
        Scores are between 0 and 100, and represent the percentage of travelers passing by the city for a
        given month compared to the whole year.
        The statistics are from the year 2011 to today.
        """
        response = self.amadeus.travel.analytics.air_traffic.busiest_period.get(
            originCityCode=dest, period=period, direction=direction
        )
        return response.data

    def get_nearest_airport(self, longitude: float, latitude: float):
        """
        The Airport Nearest Relevant API returns a list of relevant airports within a radius of 500 km of a
        given point. The relevance of an airport is based on the estimated yearly flight traffic of
        the airport and on the distance from the point. Answers the question: What relevant airports are
        there around a specific location?
        """
        response = self.amadeus.reference_data.locations.airports.get(
            longitude=longitude, latitude=latitude
        )
        return response.data

    def get_point_of_interest(self, longitude: float, latitude: float):
        """
        The Points Of Interest API, powered by AVUXI TopPlace, is a search API that returns a list of
        popular places for a particular location. The location can be defined as area bound by four
        coordinates or as a geographical coordinate with a radius.   The popularity of a place or
        'point of interest' is determined by AVUXI's proprietary algorithm that considers factors
        such as ratings, check-ins, category scores among other factors from a host of online media sources.
        """
        response = self.amadeus.reference_data.locations.points_of_interest.get(
            longitude=longitude, latitude=latitude
        )
        return response.data
