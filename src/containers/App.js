import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Login from '../Login';
import Main from '../Main';
import { getQueryParams } from '../utils';

class App extends Component {
  constructor() {
    super();

    const params = getQueryParams();
    this.state = { token: params.token };
  }

  isLoggedIn() {
    return !!this.state.token;
  }

  render() {
    return (
      <div className="App">
        {this.isLoggedIn()
          ? <Main token={this.state.token} />
          : <Login />
        }
      </div>
    );
  }
}

export default App;
