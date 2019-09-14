import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import Map from './Map';

const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    maxWidth: 1051,
    height: 287,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    background:
      'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 60%, rgba(255, 255, 255, 0.3) 70%, rgba(255,255,255,1) 98%)'
  },
  mainGrid: {
    position: 'relative',
    top: 170,
    color: theme.palette.common.black
  },
  mainFeaturedPostContent: {
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  }
}));

function DestinationHeader({
  destination: { id, name, description, latitude, longitude, image_url }
}) {
  const classes = useStyles();

  return (
    <Paper
      elevation={0}
      className={classes.mainFeaturedPost}
      style={{ backgroundImage: `url(${image_url})` }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={image_url} alt="background" />}
      <div className={classes.overlay} />
      <Grid container className={classes.mainGrid}>
        <Grid item md={8}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3" gutterBottom>
              {name}
            </Typography>
            <Typography paragraph>{description}</Typography>
          </div>
        </Grid>
        <Grid item md={4} style={{ position: 'relative' }}>
          <Map />
        </Grid>
      </Grid>
    </Paper>
  );
}

DestinationHeader.propTypes = {
  destination: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired
  })
};

DestinationHeader.defaultProps = {};

export default DestinationHeader;
