import React, { Component } from 'react';
import Navbar from './components/Navbar'

class Dives extends Component {
  render() {
    return (
      <div>
        <Navbar handleLogout={this.props.handleLogout} />
        <div>
          Dives index page!
        </div>
      </div>
    );
  }
}

export default Dives;