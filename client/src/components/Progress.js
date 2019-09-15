import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom';

import store from './../data';
import { saveImages } from '../data/Images/actions';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

const AdapterLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} />
));

export function PureProgress({
  progress: { count, max },
  sessionID,
  selectedIDS
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid item xs={5}>
          {!max ? (
            <LinearProgress color="secondary" />
          ) : (
            <LinearProgress
              color="secondary"
              variant="determinate"
              value={Math.min((100 * count) / max, 100)}
            />
          )}
        </Grid>
        <Grid item>
          <Container maxWidth="sm">
            {count < max || !max ? (
              <Tooltip
                title={`Please choose at least ${max - count} more ${
                  max - count > 1 ? 'photos' : 'photo'
                }`}
              >
                <div>
                  <Button variant="contained" color="secondary" disabled>
                    Choose more photos
                  </Button>
                </div>
              </Tooltip>
            ) : (
              <Tooltip title="You can still select more images if you want">
                <Button
                  onClick={() => {
                    store.dispatch(saveImages(sessionID, selectedIDS));
                  }}
                  variant="contained"
                  color="secondary"
                  component={AdapterLink}
                  to="/summary/"
                >
                  Let's go!
                </Button>
              </Tooltip>
            )}
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}

PureProgress.propTypes = {
  progress: PropTypes.shape({
    count: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
  })
};

export default connect(
  ({ images, session }) => ({
    progress: {
      count: images.images.filter(image => image.isSelected).length,
      max: Math.ceil(images.images.length / 4)
    },
    sessionID: session.sessionID,
    selectedIDS: images.selectedIDS
  }),
  () => ({})
)(PureProgress);
