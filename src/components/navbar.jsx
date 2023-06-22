import CartWidget from './CartWidget';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Trippy ind</a>
        {/* Otros elementos de la barra de navegación */}
        <CartWidget />
      </nav>
    );
  };
  
  export default Navbar;