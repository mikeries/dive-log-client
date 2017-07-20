import React from 'react';
import { Grid } from 'react-bootstrap'

const totalDuration = dives => (
  dives.reduce((total,dive) => (total += dive.duration),0)
)

const deepestDive = dives => {
  if (dives && dives.length > 0) {
    return dives.reduce((deepest,dive) => (
      dive = deepest.max_depth < dive.max_depth ? dive : deepest
    ), dives[0])
  }
}

const Dashboard = ({user, dives}) => {
  const deepest = deepestDive(dives);
  return (
    <Grid>

      <h2>Your dive statistics</h2>

      {dives && dives.length === 0 && <div>
          <h3>You don't have any dive data yet.</h3>
        </div>
      }
      {dives && dives.length > 0 && <div>
          <div>
            <h3>Number of dives</h3>
            <p>{dives.length}</p>
          </div>

          <div>
            <h3>Total duration</h3>
            <p>{totalDuration(dives)} minutes</p>
          </div>

          <div>
            <h3>Deepest dive</h3>
            <p>{deepest.location.name} on {deepest.date}</p>
          </div>
          

          <div>
            <h3>Maximum depth</h3>
            <p>{deepest.max_depth} feet</p>
          </div>
        </div>
      }

    </Grid>
  )
}

export default Dashboard;