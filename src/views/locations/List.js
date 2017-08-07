import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid } from 'react-bootstrap';

import { LOCATIONS_ROOT } from '../../constants';
import LocationListItem from './LocationListItem';

const LocationList = ({
  locations
}) => {
  const renderLocations = locations.map(location => (
    <Link key={location.id} to={`${LOCATIONS_ROOT}/${location.id}`}>
      <LocationListItem key={location.id} location={location}/>
    </Link>
  ));

  return (
    <Grid>
      <h1>Your Locations</h1>

      {renderLocations}

      <Link to={`${LOCATIONS_ROOT}/new`}>
        <Button>New</Button>
      </Link>
      
    </Grid>
  );
}

export default LocationList