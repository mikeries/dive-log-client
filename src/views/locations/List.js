import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap'
import LocationListItem from './LocationListItem'

const Locations = (props) => (
  <Grid>
    <h2>Your Locations</h2>
    {props.locations && props.locations.map(
      (location, index) => ( <LocationListItem key={index} location={location} />)
    )}
  </Grid>
)

const mapStateToProps = (state) => {
  return { 
    locations: state.locationsReducer.locations
  };
}

export default connect(mapStateToProps)(Locations);