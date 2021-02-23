import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import CssList from './css/.list';
import Pages from './pages/.list';
import Components from './components/.list.js';

class App extends Component {
  render() {
    return (
      <Router>
        <CssList />
        <Components.Nav />
        <Switch>
          <Redirect exact from="/" to="/home" />

          <div className="App">
            <div className="AppMargin" />
            <Route exact path="/home" component={Pages.Landing} />
          </div>
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </Router>
    );
  }
}

export default App;
