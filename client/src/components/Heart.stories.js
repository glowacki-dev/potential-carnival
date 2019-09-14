import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Heart from './Heart';

export const heart = {
  isLoved: false
};

export const actions = {
  onClickHeart: action('onClickHeart')
};

storiesOf('Heart', module)
  .addDecorator(card => (
    <div style={{ padding: '20px', background: 'rgba(120, 160, 40, 0.5)' }}>
      {card()}
    </div>
  ))
  .add('default', () => <Heart heart={heart} {...actions} />)
  .add('liked', () => (
    <Heart heart={{ ...heart, isLoved: true }} {...actions} />
  ));
