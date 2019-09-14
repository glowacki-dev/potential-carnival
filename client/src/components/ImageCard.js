import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

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
    backgroundColor: 'rgba(0,255,0,0.3)'
  }
});

export default function ImageCard({
  image: { id, title, state },
  onClickCard
}) {
  const classes = useStyles();

  return (
    <Card className={classes.card} onClick={() => onClickCard(id)}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://placeimg.com/640/480/any"
          title="Contemplative Reptile"
        />
        <div className={classes.overlay} hidden={state != 'CARD_LIKED'}></div>
      </CardActionArea>
    </Card>
  );
}

ImageCard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired
  }),
  onClickTask: PropTypes.func
};
