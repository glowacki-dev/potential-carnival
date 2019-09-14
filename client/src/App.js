import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import store from './lib/redux';

import ImagesList from './components/ImagesList';
import BottomAppBar from './components/BottomAppBar';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CssBaseline />
        <ImagesList />
        <BottomAppBar />
      </Provider>
    );
  }
}

export default App;
