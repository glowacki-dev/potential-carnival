import { DecisionClient } from './client';
import { sleep } from '../../helpers';

export const decision_actions = {
  DECISION_FETCH_REQUEST: 'DECISION_FETCH_REQUEST',
  DECISION_FETCH_SUCCESS: 'DECISION_FETCH_SUCCESS'
};

export const fetchDecision = sessionID => {
  return async dispatch => {
    dispatch({ type: decision_actions.DECISION_FETCH_REQUEST });
    await sleep(300);

    const decision = await new DecisionClient().fetchDecision(sessionID);

    dispatch({
      type: decision_actions.DECISION_FETCH_SUCCESS,
      decision: decision
    });
  };
};
