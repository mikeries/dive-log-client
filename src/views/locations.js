import React, { Component } from 'react';
import Navbar from './components/Navbar'

class Locations extends Component {
  render() {
    return (
      <div>
        <Navbar handleLogout={this.props.handleLogout} />
        <div>
          Locations index page!
        </div>
      </div>
    );
  }
}

export default Locations;