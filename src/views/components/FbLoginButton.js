// see https://stackoverflow.com/questions/27717555/implement-facebook-api-login-with-reactjs

import React, { Component } from 'react';

class FbLoginBtn extends Component {
  constructor(props) {
    super(props);

    // post login behavior should be defined at a higher level
    this.onSuccess = this.props.onSuccess || (() => {});
    this.onFailure = this.props.onFailure || (() => {});
    this.onSuccess = this.onSuccess.bind(this);
    this.onFailure = this.onFailure.bind(this);
  }

  componentDidMount() {
    let scriptTag = document.createElement('script');
    scriptTag.type = 'text/javascript';
    scriptTag.src = process.env.REACT_APP_FACEBOOK_AUTH_PATH;
    scriptTag.addEventListener('load', e => {
      this.FB = window.FB;
      // I don't like exposing the SDK to global scope
      window.FB = null;

      this.FB.Event.subscribe('auth.statusChange', this.onStatusChange.bind(this));
    });
    document.body.appendChild(scriptTag);
  }

  onStatusChange(response) {
    if (response.status === 'connected') {
      const { accessToken, userID } = response.authResponse;
      this.onSuccess(accessToken, userID);
    } else {
      this.onFailure();
    }
  }

  render() {
    return (
      <div 
        className="fb-login-button" 
        data-width={this.props.width}
        data-max-rows="1"
        data-size="large"
        data-button-type="login_with"
        data-show-faces="false"
        data-auto-logout-link="false"
        data-use-continue-as="false"
        data-scope="public_profile,email"
      >
      </div>
    );
  }
}

export default FbLoginBtn;