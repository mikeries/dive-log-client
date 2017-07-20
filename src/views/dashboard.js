import React from 'react';
import { Grid } from 'react-bootstrap'

const totalDuration = dives => (
  dives.reduce((total,dive) => (total += dive.duration),0)
)

const deepestDive = dives => {
  if (dives) {
    return dives.reduce((deepest,dive) => (
      dive = deepest.max_depth < dive.max_depth ? dive : deepest
    ), dives[0])
  }
}

const Dashboard = ({user, dives}) => {
  const deepest = deepestDive(dives);
  return (
    <Grid>

    </Grid>
  )
}

export default Dashboard;