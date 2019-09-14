import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import ImageCard from './ImageCard';

const useStyles = makeStyles(theme => ({
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  },
  icon: {
    color: 'white'
  }
}));

function ImagesList({ loading, images, onClickCard }) {
  const classes = useStyles();

  const events = {
    onClickCard
  };

  if (loading) {
    return <div className="list-items">loading</div>;
  }

  if (images.length === 0) {
    return <div className="list-items">empty</div>;
  }

  return (
    <GridList cellHeight={520} cols={1}>
      {images.map(image => (
        <GridListTile key={image.id} cols={1} rows={1}>
          <ImageCard key={image.id} image={image} {...events} />
        </GridListTile>
      ))}
    </GridList>
  );
}

export default ImagesList;
