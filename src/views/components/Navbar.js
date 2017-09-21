import React from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import RouteNavItem from "./RouteNavItem";
import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => (
  <div className="container">
  <Navbar fluid collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to='/dashboard'>Dive Log Dashboard</Link>
      </Navbar.Brand>
      <Navbar.Toggle/>
    </Navbar.Header>

    <Navbar.Collapse>
      <Nav>
        <RouteNavItem href='/dives'>Dives</RouteNavItem>
        <RouteNavItem href='/locations'>Locations</RouteNavItem>
        <RouteNavItem href='/about'>About</RouteNavItem>
      </Nav>
      
      <Nav pullRight>
        {user && user.name && <NavItem id='username' to=''>Welcome {user.name}!</NavItem>}
        <RouteNavItem href= '/logout'>Logout</RouteNavItem>
      </Nav>
    </Navbar.Collapse>
    
  </Navbar>
  </div>
);
 
export default NavBar;