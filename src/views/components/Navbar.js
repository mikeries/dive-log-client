import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = ({ user, handleLogout }) => (
  <div className="container">
  <Navbar fluid collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to='/dashboard'>Dive Log Dashboard</Link>
      </Navbar.Brand>
    </Navbar.Header>

    <Navbar.Collapse>
      <Nav>
        <LinkContainer to='/dives'><NavItem>Dives</NavItem></LinkContainer>
        <LinkContainer to='/locations'><NavItem>Locations</NavItem></LinkContainer>
        <LinkContainer to='/about'><NavItem>About</NavItem></LinkContainer>
      </Nav>
      
      <Nav pullRight>
        {user && user.name && <NavItem id='username' to=''>Welcome {user.name}!</NavItem>}
        <LinkContainer to='/logout' >
          <NavItem onClick={handleLogout}>Logout</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
    
  </Navbar>
  </div>
);
 
export default NavBar;