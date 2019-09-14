import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ImageCard from './ImageCard';

export const image = {
  id: '1',
  title: 'Test Task',
  state: 'CARD_NEUTRAL',
  updatedAt: new Date(2018, 0, 1, 9, 0)
};

export const actions = {
  onClickCard: action('onClickCard')
};

storiesOf('ImageCard', module)
  .addDecorator(card => <div style={{ padding: '20px' }}>{card()}</div>)
  .add('default', () => <ImageCard image={image} {...actions} />)
  .add('liked', () => (
    <ImageCard image={{ ...image, state: 'CARD_LIKED' }} {...actions} />
  ));
