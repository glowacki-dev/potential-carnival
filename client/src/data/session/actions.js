import { sessionClient } from './client';

export let session_actions = {
  SESSION_REQUEST: 'SESSION_REQUEST',
  SESSION_RECEIVE: 'SESSION_RECEIVED'
};

export let obtainSession = async dispatch => {
  dispatch({ type: session_actions.SESSION_REQUEST });

  let sessionID = await new sessionClient().obtainSessionID();
  dispatch({ type: session_actions.SESSION_RECEIVE, sessionID: sessionID });
};
