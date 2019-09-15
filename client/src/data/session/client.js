import { BaseClient } from '../client';

const fetch = require('node-fetch');

export class sessionClient extends BaseClient {
  obtainSessionID = async () => {
    let session = await fetch(this._url() + 'sessions/', { method: 'POST' });

    let session_body = await session.json();
    return session_body['session_id'];
  };
}
