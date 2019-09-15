from functools import wraps

from flask import request, jsonify, current_app


def session_wrapper(fn=None):
    """Reads session from headers and add it to the request"""

    def wrapper(func):
        @wraps(func)
        def inner(*args, **kwargs):
            session_id = request.headers.get("SESSION-ID")
            if not session_id:
                return jsonify({"error": "missing SESSION-ID token"}), 401

            session = current_app.services["session"].get_session(session_id)
            request.session = session
            return func(*args, **kwargs)

        return inner

    return wrapper(fn) if fn else wrapper
