import React, { Component } from 'react';
import logo from './logo.svg';
import Button from 'react-toolbox/lib/button/Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button raised primary>
          Hi!
        </Button>
      </div>
    );
  }
}

export default App;
