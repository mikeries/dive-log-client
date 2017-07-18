import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
    return (
      <div>
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