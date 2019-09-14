// All our reducers simply change the state of a single task.

import { image_actions } from './actions';

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
export const images_reducer = (state = default_state, action) => {
  switch (action.type) {
    case image_actions.CLICK_IMAGE:
      return imageStateReducer()(state, action);
    default:
      return state;
  }
};

// The initial state of our store when the app loads.
// Usually you would fetch this from a server
const default_state = {
  images: [
    { id: '1', url: 'https://placeimg.com/640/480/any', alt: 'cat' },
    { id: '2', url: 'https://placeimg.com/640/480/any', alt: 'dog' },
    { id: '3', url: 'https://placeimg.com/640/480/any', alt: 'dessert' },
    { id: '4', url: 'https://placeimg.com/640/480/any', alt: 'desert' }
  ]
};
