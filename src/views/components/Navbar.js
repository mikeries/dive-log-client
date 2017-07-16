import React from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {

  handleLogout = () => {
    this.props.handleLogout(this.context.router);
  }

  render() {
    return (
      <div style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }}>
        <NavLink 
          style={{ marginRight: '10px' }} 
          to="/"
        >
          Home
        </NavLink>
        <NavLink 
          style={{ marginRight: '10px' }} 
          to="/dives"
        >
          Dives
        </NavLink>
        <NavLink 
          style={{ marginRight: '10px' }} 
          to="/locations"
        >
          Locations
        </NavLink>
        <NavLink 
          style={{ marginRight: '10px' }} 
          to="/"
          onClick={this.props.handleLogout}
        >
          Logout
        </NavLink>
      </div>
    );
  }
}
 
export default NavBar;