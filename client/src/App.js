import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import store from './data';
import Container from '@material-ui/core/Container';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ImagesView } from './views/Images';
import { SummaryView } from './views/Summary';
import { obtainSession } from './data/session/actions';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { blue, orange } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#083377'
    },
    secondary: {
      main: '#E33D32'
    }
  }
});

class App extends Component {
  componentDidMount() {
    let state = store.getState()['session'];
    if (!state['sessionID'] && !state['sessionReceiving']) {
      store.dispatch(obtainSession);
    }
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <CssBaseline />
          <Container component="main" maxWidth="md">
            <Router>
              <Route path="/" exact component={ImagesView} />
              <Route path="/summary/" component={SummaryView} />
            </Router>
          </Container>
        </Provider>
      </ThemeProvider>
    );
  }
}

export default App;
