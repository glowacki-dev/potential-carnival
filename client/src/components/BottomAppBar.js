import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { connect } from 'react-redux';

import Progress from './Progress';

const useStyles = makeStyles({
  appBar: {
    top: 'auto',
    bottom: 0
  }
});

export function PureBottomAppBar({ progress }) {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <Toolbar>
        <Progress progress={progress} />
      </Toolbar>
    </AppBar>
  );
}

PureBottomAppBar.propTypes = {
  progress: PropTypes.arrayOf(Progress.propTypes.progress).isRequired
};

export default connect(
  ({ images }) => ({
    progress: {
      count: images.filter(image => image.isSelected).length,
      max: images.length
    }
  }),
  () => ({})
)(PureBottomAppBar);
