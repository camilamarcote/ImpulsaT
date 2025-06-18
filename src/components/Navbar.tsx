import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo.jpg';


function Navbar() {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm border-bottom">

      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img
            src={logo}
            alt="Logo PsicoWeb"
            style={{ height: '40px', marginRight: '10px' }}
          /></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Servicios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contacto</a>
            </li>
          </ul>
          <span className="navbar-text">
            Bienestar psicológico
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
