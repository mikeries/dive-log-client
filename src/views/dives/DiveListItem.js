import React from 'react';

const DiveListItem = ({ dive, location }) => {
  return (
    <div className='dive-list-item'>
      <h3>{location.name}</h3><h4>{dive.date} at {dive.time}</h4>
      <p>{dive.comments}</p>
    </div>
  )
}

export default DiveListItem;