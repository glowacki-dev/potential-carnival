from flask import Flask, request, jsonify
from flask_cors import CORS


from api.helpers.session import session_wrapper
from api.services.sessions import SessionService
from api.services.images import ImagesService
from api.services.decide import DecisionService


app = Flask(__name__)
app.services = {
    'session': SessionService(),
}
CORS(app, resources={r"/*": {"origins": "*"}})


@app.route('/')
def hello():
    return f'Hello, World!'


@app.route('/sessions/', methods=['POST'])
def create_session():
    session_id = app.services['session'].create_session()
    return jsonify({'session_id': session_id})


@app.route('/sessions/')
@session_wrapper()
def get_session():
    return jsonify(request.session.get().to_dict())


@app.route('/images/', methods=['GET'])
@session_wrapper()
def get_images():
    img_service = ImagesService(request.session)

    images = img_service.generate_images()
    return jsonify({'images': images})


@app.route('/images/', methods=['POST'])
@session_wrapper()
def save_images():
    data = request.json
    if not data.get('img_ids'):
        return jsonify({'error': 'Missing img_ids parameter in body, expecting list'}), 400

    img_service = ImagesService(request.session)
    img_service.select_image(data['img_id'])

    return jsonify()


@app.route('/decisions/', methods=['GET'])
@session_wrapper()
def get_decisions():
    decision_service = DecisionService(request.session)
    decision = decision_service.make_decision()
    return jsonify({'result': decision})
