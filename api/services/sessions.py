from google.cloud import firestore


class SessionService:
    def __init__(self):
        self.collection = firestore.Client().collection('sessions')

    def get_session(self, session_id):
        pass

    def create_session(self):
        result = self.collection.add({
            'choices': []
        })

        return result[1].id
