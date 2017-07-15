import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Welcome from '../views/welcome'
import Dashboard from '../views/dashboard'
import Dives from '../views/dives'
import Locations from '../views/locations'

import { getQueryParams } from '../utils';

class App extends Component {
  constructor() {
    super();

    const params = getQueryParams();
    const token = params.token || sessionStorage.getItem('token');
    this.state = { token: token };
  }

  isLoggedIn() {
    return !!this.state.token;
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" render={() => (
              this.isLoggedIn() ? (
                <Redirect to="/dashboard" />
              ) : (
                <Welcome />
              )
            )}/>
            <Route exact path="/dashboard" render={() => (
              this.isLoggedIn() ? (
                <Dashboard />
              ) : (
                <Redirect to="/"/>
              )
            )}/>
            <Route exact path='/dives' component={Dives} />
            <Route exact path='/locations' component={Locations} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
