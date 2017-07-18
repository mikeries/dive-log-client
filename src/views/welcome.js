import React from 'react';
import LoginButton from './components/LoginButton';

const Welcome = (props) => (
  <div className="Login">
    <div className="Login-header">
      <h2 className="Login-title">
        Dive Log
      </h2>
      <p className="Login-intro">
        Cloud-based Dive Log
      </p>
    </div>
    <div className="Login-buttons">
      <LoginButton type='facebook'/>
        <br/>
      <LoginButton type='github'/>
    </div>
  </div>
)
export default Welcome