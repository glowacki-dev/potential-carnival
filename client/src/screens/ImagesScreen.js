import React, { Component } from 'react';

import ImagesList from '../components/ImagesList';
import BottomAppBar from '../components/BottomAppBar';
import Progress from '../components/Progress';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export class PureImagesScreen extends Component {
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <Paper elevation="10" style={{ padding: 10, margin: 20 }}>
          <Typography component="p">
            Look at all of the photos below and select those that seem fun and
            enjoyable to you.
            <br />
            Our algorithms will then find the best destination for your next
            journey.
          </Typography>
        </Paper>
        <ImagesList />
        <BottomAppBar content={<Progress />} />
      </div>
    );
  }
}

export default PureImagesScreen;
