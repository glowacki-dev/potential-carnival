import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ImageCard from './ImageCard';

export const image = {
  id: '1',
  isSelected: false,
  url: 'https://placeimg.com/640/480/any'
};

export const actions = {
  onClickCard: action('onClickCard')
};

storiesOf('ImageCard', module)
  .addDecorator(card => <div style={{ padding: '20px' }}>{card()}</div>)
  .add('default', () => <ImageCard image={image} {...actions} />)
  .add('selected', () => (
    <ImageCard image={{ ...image, isSelected: true }} {...actions} />
  ));
