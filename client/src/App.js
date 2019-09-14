import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import store from './lib/redux';

import ImagesList from './components/ImagesList';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CssBaseline />
        <ImagesList />
      </Provider>
    );
  }
}

export default App;
