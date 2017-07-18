import React from 'react';
import Button from 'react-toolbox/lib/button/Button';

const LoginButton = (props) => (
  <div>
    <Button
      raised
      accent
      href={`http://localhost:3000/authenticate?type=${props.type}`}
    >
      Login with {props.type}
    </Button>
  </div>
)

export default LoginButton;