import React from "react";
import './navbar.css';
import CardWidget from "../CardWidget";

const NavBar= ()=>{
    return(
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Dimuro Market</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Camisas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Camperas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Shorts</a>
            </li>
          </ul>
          <span class="navbar-text" ><CardWidget/></span>                  
        </div>
      </div>
    </nav>
    )
}

export default NavBar