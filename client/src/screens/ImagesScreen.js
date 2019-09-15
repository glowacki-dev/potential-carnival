import React, { Component } from 'react';

import ImagesList from '../components/ImagesList';
import BottomAppBar from '../components/BottomAppBar';
import Progress from '../components/Progress';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export class PureImagesScreen extends Component {
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <Grid container>
          <Grid item md={4}>
            <img width="250" src={require('../logo.svg')} />
          </Grid>
          <Grid item md={8} style={{ display: 'flex', alignItems: 'center' }}>
            <Typography
              style={{
                color: 'white',
                textAlign: 'justify',
                fontSize: '1.1rem',
                fontWeight: 500
              }}
              component="p"
            >
              Look at the images below and select all of those that you enjoy.
              <br />
              Our algorithms will find the best destination for your next
              journey.
            </Typography>
          </Grid>
        </Grid>
        <ImagesList />
        <BottomAppBar content={<Progress />} />
      </div>
    );
  }
}

export default PureImagesScreen;
