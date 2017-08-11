import React from 'react';

const DiveListItem = ({ dive, location }) => {
  return (
    <div>
      <p>{location.name} on {dive.date} at {dive.time}</p>
    </div>
  )
}

export default DiveListItem;