from google.cloud import firestore


class SessionService:
    def __init__(self):
        self.collection = firestore.Client().collection('sessions')

    def get_session(self, session_id):
        session_doc = self.collection.document(session_id)
        return session_doc

    def create_session(self) -> str:
        """
        :return: Session uuid
        """
        result = self.collection.add({
            'choices': [],
            'viewed': [],
        })

        return result[1].id
