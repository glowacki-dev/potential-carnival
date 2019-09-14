import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import red from '@material-ui/core/colors/red';
import LinearProgress from '@material-ui/core/LinearProgress';
import { connect } from 'react-redux';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

export function PureProgress({ progress: { count, max } }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {!max ? (
        <LinearProgress color="secondary" />
      ) : (
        <LinearProgress
          color="secondary"
          variant="determinate"
          value={Math.min((100 * count) / max, 100)}
        />
      )}
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
  ({ images }) => ({
    progress: {
      count: images.images.filter(image => image.isSelected).length,
      max: images.images.length
    }
  }),
  () => ({})
)(PureProgress);
