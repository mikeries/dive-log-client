import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => (
  <div className='navbar'>
    <NavLink to="/">
      Home
    </NavLink>
    <NavLink to="/dives">
      Dives
    </NavLink>
    <NavLink to="/locations">
      Locations
    </NavLink>
    <NavLink to="/" onClick={props.handleLogout}>
      Logout
    </NavLink>
  </div>
)
 
export default NavBar;