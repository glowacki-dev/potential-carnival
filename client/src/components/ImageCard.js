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
    position: 'relative'
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

export default function ImageCard({
  image: { id, isSelected, url },
  onClickCard
}) {
  const classes = useStyles();

  return (
    <Card
      className={classes.card}
      style={{ color: isSelected ? grey[200] : red[200] }}
      onClick={() => onClickCard(id)}
    >
      <CardActionArea centerRipple={true}>
        <CardMedia className={classes.media} image={url} />
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
    url: PropTypes.string.isRequired
  }),
  onClickCard: PropTypes.func
};
