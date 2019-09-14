import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import store from './lib/redux';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ImagesView } from './views/Images';
import { SummaryView } from './views/Summary';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CssBaseline />
        <Router>
          <Route path="/" exact component={ImagesView} />
          <Route path="/summary/" component={SummaryView} />
        </Router>
      </Provider>
    );
  }
}

export default App;
