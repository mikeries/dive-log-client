import React from 'react';
import { Button } from 'react-bootstrap'
import { API_URL } from '../../constants'

const LoginButton = props => (
  <div>
    <Button href={`${API_URL}/authenticate?type=${props.type}`}>
      Login with {props.type}
    </Button>
  </div>
)

export default LoginButton;