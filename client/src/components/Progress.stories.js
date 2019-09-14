import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Progress from './Progress';

export const progress = {
  count: 3,
  max: 10
};

storiesOf('Progress', module)
  .addDecorator(card => <div style={{ padding: '20px' }}>{card()}</div>)
  .add('default', () => <Progress progress={progress} />)
  .add('empty', () => <Progress progress={{ ...progress, count: 0 }} />)
  .add('full', () => (
    <Progress progress={{ ...progress, count: progress.max }} />
  ))
  .add('overFull', () => (
    <Progress progress={{ ...progress, count: progress.max * 2 }} />
  ))
  .add('maxIsZero', () => <Progress progress={{ ...progress, max: 0 }} />);
