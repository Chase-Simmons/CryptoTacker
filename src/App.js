import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import CssList from './css/.list';
import pages from './pages/.list';

import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <Router>
        <CssList />
        <Nav />
        <Switch>
          <Redirect exact from="/" to="/home" />

          <div className="App">
            <div className="AppMargin" />
            <Route exact path="/home" component={pages.landing} />
          </div>
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </Router>
    );
  }
}

export default App;
