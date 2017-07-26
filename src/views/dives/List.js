import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Grid } from 'react-bootstrap'
import DiveListItem from './DiveListItem'

const DiveList = ({
  dives
}) => {
  const renderDives = dives.map((dive) => (
    <Link key={dive.id} to={`/dives/${dive.id}`}>
      <DiveListItem key={dive.id} dive={dive}/>
    </Link>
  ));

  return (
    <Grid>
      <h1>Your Dives</h1>
      {renderDives}
      <Link to={`/dives/new`}>
        <Button>New</Button>
      </Link>
    </Grid>
  );
}

export default DiveList