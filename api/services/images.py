from api.db import db


class ImagesService:
    IMAGES_COUNT = 3

    def __init__(self, session):
        self.session = session

    def generate_images(self):
        viewd = self.session
