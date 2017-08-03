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

import { DIVES_ROOT, LOCATIONS_ROOT } from '../constants';

import { fetchDives } from '../redux/modules/Dives/divesActions';
import { fetchLocations } from '../redux/modules/Locations/locationsActions';

import Navbar from '../views/components/Navbar';
import Welcome from '../views/welcome';
import Dashboard from '../views/dashboard';
import DivesPage from './DivesPage';
import Locations from '../views/locations/List';

import { getQueryParams } from '../utils';

class App extends Component {
  constructor() {
    super();

    const params = getQueryParams();
    const jwt = params.token || sessionStorage.getItem('jwt');

    this.state = {
      jwt: jwt || null,
      errors: null
    };
  }

  isLoggedIn() {
    return !!this.state.jwt;
  }

  handleLogin() {
    console.log('clicked')
  }

  handleInitializationError = errors => {
    this.setState({ errors: errors });
  }

  componentDidMount() {
    const jwt = this.state.jwt;
    this.props.loginUser(jwt);

    if(jwt) {
      this.props.fetchUser(this.handleInitializationError);
      this.props.fetchDives(this.handleInitializationError);
      this.props.fetchLocations(this.handleInitializationError);
    }
  }

  render() {
    return (
      <Router>
        <div className="App">

          { this.isLoggedIn() &&
            <Navbar user={this.props.user} handleLogout={this.props.logoutUser} />
          }

          <Switch>
            {this.state.errors && 
              <Route path='' render={() => (
                <div>
                  <p>Sorry, an error occurred.</p>
                  <p>Please contact your system administrator.</p>
                </div>
              )}/>
            }

            <Route exact path='/logout' render={() => (<Redirect to="/"/>)} />
            
            <Route exact path="/" render={() => (
              this.isLoggedIn() ? (
                <Redirect to="/dashboard" />
              ) : (
                <Welcome handleLogin={this.handleLogin} />
              )
            )}/>

            <Route exact path="/dashboard" render={() => (
              this.isLoggedIn() ? (
                <Dashboard user={this.props.user} dives={this.props.dives} />
              ) : (
                <Redirect to="/"/>
              )
            )}/>

            <Route path={`${DIVES_ROOT}`} component={DivesPage} />

            <Route exact path={`${LOCATIONS_ROOT}`} component={Locations} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { loginUser,
      logoutUser,
      fetchUser,
      fetchDives,
      fetchLocations
    }
  , dispatch);
};

const mapStateToProps = state => {
  return { 
    user: state.sessionReducer.user,
    dives: state.divesReducer.dives
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
