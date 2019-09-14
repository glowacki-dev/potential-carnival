import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { PureProgress } from './Progress';

export const progress = {
  count: 3,
  max: 10
};

storiesOf('Progress', module)
  .addDecorator(card => <div style={{ padding: '20px' }}>{card()}</div>)
  .add('default', () => <PureProgress progress={progress} />)
  .add('empty', () => <PureProgress progress={{ ...progress, count: 0 }} />)
  .add('full', () => (
    <PureProgress progress={{ ...progress, count: progress.max }} />
  ))
  .add('overFull', () => (
    <PureProgress progress={{ ...progress, count: progress.max * 2 }} />
  ))
  .add('maxIsZero', () => <PureProgress progress={{ ...progress, max: 0 }} />);
