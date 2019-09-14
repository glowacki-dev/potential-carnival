import React from 'react';
import { storiesOf } from '@storybook/react';

import { PureBottomAppBar } from './BottomAppBar';

storiesOf('BottomAppBar', module)
  .addDecorator(card => <div style={{ padding: '20px' }}>{card()}</div>)
  .add('default', () => <PureBottomAppBar progress={{ count: 2, max: 10 }} />);
