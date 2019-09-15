// All our reducers simply change the state of a single task.

import { image_actions } from './actions';

// The reducer describes how the contents of the store change for each action
export const images_reducer = (state = default_state, action) => {
  switch (action.type) {
    case image_actions.IMAGE_CLICK:
      return {
        ...state,
        images: state.images.map(image =>
          image.id === action.id
            ? { ...image, isSelected: !image.isSelected }
            : image
        ),
        selectedIDS: state.selectedIDS.concat([action.id])
      };
    case image_actions.IMAGE_FETCH_REQUEST:
      return {
        ...state,
        isImageFetching: true,
        isImageFinished: false,
        images: state.images
      };
    case image_actions.IMAGE_FETCH_SUCCESS:
      return {
        ...state,
        isImageFetching: false,
        isImageFinished: false,
        images: state.images.concat(action.images)
      };
    default:
      return state;
  }
};

// The initial state of our store when the app loads.
// Usually you would fetch this from a server
const default_state = {
  isImageFetching: false,
  images: [],
  selectedIDS: []
};
