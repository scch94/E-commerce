import React from "react";
import { Link } from "react-router-dom";
import ropa from "../assets/img/laundry.png"
import "../stylesheets/navBar.css";

function NavBarAdmin() {
  return (
    <div className="containers">
      <img src={ropa} className="nav-img" alt="logo"></img>
      <nav>
        <ul className="nav-menu">
          <li><Link to='/'>Principal</Link></li>
          <li><Link to='/admin'>Tabla</Link></li>
          <li><Link to='/ventas'>Ver ventas </Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBarAdmin;
