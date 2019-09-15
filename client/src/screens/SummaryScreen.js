import React, { Component } from 'react';

import DestinationHeader from '../components/DestinationHeader';
import DestinationDetails from '../components/DestinationDetails';

export class PureSummaryScreen extends Component {
  render() {
    return (
      <div style={{ paddingBottom: 10 }}>
        <DestinationHeader />
      </div>
    );
  }
}

export default PureSummaryScreen;
