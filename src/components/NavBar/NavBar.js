import React from 'react';
import './NavBar.css'

class NavBar extends React.Component{

    render(){
      return (
        <>
        <div>
        <h1 className="titulo">GS STORE</h1>
        <nav>
                <ul className="menu">
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="nosotros.html">Nosotros</a></li>
                    <li><a href="productos.html">Productos</a></li>
                    <li><a href="contacto.html">Contacto</a></li>
                </ul>
        </nav>
        </div>
        </>
      )
    }
  }

  export default NavBar;