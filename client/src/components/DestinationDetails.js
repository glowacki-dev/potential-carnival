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
import ItemsList from './ItemsList';
import DestinationHeader from './DestinationHeader';
import FullLoader from './FullLoader';

class PureDestinationDetails extends Component {
  render() {
    if (!this.props.decision) return <FullLoader />;

    return (
      <div>
        <ItemsList
          title="What you'd like there:"
          items={(this.props.decision.tags || []).map(tag => tag.description)}
        />
        <ItemsList
          title="Recommended upgrades:"
          items={(this.props.decision.adds || []).map(add => add.description)}
        />
      </div>
    );
  }
}

PureDestinationDetails.propTypes = {
  decision: PropTypes.object.isRequired
};

export default PureDestinationDetails;
