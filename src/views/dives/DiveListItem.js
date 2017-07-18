import React from 'react';

const DiveListItem = ({ dive }) => {
  return (
    <div>
      <p>{dive.location.name}</p>
    </div>
  )
}

export default DiveListItem;