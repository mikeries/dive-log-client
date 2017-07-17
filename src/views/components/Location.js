import React from 'react';

const Location = ({ location }) => {
  return (
    <div>
      <p>{location.id} - {location.name}</p>
    </div>
  )
}

export default Location;