import React from 'react';
import { NavLink } from 'react-router-dom';
 
const NavBar = props => {
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
        to="/logout"
      >
        Logout
      </NavLink>
    </div>
  );
}
 
export default NavBar;