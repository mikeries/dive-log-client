import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const DiveShow = ({ 
  dive,
  onDelete
}) => (
  <div>
    <h3>{dive.datetime} {dive.location.name} - {dive.location.city}, {dive.location.country}</h3>

    <p>Duration: {dive.duration}</p>
    <p>Ballast: {dive.ballast}  Maximum Depth: {dive.max_depth}</p>
    <p>Starting Pressure: {dive.starting_pressure}  Final Pressure: {dive.final_pressure}</p>
    
    <h4>Comments</h4>
    <p>{dive.comments}</p>
    <br/>
    
    <Link to={`/dives/${dive.id}/edit`}>
      <Button>Save</Button>
    </Link>
    <Button onClick={() => onDelete(dive.id)}>Delete</Button>
  </div>
)

export default DiveShow