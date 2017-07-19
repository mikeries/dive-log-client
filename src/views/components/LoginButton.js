import React from 'react';

const LoginButton = (props) => (
  <div>
    <a href={`http://localhost:3000/authenticate?type=${props.type}`}>
      Login with {props.type}
    </a>
  </div>
)

export default LoginButton;