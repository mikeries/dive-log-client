import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { 
  loginUser, 
  logoutUser, 
  fetchUser
} from '../redux/modules/Auth/sessionActions';

import Welcome from '../views/welcome';
import Dashboard from '../views/dashboard';
import DivesPage from '../views/divesPage';
import Locations from '../views/locations';

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
    const jwt = this.state.jwt
    this.props.loginUser(jwt);
    if(jwt) this.props.fetchUser(jwt)
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
                <Dashboard handleLogout={this.props.logoutUser} user={this.props.user} />
              ) : (
                <Redirect to="/"/>
              )
            )}/>
            <Route path='/dives' component={DivesPage} handleLogout={this.props.logoutUser} />
            <Route exact path='/locations' component={Locations} handleLogout={this.props.logoutUser}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { loginUser,
      logoutUser,
      fetchUser
    }
  , dispatch);
};

const mapStateToProps = (state) => {
  return { 
    user: state.sessionReducer.user,
    dives: state.divesReducer.dives
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
