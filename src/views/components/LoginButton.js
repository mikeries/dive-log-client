import React from 'react';
import { Button } from 'react-bootstrap'

const LoginButton = (props) => (
  <div>
    <Button href={`http://localhost:3000/authenticate?type=${props.type}`}>
      Login with {props.type}
    </Button>
  </div>
)

export default LoginButton;