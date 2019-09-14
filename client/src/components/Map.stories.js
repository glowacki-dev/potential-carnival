import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Map from './Map';

export const map = {
  latitude: 12,
  longitude: 25
};

export const actions = {};

storiesOf('Map', module).add('default', () => <Map {...map} />);
