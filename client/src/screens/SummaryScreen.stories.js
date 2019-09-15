import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Provider } from 'react-redux';

import { PureSummaryScreen } from './SummaryScreen';

const store = {
  getState: () => {
    return {
      session: {
        name: 'Malaysia - Kuala Lumpur',
        description:
          'A visit to the capital of Malaysia is a feast for all the senses. The city landscape is decorated with skyscrapers, minarets and lush parks. The walks are accompanied by amazing aromas of freshly prepared dishes and drinks. Kuala Lumpur is characterized by multiculturalism which is perfectly reflected in the colorful Chinatown and fragrant Little India. This is one of our many connections to Asia, Australia and New Zealand, prepared with partner airlines with a convenient transfer in Singapore.',
        image_url: 'https://placeimg.com/1051/287/any',
        latitude: 2.7455799579619997,
        longitude: 101.70999908446998,
        matches: [
          { name: 'Imprezy' },
          { name: 'Historia' },
          { name: 'Zabytki' }
        ],
        perks: []
      }
    };
  },
  subscribe: () => 0,
  dispatch: action('dispatch')
};

storiesOf('SummaryScreen', module)
  .addDecorator(story => <Provider store={store}>{story()}</Provider>)
  .add('default', () => <PureSummaryScreen />);
