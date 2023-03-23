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
    //   <nav className="navbar navbar-expand-lg bg-body-tertiary">
    //   <div className="container-fluid">
    //     <a className="navbar-brand" href="#"><NavLink to={'/'}>Dimuro Market</NavLink></a>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarText">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <a className="nav-link active" aria-current="page" href="#"><NavLink to={"/category/camisaCat"}></NavLink>Camisas</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#"><NavLink to={"/category/camperaCat"}></NavLink>Camperas</a>
    //         </li>
    //         <li className="nav-item">
    //           <a className="nav-link" href="#"><NavLink to={"/category/shortCat"}></NavLink>Shorts</a>
    //         </li>
    //       </ul>
    //       <span className="navbar-text" ><CardWidget/></span>                  
    //     </div>
    //   </div>
    // </nav>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><NavLink to={'/'}>Dimuro Market</NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/category/camisaCat">Camisas</Nav.Link>
            <Nav.Link href="/category/camperaCat">Camperas</Nav.Link>
            <Nav.Link href="/category/shortCat">Shorts</Nav.Link>
            
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