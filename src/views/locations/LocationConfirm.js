import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Row, Col } from 'react-bootstrap';

const LocationConfirm = ({ 
  location,
  onDelete
}) => (
  <Grid>
    <p>confirm delete</p>
    <Button onClick={() => onDelete(location.id)}>Delete</Button>
  </Grid>
)

export default LocationConfirm