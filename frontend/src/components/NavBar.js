import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ropa from "../assets/img/laundry.png"
import "../stylesheets/navBar.css";
import * as actions from '../redux/actions'
function NavBar({onGo, carrito}) {
  let online=useSelector(state=>state.online)
  let dispatch=useDispatch()
  function enviar(e){
    e.preventDefault()
    dispatch(actions.logOut())
    console.log("entro al metodo enviar")
  }
  return (
    <div className="containers">
      <img src={ropa} className="nav-img"></img>
      <nav>
        <ul className="nav-menu">
          {
            online.rol=='administrador'?(<>
            <li>bienvenido {online.nombre}</li>
            <li><Link to='/admin'>Tabla</Link></li>
            <li><Link to='/ventas'>Ver ventas </Link></li>
            </>
            ):null
          }
          <li><Link to='/'>Principal</Link></li>
          <li><Link to="/" onClick={((e)=>enviar(e))}>logout</Link></li>
          {
            online.rol!=='administrador'?(<>
            <li>bienvenido {online.nombre}<Link to="/carro"><img src={require('../assets/img/carrito-de-compras.png')} className="carrito"></img>{carrito.length}</Link></li>
            </>):null
          }
          
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;