import { applyMiddleware, combineReducers, createStore } from 'redux';
import { session_reducer } from './session/reducer';
import { images_reducer } from './Images/reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { decision_reducer } from './decision/reducer';

let rootReducer = combineReducers({
  session: session_reducer,
  decision: decision_reducer,
  images: images_reducer
});

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
