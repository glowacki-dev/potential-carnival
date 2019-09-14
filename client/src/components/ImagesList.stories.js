import React from 'react';
import { storiesOf } from '@storybook/react';

import ImagesList from './ImagesList';
import { image, actions } from './ImageCard.stories';

export const defatultImageCards = [
  { ...image, id: '1' },
  { ...image, id: '2' },
  { ...image, id: '3' }
];

export const withLikedImages = [
  ...defatultImageCards.slice(0, 2),
  { ...image, id: '3', isSelected: true }
];

storiesOf('ImagesList', module)
  .addDecorator(list => <div style={{ padding: '20px' }}>{list()}</div>)
  .add('default', () => <ImagesList images={defatultImageCards} {...actions} />)
  .add('withLikedImages', () => (
    <ImagesList images={withLikedImages} {...actions} />
  ));
