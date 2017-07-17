import React from 'react';
import { Link } from 'react-router-dom'
import Dive from './components/Dive'

const DiveList = ({dives}) => {
    const renderDives = dives.map((dive) => {
      return (
        <Link key={dive.id} to={`/dives/${dive.id}`}>
          <Dive key={dive.id} dive={dive}/>
        </Link>
      )
    });

    return (
    <div>
      <h1>Dives List Page</h1>
      {renderDives}
    </div>
    );
}

export default DiveList