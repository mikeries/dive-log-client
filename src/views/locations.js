import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Navbar from './components/Navbar'
import Location from './components/Location'

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
        <h1>Locations Page</h1>
        {this.props.locations && this.props.locations.map(
          (location, index) => ( <Location key={index} location={location} />)
        )}
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
    locations: state.locationsReducer.locations
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Locations);