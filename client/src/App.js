import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import store from './data';
import Container from '@material-ui/core/Container';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ImagesView } from './views/Images';
import { SummaryView } from './views/Summary';
import { obtainSession } from './data/session/actions';

class App extends Component {
  componentDidMount() {
    let state = store.getState()['session'];
    if (!state['sessionID'] && !state['sessionReceiving']) {
      store.dispatch(obtainSession);
    }
  }

  render() {
    return (
      <Provider store={store}>
        <CssBaseline />
        <Container component="main" maxWidth="md">
          <Router>
            <Route path="/" exact component={ImagesView} />
            <Route path="/summary/" component={SummaryView} />
          </Router>
        </Container>
      </Provider>
    );
  }
}

export default App;
