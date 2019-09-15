import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';

import { PureImagesScreen } from './ImagesScreen';

const store = {
  getState: () => {
    return {
      images: {
        isImageFetching: false,
        isImageSaving: false,
        images: [
          { id: '1', url: 'https://placeimg.com/640/480/any' },
          { id: '2', url: 'https://placeimg.com/640/480/any' }
        ],
        selectedIDS: []
      },
      session: {
        sessionID: 1
      }
    };
  },
  subscribe: () => 0,
  dispatch: action('dispatch')
};

storiesOf('ImagesScreen', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('default', () => <PureImagesScreen />);
