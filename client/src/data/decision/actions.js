import { DecisionClient } from './client';

export const decision_actions = {
  DECISION_FETCH_REQUEST: 'DECISION_FETCH_REQUEST',
  DECISION_FETCH_SUCCESS: 'DECISION_FETCH_SUCCESS'
};

export const fetchDecision = sessionID => {
  return async dispatch => {
    dispatch({ type: decision_actions.DECISION_FETCH_REQUEST });
    const decision = await new DecisionClient().fetchDecision(sessionID);

    dispatch({
      type: decision_actions.DECISION_FETCH_SUCCESS,
      decision: decision
    });
  };
};
