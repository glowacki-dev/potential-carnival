// A simple redux store/actions/reducer implementation.
// A true app would be more complex and separated into different files.
import { createStore } from 'redux';

// The actions are the "names" of the changes that can happen to the store
export const actions = {
  CLICK_IMAGE: 'CLICK_IMAGE'
};

// The action creators bundle actions with the data required to execute them
export const clickImage = id => ({ type: actions.CLICK_IMAGE, id });

// All our reducers simply change the state of a single task.
function imageStateReducer() {
  return (state, action) => {
    return {
      ...state,
      images: state.images.map(image =>
        image.id === action.id
          ? { ...image, isSelected: !image.isSelected }
          : image
      )
    };
  };
}

// The reducer describes how the contents of the store change for each action
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.CLICK_IMAGE:
      return imageStateReducer()(state, action);
    default:
      return state;
  }
};

// The initial state of our store when the app loads.
// Usually you would fetch this from a server
const defaultImages = [
  { id: '1', url: 'https://placeimg.com/640/480/any', alt: 'cat' },
  { id: '2', url: 'https://placeimg.com/640/480/any', alt: 'dog' },
  { id: '3', url: 'https://placeimg.com/640/480/any', alt: 'dessert' },
  { id: '4', url: 'https://placeimg.com/640/480/any', alt: 'desert' }
];

// We export the constructed redux store
export default createStore(reducer, { images: defaultImages });
