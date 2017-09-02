import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button } from 'react-bootstrap';
import DiveListItem from '../dives/DiveListItem';

const LocationConfirm = ({ 
  location,
  dives,
  onDelete
}) => {
  const buttonText = dives && dives.length > 0 ? 'Delete Location and Dives' : 'Delete Location'
  return (
    <Grid>
      <h2>Deleting {location.name}</h2>
      <p>Are you sure you want to delete this location?</p>

      {dives && dives.length>0 &&
        <div>
        <p>This will also delete the following dives:</p>
        {dives.map(dive => (
          <DiveListItem key={dive.id} dive={dive} location={location}/>
        ))}
        </div>
      }
      <Link to={`/locations/${location.id}`}><Button>Back</Button></Link>
      <Button bsStyle='danger' onClick={() => onDelete(location.id)}>{buttonText}</Button>
    </Grid>
  )
}

export default LocationConfirm