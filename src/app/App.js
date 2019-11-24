import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import store from './store';

// Custom components
import AppContainer from '../views/AppContainer';
import Main from '../views/Main';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <AppContainer>
            <Route exact path='/' component={Main} />
          </AppContainer>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
