import React from 'react';
import { Link } from 'react-router-dom'
import Dive from './Dive'

const DiveList = ({
  dives,
  handleNewClick
}) => {
  const renderDives = dives.map((dive) => (
    <Link key={dive.id} to={`/dives/${dive.id}`}>
      <Dive key={dive.id} dive={dive}/>
    </Link>
  ));

  return (
    <div>
      <h1>Your Dives</h1>
      {renderDives}
      <Link to={`/dives/new`}>New</Link>
    </div>
  );
}

export default DiveList