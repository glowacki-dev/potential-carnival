import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  overlay: {
    position: 'absolute',
    zIndex: 999,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background:
      'linear-gradient(161deg, rgba(78,113,163,1) 0%, rgba(202,209,237,1) 100%)',
    color: '#FFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  progress: {
    margin: theme.spacing(5)
  }
}));

export default function FullLoader() {
  const classes = useStyles();

  return (
    <div className={classes.overlay}>
      <img width="300" src={require('../logo.svg')} />
      <CircularProgress
        className={classes.progress}
        disableShrink="true"
        size={100}
      />
    </div>
  );
}
