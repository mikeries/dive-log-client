import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid } from 'react-bootstrap';

import { DIVES_ROOT } from '../../constants';
import DiveListItem from './DiveListItem';

const DiveList = ({
  dives, locations
}) => {
  const renderDives = dives.map(dive => {
    const location = locations.find(l => dive.location_id === l.id);
    return (<Link key={dive.id} to={`${DIVES_ROOT}/${dive.id}`}>
      <DiveListItem key={dive.id} dive={dive} location={location}/>
    </Link>
  )});

  return (
    <Grid id='dive-list'>
      <h1>Your Dives</h1>

      {renderDives}

      {locations && locations.length > 0 ? (
        <Link to={`${DIVES_ROOT}/new`}>
          <Button>New</Button>
        </Link>
       ) : (
        <p>You must create at least 1 location before you may create a dive.</p>
       )}
      
    </Grid>
  );
}

export default DiveList