
import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button/Button';

class LoginButton extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <Button
          raised
          accent
          href={`http://localhost:3000/authenticate?type=${this.props.type}`}
        >
          Login with {this.props.type}
        </Button>
      </div>
    );
  }
}

export default LoginButton;