import React from 'react';
import { storiesOf } from '@storybook/react';

import ImagesList from './ImagesList';
import { image, actions } from './ImageCard.stories';

export const defatultImageCards = [
  { ...image, id: '1', title: 'image 1' },
  { ...image, id: '2', title: 'image 2' },
  { ...image, id: '3', title: 'image 3' },
  { ...image, id: '4', title: 'image 4' },
  { ...image, id: '5', title: 'image 5' },
  { ...image, id: '6', title: 'image 6' }
];

export const withLikedImages = [
  ...defatultImageCards.slice(0, 5),
  { id: '6', title: 'Task 6 (pinned)', state: 'CARD_LIKED' }
];

storiesOf('ImagesList', module)
  .addDecorator(list => <div style={{ padding: '20px' }}>{list()}</div>)
  .add('default', () => <ImagesList images={defatultImageCards} {...actions} />)
  .add('withLikedImages', () => (
    <ImagesList images={withLikedImages} {...actions} />
  ))
  .add('loading', () => <ImagesList loading images={[]} {...actions} />)
  .add('empty', () => <ImagesList images={[]} {...actions} />);
