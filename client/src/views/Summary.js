import React, { Component } from 'react';
import DestinationHeader from '../components/DestinationHeader';
import DestinationDetails from '../components/DestinationDetails';

export class SummaryView extends Component {
  render() {
    return (
      <div>
        <DestinationHeader />
        <DestinationDetails />
      </div>
    );
  }
}
