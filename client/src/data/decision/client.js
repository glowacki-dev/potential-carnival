import { BaseClient } from '../client';

const fetch = require('node-fetch');

export class DecisionClient extends BaseClient {
  _getHeaders = sessionID => {
    return {
      'SESSION-ID': sessionID,
      'Content-Type': 'application/json'
    };
  };

  fetchDecision = async sessionID => {
    let decision = await fetch(this._url() + 'decisions/', {
      method: 'GET',
      headers: this._getHeaders(sessionID),
      mode: 'cors'
    });

    const decision_body = await decision.json();

    decision = decision_body.result;
    decision.long = parseFloat(decision.long);
    decision.lat = parseFloat(decision.lat);
    return decision;
  };
}
