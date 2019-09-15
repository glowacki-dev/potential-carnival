from flask import Flask, request, jsonify
from flask_cors import CORS
from random import choice

from api.helpers.session import session_wrapper
from api.services.sessions import SessionService
from api.services.images import ImagesService
from api.services.decide import DecisionService
from api.services.prices import PriceService

app = Flask(__name__)
app.services = {"session": SessionService()}
CORS(app, resources={r"/*": {"origins": "*"}})


@app.route("/")
def hello():
    return f"Hello, World!"


@app.route("/sessions/", methods=["POST"])
def create_session():
    session_id = app.services["session"].create_session()
    return jsonify({"session_id": session_id})


@app.route("/sessions/")
@session_wrapper()
def get_session():
    return jsonify(request.session.get().to_dict())


@app.route("/images/", methods=["GET"])
@session_wrapper()
def get_images():
    img_service = ImagesService(request.session)

    images = img_service.generate_images()
    return jsonify({"images": images})


@app.route("/images/", methods=["POST"])
@session_wrapper()
def save_images():
    data = request.json
    if not data.get("img_ids"):
        return (
            jsonify({"error": "Missing img_ids parameter in body, expecting list"}),
            400,
        )

    img_service = ImagesService(request.session)
    img_service.select_images(data["img_ids"])

    return jsonify()


@app.route("/decisions/", methods=["GET"])
@session_wrapper()
def get_decisions():
    decision_service = DecisionService(request.session)
    result = decision_service.make_decision()
    if not result:
        return jsonify({"error": "No choices in session"}), 500

    decision_service = PriceService(
        {
            "origin": "WAW",
            "destination": result["result"]["code"],
            "adults": 1,
            "departureDate": choice([f"{i}102019" for i in range(11, 29)]),
            "returnDate": choice([f"{i}112019" for i in range(11, 29)]),
        }
    )
    try:
        price = decision_service.get_price()
    except:
        price = {"url": "https://lot.com/"}
    result.update(price=price)
    return jsonify(result)


@app.route("/prices/", methods=["GET"])
@session_wrapper()
def get_price():
    data = request.json
    for key in ["origin", "destination", "departureDate", "returnDate", "adults"]:
        if not data.get(key):
            return jsonify({"error": f"Body must specify {key}"}), 400
    decision_service = PriceService(data)
    try:
        result = decision_service.get_price()
        return jsonify(result)
    except Exception as e:
        return jsonify({"error": str(e)}), 500
