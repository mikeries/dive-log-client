import  React from 'react';
import FbLoginButton from './components/FbLoginButton';
import { Grid, Button } from 'react-bootstrap'

const Welcome = ({ handleLogin, guestLogin }) => (
  <Grid className='Welcome'>
    <div>
      <h1>Welcome to Dive Logger!</h1>

      <p>
        If you're a SCUBA diver, you know that there's a lot of information to keep track of.  
        This app provides you the ability to store those data on the web, where you can access it from anywhere.  
        Even if you forget your diving logbook.  I'm sure that's never happened to you.
      </p>

      <p>
        For safety reasons, each diver must be authenticated by creating an account through Facebook. (Other options will be coming soon.) Once logged in, a Diver can add or modify locations, and keep track of their dives, 
        including the key parameters of location, maximum depth, duration, initial tank pressure, final tank pressure, 
        ballast, along with helpful comments about what kind of day it was, or what you had for breakfast.
      </p>
    </div>
    
    <div>
      <Button onClick={guestLogin}>Continue as Guest</Button>
    </div>
    <p style={{textAlign: 'center'}}>or</p>
    <FbLoginButton className="fb-login-button"
        onSuccess={handleLogin}>
        Login with Facebook
    </FbLoginButton>

    <br/>
    <br/>
    <p>Note: The API server goes to sleep when idle, so you may have to wait several seconds for it to wake up after logging in.</p>

  </Grid>
)

export default Welcome