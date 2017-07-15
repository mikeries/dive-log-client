import React, { Component } from 'react';
import Navbar from './components/Navbar'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          Welcome!
        </div>
      </div>
    );
  }
}

export default Dashboard;