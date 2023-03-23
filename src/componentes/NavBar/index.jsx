import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import React from "react";
import './navbar.css';
import CardWidget from "../CardWidget";



function NavBar() {
    return(
    <Navbar bg="light" expand="lg">
      <Container fluid>
      <Button variant="outline-success">
        <Navbar.Brand href='/'>Dimuro Market</Navbar.Brand>
        </Button>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
          <Button variant="outline-success">
            <Nav.Link>
              <NavLink to={"/category/camisaCat"}>Camisas</NavLink>
              </Nav.Link>
              </Button>

              <Button variant="outline-success">
            <Nav.Link>
              <NavLink to={"/category/camperaCat"}>Camperas</NavLink>
              </Nav.Link>
              </Button>
              <Button variant="outline-success">

            <Nav.Link>
              <NavLink to={"/category/shortCat"}>Shorts</NavLink>
              </Nav.Link>
              </Button>
  
          </Nav>
          <Form className="d-flex">
            <Button variant="outline-success"><CardWidget/></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NavBar