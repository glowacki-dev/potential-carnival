from google.cloud import firestore


class SessionService:
    def __init__(self):
        self.collection = firestore.Client().collection('sessions')

    def get_session(self, session_id):
        session_doc = self.collection.document(session_id).get()
        return session_doc.to_dict()

    def create_session(self):
        result = self.collection.add({
            'choices': [],
            'viewed': [],
        })

        return result[1].id
