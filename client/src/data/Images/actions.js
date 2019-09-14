import { ImagesClient } from './client';

export const image_actions = {
  IMAGE_CLICK: 'IMAGE_CLICK',
  IMAGE_FETCH_REQUEST: 'IMAGE_FETCH_REQUEST',
  IMAGE_FETCH_SUCCESS: 'IMAGE_FETCH_SUCCESS'
};

export const fetchImages = sessionID => {
  return async dispatch => {
    dispatch({ type: image_actions.IMAGE_FETCH_REQUEST });
    const images = await new ImagesClient().fetchImages(sessionID);

    dispatch({ type: image_actions.IMAGE_FETCH_SUCCESS, images: images });
  };
};

export const clickImage = (sessionID, imgID) => {
  return async dispatch => {
    dispatch({ type: image_actions.IMAGE_CLICK, id: imgID });

    await new ImagesClient().imageSelect(sessionID, imgID);
  };
};
