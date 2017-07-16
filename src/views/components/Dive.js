import React from 'react';

const Dive = ({ dive }) => {
  return (
    <div>
      <p>{dive.id} - {dive.location.name}</p>
    </div>
  )
}

export default Dive;