import React from 'react';
import { connect } from 'react-redux';
import LocationListItem from './LocationListItem'

const Locations = (props) => (
  <div>
    <h1>Locations Page</h1>
    {props.locations && props.locations.map(
      (location, index) => ( <LocationListItem key={index} location={location} />)
    )}
  </div>
)

const mapStateToProps = (state) => {
  return { 
    locations: state.locationsReducer.locations
  };
}

export default connect(mapStateToProps)(Locations);