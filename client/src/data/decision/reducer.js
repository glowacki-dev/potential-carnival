import { decision_actions } from './actions';

let init_state = {
  isDecisionFetching: false
};

export const decision_reducer = (state = init_state, action) => {
  switch (action.type) {
    case decision_actions.DECISION_FETCH_REQUEST:
      return {
        ...state,
        isDecisionFetching: true
      };
    case decision_actions.DECISION_FETCH_SUCCESS:
      return {
        ...state,
        isDecisionFetching: false
      };
    default:
      return state;
  }
};
