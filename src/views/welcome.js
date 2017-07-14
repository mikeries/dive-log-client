import React, { Component } from 'react';
import {bindActionCreators} from 'redux';  
import {connect} from 'react-redux';  
import * as sessionActions from '../redux/modules/Auth/sessionActions';
import LoginButton from './components/LoginButton';



class Welcome extends Component {

  onClick(loginType) {
    console.log('Logging in with '+loginType)
    //this.props.actions.logInUser(this.state.credentials);
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
          <LoginButton type='facebook' onClick={()=> this.onClick('facebook')}/>
            <br/>
          <LoginButton type='github' onClick={() => this.onClick('github')}/>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {  
  return {
    actions: bindActionCreators(sessionActions, dispatch)
  };
}
export default connect(null, mapDispatchToProps)(Welcome);