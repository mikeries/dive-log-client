import React, { Component } from 'react';
import Navbar from './components/Navbar'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Navbar handleLogout={this.props.handleLogout} />
        <div>
          Welcome!
        </div>
      </div>
    );
  }
}

export default Dashboard;