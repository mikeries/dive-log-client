
import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button/Button';

class LoginButton extends Component {
  render() {
    return (
      <Button
        raised
        accent
        href='http://localhost:3000/authenticate'
      >
        Login with Facebook
      </Button>
    );
  }
}

export default LoginButton;