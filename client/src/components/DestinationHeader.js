import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

import Map from './Map';
import store from './../data';
import { fetchDecision } from '../data/decision/actions';

const styles = {
  mainFeaturedPost: {
    position: 'relative',
    color: 'white',
    maxWidth: 1051,
    height: 287,
    marginBottom: '4em',
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
    color: 'black'
  },
  mainFeaturedPostContent: {
    padding: '2em'
  }
};

export class PureDestinationHeader extends Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      !this.props.decision &&
      !this.props.isImageSaving &&
      !this.props.isDecisionFetching
    ) {
      store.dispatch(fetchDecision(this.props.sessionID));
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <Paper
        elevation={0}
        className={classes.mainFeaturedPost}
        style={{ backgroundImage: `url(${this.props.image_url})` }}
      >
        {/* Increase the priority of the hero background image */}
        {
          <img
            style={{ display: 'none' }}
            src={this.props.image_url}
            alt="background"
          />
        }
        <div className={classes.overlay} />
        <Grid container className={classes.mainGrid}>
          <Grid item md={8}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography component="h1" variant="h3" gutterBottom>
                {this.props.name}
              </Typography>
              <Typography paragraph>{this.props.description}</Typography>
            </div>
          </Grid>
          <Grid item md={4} style={{ position: 'relative' }}>
            <Map
              latitude={this.props.latitude}
              longitude={this.props.longitude}
            />
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

// PureDestinationHeader.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   image_url: PropTypes.string.isRequired,
//   latitude: PropTypes.number.isRequired,
//   longitude: PropTypes.number.isRequired
// };

export default compose(
  withStyles(styles),
  connect(({ session, decision, images }) => {
    return {
      id: session.id,

      name: session.name,
      description: session.description,
      image_url: session.image_url,
      latitude: session.latitude,
      longitude: session.longitude,

      sessionID: session.sessionID,
      decision: decision.decision,
      isDecisionFetching: decision.isDecisionFetching,
      isImageSaving: images.isImageSaving
    };
  })
)(PureDestinationHeader);
