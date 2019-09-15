import React from 'react';
import { storiesOf } from '@storybook/react';

import ItemsList from './ItemsList';

const defatultItems = [
  { name: 'Item 1', description: 'Bardzo fajny item' },
  { name: 'Item 2', description: 'Jeszcze fajniejszy item' },
  { name: 'Item 3', description: 'Najfajniejszy item' }
];

storiesOf('ItemsList', module)
  .addDecorator(list => <div style={{ padding: '20px' }}>{list()}</div>)
  .add('default', () => (
    <ItemsList title="Super lista" items={defatultItems} />
  ));
