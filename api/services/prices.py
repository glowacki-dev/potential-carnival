from lot_wrapper import Lot


class PriceService:
    def __init__(self, data):
        self.data = data

    def get_price(self):
        lot = Lot()
        lot.auth()
        result = lot.get_availability(**self.data)
        flights = [r[0] for r in result]
        flight = flights[0]
        return {
            'price': round(flight['totalPrice']['price'] + flight['totalPrice']['tax'], 2),
            'currency': flight['totalPrice']['currency'],
            'url': flight['url'],
            'time_outbound': flight['outbound']['duration'],
            'time_inbound': flight['inbound']['duration'],
        }
