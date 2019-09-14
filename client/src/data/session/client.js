const fetch = require('node-fetch');

export class sessionClient {
  _url() {
    if (window.location.href.includes('localhost')) {
      return 'http://localhost:5000/';
    }
    return 'https://potential-carnival.appspot.com/';
  }

  obtainSessionID = async () => {
    let session = await fetch(this._url() + 'sessions', { method: 'POST' });

    let session_body = await session.json();
    return session_body['session_id'];
  };
}
