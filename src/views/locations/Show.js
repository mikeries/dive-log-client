import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Row, Col } from 'react-bootstrap';

import { LOCATIONS_ROOT } from '../../constants';

const LocationShow = ({ 
  location,
  onDelete
}) => (
  <Grid>
    <Row>
      <Col md={12}>
        <h3>{location.name} - {location.city}, {location.country}</h3>
      </Col>
    </Row>
    
    <Link to={`${LOCATIONS_ROOT}`}>
      <Button>Back</Button>
    </Link>
    <Link to={`${LOCATIONS_ROOT}/${location.id}/edit`}>
      <Button>Edit</Button>
    </Link>
    <Button onClick={() => onDelete(location.id)}>Delete</Button>
  </Grid>
)

export default LocationShow