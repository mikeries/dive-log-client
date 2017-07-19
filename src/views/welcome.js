import React from 'react';
import LoginButton from './components/LoginButton';
import { Grid } from 'react-bootstrap'

const Welcome = (props) => (
  <Grid>
    <div>
      <h2>
        Dive Log
      </h2>
      <p>
        Cloud-based Dive Log
      </p>
    </div>
    <div>
      <LoginButton type='facebook'/>
        <br/>
      <LoginButton type='github'/>
    </div>
  </Grid>
)
export default Welcome