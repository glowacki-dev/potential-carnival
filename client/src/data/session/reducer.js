import { session_actions } from './actions';

let init_state = {
  sessionID: null
};

export const session_reducer = (state = init_state, action) => {
  switch (action.type) {
    case session_actions.SESSION_REQUEST:
      return {
        sessionID: null,
        sessionReceiving: true
      };
    case session_actions.SESSION_RECEIVE:
      return {
        sessionID: action['sessionID']
      };
    default:
      return state;
  }
};
