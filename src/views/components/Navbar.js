import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'react-bootstrap'

const NavBar = (props) => (
  <Nav className='navbar' bsStyle="pills">
    <NavItem>
      <NavLink to="/">Home</NavLink>
    </NavItem>
    <NavItem>
      <NavLink to="/dives">Dives</NavLink>
    </NavItem>
    <NavItem>
      <NavLink to="/locations">Locations</NavLink>
    </NavItem>
    <NavItem>
      <NavLink to="/" onClick={props.handleLogout}>Logout</NavLink>
    </NavItem>
  </Nav>
)
 
export default NavBar;