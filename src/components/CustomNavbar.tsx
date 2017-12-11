import * as React from 'react';
import { Navbar, Nav, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

interface CustomNavbarProps {}
const CustomNavbar = (props: CustomNavbarProps) => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">fewaf</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/" exact>
            <NavItem eventKey={1}>Home</NavItem>
          </LinkContainer>
          <LinkContainer to="/info">
            <NavItem eventKey={1}>Info</NavItem>
          </LinkContainer>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
