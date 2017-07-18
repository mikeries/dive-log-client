import React, { Component } from 'react';

const Dashboard = (props) => (
  <div>
    {props.user && 
      'Welcome ' + props.user.name + '!'
    }
  </div>
)

export default Dashboard;