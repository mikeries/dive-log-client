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
  logoutUser, 
  fetchUser,
  facebookLogin,
  guestLogin
} from '../redux/modules/Auth/sessionActions';

import { DIVES_ROOT, LOCATIONS_ROOT } from '../constants';

import { fetchDives } from '../redux/modules/Dives/divesActions';
import { fetchLocations } from '../redux/modules/Locations/locationsActions';

import Navbar from '../views/components/Navbar';
import Aquarium from '../views/components/Aquarium'
import Welcome from '../views/welcome';
import Dashboard from '../views/dashboard';
import DivesPage from './DivesPage';
import LocationsPage from './LocationsPage';
import About from '../views/about';

class App extends Component {
  constructor() {
    super();

    this.state = {
      errors: null
    };
  }

  isLoggedIn() {
    return !!sessionStorage.getItem('jwt');
  }

  handleInitializationError = errors => {
    this.setState({ errors: errors });
  }

  componentDidMount() {
    if (this.isLoggedIn()) {
      this.props.fetchUser(this.handleInitializationError)
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if(nextProps.user !== this.props.user) {
      this.props.fetchDives(this.handleInitializationError);
      this.props.fetchLocations(this.handleInitializationError);
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Aquarium /> 
          <div id='application' className='App'>
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

              <Route exact path='/logout' render={() => {
                window.history.pushState({},'','/');
                logoutUser();
              }}/>
              
              <Route exact path="/" render={() => (
                this.isLoggedIn() ? (
                  <Redirect to="/dashboard" />
                ) : (
                  <Welcome handleLogin={this.props.facebookLogin} guestLogin={this.props.guestLogin}/>
                )
              )}/>

              <Route exact path="/dashboard" render={() => (
                this.isLoggedIn() ? (
                  <Dashboard user={this.props.user} dives={this.props.dives} locations={this.props.locations} />
                ) : (
                  <Redirect to="/"/>
                )
              )}/>

              <Route path={`${DIVES_ROOT}`} component={DivesPage} />

              <Route path={`${LOCATIONS_ROOT}`} component={LocationsPage} />

              <Route exact path="/about" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { 
      logoutUser,
      fetchUser,
      fetchDives,
      fetchLocations,
      facebookLogin,
      guestLogin
    }
  , dispatch);
};

const mapStateToProps = state => {
  return { 
    user: state.sessionReducer.user,
    dives: state.divesReducer.dives,
    locations: state.locationsReducer.locations
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
