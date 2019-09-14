from flask import Flask, escape, request, jsonify

from api.services.sessions import SessionService

app = Flask(__name__)
app.services = {
    'session': SessionService()
}


@app.route('/')
def hello():
    name = request.args.get("name", "World")
    return f'Hello, {escape(name)}!'


@app.route('/create_session')
def create_session():
    session_id = app.services['session'].create_session()
    return jsonify({'session_id': session_id})
