import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { connect } from 'react-redux';
import compose from 'recompose/compose';

const styles = {};

export class PureDestinationDetails extends Component {
  render() {
    const { classes } = this.props;

    return <Paper elevation={2}></Paper>;
  }
}

PureDestinationDetails.propTypes = {
  matches: PropTypes.array.isRequired,
  perks: PropTypes.array.isRequired
};

export default compose(
  withStyles(styles),
  connect(({ images, session }) => {
    return {
      matches: session.matches,
      perks: session.perks
    };
  })
)(PureDestinationDetails);
