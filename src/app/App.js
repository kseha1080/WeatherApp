import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import store from './store';

import theme from '../theme';

// Custom components
import AppContainer from '../views/AppContainer';
import Main from '../views/Main';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <MuiThemeProvider theme={theme}>
            <AppContainer>
              <Route exact path='/' component={Main} />
            </AppContainer>
          </MuiThemeProvider>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
