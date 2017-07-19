import React from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = ({ user, handleLogout }) => (
  <Navbar>
    <Nav>
      <LinkContainer to='/dashboard'><NavItem>Home</NavItem></LinkContainer>
      <LinkContainer to='/dives'><NavItem>Dives</NavItem></LinkContainer>
      <LinkContainer to='/locations'><NavItem>Locations</NavItem></LinkContainer>
    </Nav>
    <Nav pullRight={true}>
      {user && user.email && <NavItem className='email'>Welcome {user.email}!</NavItem>}
      <LinkContainer to='/logout' ><NavItem onClick={handleLogout}>Logout</NavItem></LinkContainer>
    </Nav>
  </Navbar>
);
 
export default NavBar;