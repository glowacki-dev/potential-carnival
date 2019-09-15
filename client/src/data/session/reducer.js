import { session_actions } from './actions';

let init_state = {
  sessionID: null,
  // Kill me plz xD
  id: '1',
  name: 'Malaysia - Kuala Lumpur',
  description:
    'A visit to the capital of Malaysia is a feast for all the senses. The city landscape is decorated with skyscrapers, minarets and lush parks. The walks are accompanied by amazing aromas of freshly prepared dishes and drinks. Kuala Lumpur is characterized by multiculturalism which is perfectly reflected in the colorful Chinatown and fragrant Little India. This is one of our many connections to Asia, Australia and New Zealand, prepared with partner airlines with a convenient transfer in Singapore.',
  image_url: 'https://placeimg.com/1051/287/any',
  latitude: 2.7455799579619997,
  longitude: 101.70999908446998,
  matches: [{ name: 'Imprezy' }, { name: 'Historia' }, { name: 'Zabytki' }]
};

export const session_reducer = (state = init_state, action) => {
  switch (action.type) {
    case session_actions.SESSION_REQUEST:
      return {
        ...state,
        sessionID: null,
        sessionReceiving: true
      };
    case session_actions.SESSION_RECEIVE:
      return {
        ...state,
        sessionID: action['sessionID']
      };
    default:
      return state;
  }
};
