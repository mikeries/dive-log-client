import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { loginUser } from '../redux/modules/Auth/sessionActions'

import Welcome from '../views/welcome'
import Dashboard from '../views/dashboard'
import Dives from '../views/dives'
import Locations from '../views/locations'

import { getQueryParams } from '../utils';

class App extends Component {
  constructor() {
    super();

    const params = getQueryParams();
    const jwt = params.token || sessionStorage.getItem('jwt');

    this.state = {
      jwt: jwt || null
    }
  }

  isLoggedIn() {
    return !!this.state.jwt;
  }

  componentWillMount() {
    this.props.loginUser(this.state.jwt);
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
            <Route exact path='/locations' component={Locations} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { loginUser }
  , dispatch);
};

export default connect(null, mapDispatchToProps)(App);
