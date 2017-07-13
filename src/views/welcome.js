import React, { Component } from 'react';
import LoginButton from '../LoginButton';

class Welcome extends Component {
  render() {
    return (
      <div className="Login">
        <div className="Login-header">
          <h2 className="Login-title">
            Dive Log
          </h2>
          <p className="Login-intro">
            Cloud based Dive Log
          </p>
        </div>
        <div className="Login-buttons">
          <LoginButton type='facebook'/>
        </div>
      </div>
    );
  }
}

export default Welcome;