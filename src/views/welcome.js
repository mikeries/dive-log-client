import React, { Component } from 'react';
import {bindActionCreators} from 'redux';  
import {connect} from 'react-redux';  
import { loginUser } from '../redux/modules/Auth/sessionActions';
import LoginButton from './components/LoginButton';

class Welcome extends Component {

  onClick(loginType) {
    console.log('Logging in with '+loginType);
    console.log(this.props.actions);
    this.props.actions.loginUser(loginType);
  }

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
            <br/>
          <LoginButton type='github'/>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {  
  return {
    actions: bindActionCreators({loginUser: loginUser}, dispatch)
  };
}
export default connect(null, mapDispatchToProps)(Welcome);