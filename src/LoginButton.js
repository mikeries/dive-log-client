
import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button/Button';

class LoginButton extends Component {
  render() {
    return (
      <div>
        <Button
          raised
          accent
          href='http://localhost:3000/authenticate?type=facebook'
        >
          Login with Facebook
        </Button>
        <p></p>
              <Button
          raised
          accent
          href='http://localhost:3000/authenticate?type=github'
        >
          Login with Github
        </Button>
      </div>
    );
  }
}

export default LoginButton;