import React from 'react';
import { Grid } from 'react-bootstrap'

const Dashboard = (props) => (
  <Grid>
    {props.user && 
      'Welcome ' + props.user.name + '!'
    }
  </Grid>
)

export default Dashboard;