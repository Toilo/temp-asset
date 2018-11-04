import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import logo from '../../resources/asset_logo.png';
import './Header.css';

const Header = () => {
    return <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <img src={logo} alt="ASSET" className="logo"/>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>

    <Nav pullRight>
    <NavItem className="links" eventKey={1} href="#" >
      <NavLink to="/home">Home</NavLink>
    </NavItem>
    <NavItem className="links" eventKey={2} href="#">
    <NavLink to="/about">About Us</NavLink>
    </NavItem>

    <NavItem className="links" eventKey={3} href="#">
    <NavLink to="/programmes">Programmes</NavLink>
    </NavItem>

  <NavItem className="links" eventKey={4} href="#">
  <NavLink to="/funding">Funding</NavLink>
</NavItem>

<NavItem className="links" eventKey={5} href="#">
<NavLink to="/blog">Blog</NavLink>
</NavItem>

<NavItem className="links" eventKey={6} href="#">
<NavLink to="/contact">Contact</NavLink>
</NavItem>

<NavItem className="links" eventKey={7} href="#">
<NavLink to="/gallery">Gallery</NavLink>
</NavItem>
  </Nav>
    </Navbar.Collapse>
    </Navbar>
};

export default Header;