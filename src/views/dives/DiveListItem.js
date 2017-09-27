import React from 'react';

const DiveListItem = ({ dive, location }) => {
  return (
    <div className='dive-list-item'>
      <h3>{location.name} on {dive.date} at {dive.time}</h3>
    </div>
  )
}

export default DiveListItem;