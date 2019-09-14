import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { clickImage } from '../lib/redux';

import ImageCard from './ImageCard';

const useStyles = makeStyles();

export function PureImagesList({ images, onClickCard }) {
  const classes = useStyles();

  const events = {
    onClickCard
  };

  if (images.length === 0) {
    return <div className="list-items">empty</div>;
  }

  return (
    <GridList cellHeight={440} cols={1}>
      {images.map(image => (
        <GridListTile key={image.id} cols={1} rows={1}>
          <ImageCard key={image.id} image={image} {...events} />
        </GridListTile>
      ))}
    </GridList>
  );
}

PureImagesList.propTypes = {
  images: PropTypes.arrayOf(ImageCard.propTypes.card).isRequired,
  onClickCard: PropTypes.func
};

export default connect(
  ({ images }) => ({
    images: images
  }),
  dispatch => ({
    onClickCard: id => dispatch(clickImage(id))
  })
)(PureImagesList);
