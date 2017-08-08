import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import DiveListItem from '../dives/DiveListItem';
import { DIVES_ROOT } from '../../constants';

const LocationConfirm = ({ 
  location,
  dives,
  onDelete
}) => {

  return (
    <Grid>
      <h2>Deleting {location.name}</h2>
      <p>Are you sure you want to delete this location?</p>

      {dives && dives.length>0 &&
        <div>
        <p>This will also delete the following dives:</p>
        {dives.map(dive => (
          <DiveListItem key={dive.id} dive={dive}/>
        ))}
        </div>
      }
      <Link to={`/locations/${location.id}`}><Button>Back</Button></Link>
      <Button bsStyle='danger' onClick={() => onDelete(location.id)}>Delete Location</Button>
    </Grid>
  )
}

export default LocationConfirm