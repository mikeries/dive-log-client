import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './components/Navbar'
import Location from './components/Location'

class Locations extends Component {
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

const mapStateToProps = (state) => {
  return { 
    jwt: state.sessionReducer.jwt,
    locations: state.locationsReducer.locations
  };
}

export default connect(mapStateToProps)(Locations);