import React, { Component } from 'react';

import ImagesList from '../components/ImagesList';
import BottomAppBar from '../components/BottomAppBar';
import Progress from '../components/Progress';

export class PureImagesScreen extends Component {
  render() {
    return (
      <div>
        <ImagesList />
        <BottomAppBar content={<Progress />} />
      </div>
    );
  }
}

export default PureImagesScreen;
