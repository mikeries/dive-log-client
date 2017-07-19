import React from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = ({ user, handleLogout }) => (
  <Navbar>
    <Nav>
      <LinkContainer to='/dashboard'><NavItem>Dive Log Dashboard</NavItem></LinkContainer>
      <LinkContainer to='/dives'><NavItem>Dives</NavItem></LinkContainer>
      <LinkContainer to='/locations'><NavItem>Locations</NavItem></LinkContainer>
    </Nav>
    <Nav pullRight={true}>
      {user && user.email && <li role='presentation' id='email'><a>Welcome {user.name}!</a></li>}
      <LinkContainer to='/logout' ><NavItem onClick={handleLogout}>Logout</NavItem></LinkContainer>
    </Nav>
  </Navbar>
);
 
export default NavBar;