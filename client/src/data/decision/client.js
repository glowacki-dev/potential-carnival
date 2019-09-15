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

    if (decision.status >= 400) {
      window.location.href = '/';
    }

    decision = decision_body.result;
    decision.long = parseFloat(decision.long);
    decision.lat = parseFloat(decision.lat);
    decision.tags = decision_body.tags;
    decision.adds = decision_body.adds;
    decision.price = decision_body.price;
    return decision;
  };
}
