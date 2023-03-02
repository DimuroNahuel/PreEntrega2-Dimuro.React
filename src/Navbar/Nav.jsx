import React from "react";
import './styles.css'

const Navbar= ()=>{
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
              <a className="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Nosotros</a>
            </li>
          </ul>
          <span class="navbar-text" ><img src="https://t3.ftcdn.net/jpg/00/73/10/64/240_F_73106428_Q91LNUigg4ZRIi1ItxIcgEzyW8C9yluE.jpg" />113</span>                  
        </div>
      </div>
    </nav>
    )
}

export default Navbar