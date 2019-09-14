import React from 'react';
import { storiesOf } from '@storybook/react';

import BottomAppBar from './BottomAppBar';

storiesOf('BottomAppBar', module)
  .addDecorator(card => <div style={{ padding: '20px' }}>{card()}</div>)
  .add('default', () => <BottomAppBar />);
