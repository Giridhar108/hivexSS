import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {store, persistor} from './app/store';
import LoginPage from './pages/LoginPage';
import Console from './pages/Console';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Switch>
            <Route path="/" exact>
              <LoginPage />
            </Route>
            <Route path="/console" exact>
              <Console />
            </Route>
          </Switch>
        </PersistGate>
      </Provider>
    </Router>
  );
}

export default App;
