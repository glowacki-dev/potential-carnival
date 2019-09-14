import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import red from '@material-ui/core/colors/red';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

export default function Progress({ progress: { count, max } }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {max === 0 ? (
        <LinearProgress />
      ) : (
        <LinearProgress
          variant="determinate"
          value={Math.min((100 * count) / max, 100)}
        />
      )}
    </div>
  );
}

Progress.propTypes = {
  progress: PropTypes.shape({
    count: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
  })
};
