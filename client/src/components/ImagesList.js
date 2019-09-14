import React, { Component } from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { connect } from 'react-redux';

import ImageCard from './ImageCard';
import { clickImage, fetchImages } from '../data/Images/actions';
import store from './../data';

export class PureImagesList extends Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      !this.props.isImageFetching &&
      this.props.sessionID &&
      this.props.images.length === 0
    ) {
      store.dispatch(fetchImages(this.props.sessionID));
    }
  }

  onClickCard = imgID => {
    store.dispatch(clickImage(this.props.sessionID, imgID));
  };

  render() {
    const events = { onClickCard: this.onClickCard };

    if (this.props.images.length === 0) {
      return <div className="list-items">empty</div>;
    }

    return (
      <GridList cellHeight={440} cols={1}>
        {this.props.images.map(image => (
          <GridListTile key={image.id} cols={1} rows={1}>
            <ImageCard key={image.id} image={image} {...events} />
          </GridListTile>
        ))}
      </GridList>
    );
  }
}

export default connect(({ images, session }) => {
  return {
    isImageFetching: images.isImageFetching,
    isImageFinished: images.isImageFinished,
    images: images.images,
    sessionID: session.sessionID
  };
})(PureImagesList);
