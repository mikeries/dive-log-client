
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
          onClick={this.props.onClick}
        >
          Login with {this.props.type}
        </Button>
      </div>
    );
  }
}

export default LoginButton;