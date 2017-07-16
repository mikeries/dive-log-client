import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Navbar from './components/Navbar'

import { 
  fetchLocations
} from '../redux/modules/Locations/locationsActions';

class Locations extends Component {

  componentWillMount(state) {
    this.props.fetchLocations(this.props.jwt)
  }

  render() {
    return (
      <div>
        <Navbar handleLogout={this.props.handleLogout} />
        <div>
          Locations index page!
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    { fetchLocations
    }
  , dispatch);
};

const mapStateToProps = (state) => {
  return { 
    jwt: state.sessionReducer.jwt,
    dives: state.locationsReducer.locations
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Locations);