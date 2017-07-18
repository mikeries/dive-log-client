import React from 'react';
import { Link } from 'react-router-dom';

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
    
    <Link to={`/dives/${dive.id}/edit`}>Edit</Link>
    <button onClick={() => onDelete(dive.id)}>Delete</button>
  </div>
)

export default DiveShow