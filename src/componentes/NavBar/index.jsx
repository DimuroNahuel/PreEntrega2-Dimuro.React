import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import React from "react";
import './navbar.css';
import CardWidget from "../CardWidget";



function NavBar() {
    return(
    <Navbar bg="light" expand="lg">
      <Container fluid>
      <Button variant="light">
        <Navbar.Brand>
        <NavLink className="link" to={"/"}>DIMURO MARKET</NavLink>
        </Navbar.Brand>
        </Button>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
          <Button variant="light">
            <Nav.Link>
              <NavLink className="link"to={"/category/camisaCat"}>Camisas</NavLink>
              </Nav.Link>
              </Button>

              <Button variant="light">
            <Nav.Link>
              <NavLink className="link"to={"/category/camperaCat"}>Camperas</NavLink>
              </Nav.Link>
              </Button>
              <Button variant="light">

            <Nav.Link>
              <NavLink className="link"to={"/category/shortCat"}>Shorts</NavLink>
              </Nav.Link>
              </Button>
  
          </Nav>
          <Form className="d-flex">
            <Button variant="light"><CardWidget/></Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NavBar;