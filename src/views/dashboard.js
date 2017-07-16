import React, { Component } from 'react';
import Navbar from './components/Navbar'

class Dashboard extends Component {
  render() {
  console.log(this.props);
    return (
      <div>
        <Navbar handleLogout={this.props.handleLogout} />
        <div>
          {this.props.user && 
            'Welcome ' + this.props.user.name + '!'
          }
        </div>
      </div>
    );
  }
}

export default Dashboard;