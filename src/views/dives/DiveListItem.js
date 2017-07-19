import React from 'react';

const DiveListItem = ({ dive }) => {
  return (
    <div>
      <p>{dive.location.name} on {dive.date} at {dive.time}</p>
    </div>
  )
}

export default DiveListItem;