import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import PropTypes from 'prop-types';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';

import Heart from './Heart';

const useStyles = makeStyles({
  card: {
    maxWidth: 400,
    position: 'relative',
    margin: 20
  },
  media: {
    height: 400
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  heart: {
    width: 100,
    height: 100,
    opacity: 0.2
  }
});

function ImageCard({ image: { id, isSelected, url, alt }, onClickCard }) {
  const classes = useStyles();

  return (
    <Card
      className={classes.card}
      raised={true}
      style={{ color: isSelected ? red[400] : grey[400] }}
      onClick={() => onClickCard(id)}
    >
      <CardActionArea centerRipple={true}>
        <CardMedia className={classes.media} image={url} alt={alt} />
        {isSelected ? (
          <div className={classes.overlay}>
            <Heart
              className={classes.heart}
              heart={{ isLoved: isSelected }}
            ></Heart>
          </div>
        ) : (
          <div className={classes.overlay}>
            <Heart
              className={classes.heart}
              heart={{ isLoved: isSelected }}
            ></Heart>
          </div>
        )}
      </CardActionArea>
    </Card>
  );
}

ImageCard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    url: PropTypes.string.isRequired,
    alt: PropTypes.string
  }),
  onClickCard: PropTypes.func
};

ImageCard.defaultProps = {
  isSelected: false
};

export default ImageCard;
