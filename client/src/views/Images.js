import React, { Component } from 'react';
import ImagesList from '../components/ImagesList';
import BottomAppBar from '../components/BottomAppBar';
import Progress from '../components/Progress';
import FullLoader from '../components/FullLoader';

export class ImagesView extends Component {
  render() {
    return (
      <div>
        <FullLoader />
        <ImagesList />
        <BottomAppBar content={<Progress />} />
      </div>
    );
  }
}
