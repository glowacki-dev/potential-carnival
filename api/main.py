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


@app.route('/sessions', methods=['POST'])
def create_session():
    session_id = app.services['session'].create_session()
    return jsonify({'session_id': session_id})


@app.route('/sessions/<session_id>')
def get_session(session_id):
    session = app.services['session'].get_session(session_id)
    return jsonify(session)
