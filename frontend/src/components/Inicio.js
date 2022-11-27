import React, { useReducer, useState,useEffect } from "react";
import "../stylesheets/inicio.css";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import * as actions from "../redux/actions"
import {Navigate} from 'react-router-dom';
import {
  Table,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  FormGroup,
  Input,
  Label,
  ModalFooter,
} from "reactstrap";

function Inicio() {

  let usuarios=useSelector(state=>state.usuarios)
  let online=useSelector(state=>state.online)
  let dispatch=useDispatch();
  const [abierto, setAbierto] = useState(false);
  const [input, setInput] = useState({ email: "", password: "" });
  const [nuevo,setNuevo]= useState({correo:"",contrasena:"",nombre:""})
  function entrar(e){
    let bandera=0
    e.preventDefault()
    for(let i=0;i<usuarios.length;i++){
      if(usuarios[i].email===input.email){
        if(usuarios[i].clave===input.password){
          console.log("bienvenido ",usuarios[i].nombre)
          dispatch(actions.editarOnline({entrar:true,nombre:usuarios[i].nombre,i:i,rol:usuarios[i].rol}))
          bandera=1
        }
      }
    }
    if(bandera==0){
      alert("usuario incorrecto")
    }
  }
  function abrir(){
    if(abierto==false){
      setAbierto(true)
    }
    if(abierto==true){
      setAbierto(false)
    }
  }
  function handleChangeF(e){
    setNuevo({...nuevo, [e.target.name]:e.target.value})
  }
  function handleChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  function enviar(){
    let info={
      nombre:nuevo.nombre,
      email:nuevo.correo,
      clave:nuevo.contrasena,
      rol:'usuario'
    }
    //verificando que el correo no exista
    const found1 =usuarios.find(element=>element.email==info.email)
    const found2 =usuarios.find(element=>element.nombre==info.nombre)
    if(found1 || found2) {
      window.alert("usuario no pudo ser creado usuario o correo ya utilizado")
    }else{
      window.alert("usuario creado con exito")
      dispatch(actions.createUser(info))
      abrir()
      setNuevo({correo:"",contrasena:"",nombre:""})
    }
    

  }
  if(online.entrar==true){
    console.log(online)
    return <Navigate to='/home'/>
  }
  return (
    <div className="body">
      <div className="login">
        <h3>
          LOGIN
        </h3>
        <div className="sesion">
          <form className="form">
            <label form="nombre">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Ingrese su email"
              autoComplete="none"
              required
              value={input.name}
              onChange={(e) => handleChange(e)}
            ></input>
            <label form="password">Contraseña</label>
            <input
              type="password"
              name="password"
              placeholder="Ingrese su contraseña"
              required
              value={input.name}
              onChange={(e) => handleChange(e)}
            ></input>
            <div>
              <button onClick={(e)=>entrar(e)} type="summit" className="form-btn">
                Inciar sesión
              </button>
              <h3>o</h3>
              <button  type="summit" className="form-btn" onClick={abrir}>
                crear usuario
              </button>
              <Modal isOpen={abierto}>
                <ModalHeader>Crear Usuario</ModalHeader>
                <ModalBody>
                  <FormGroup>
                    <Label >nombre del usuario</Label>
                    <Input
                      type="text"
                      name="nombre"
                      value={nuevo.nombre}
                      onChange={(e) => handleChangeF(e)}
                    ></Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="contrasena">contraseña</Label>
                    <Input
                      type="text"
                      id="contrasena"
                      name="contrasena"
                      value={nuevo.contrasena}
                      onChange={(e) => handleChangeF(e)}
                    ></Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="contraseña">email</Label>
                    <Input
                      type="text"
                      id="correo"
                      name="correo"
                      value={nuevo.correo}
                      onChange={(e) => handleChangeF(e)}
                    ></Input>
                  </FormGroup>
                </ModalBody>
                <ModalFooter>
                <Button 
                  onClick={(e)=>{

                    enviar()
                    }} color="success">
                    crear
                  </Button>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      abrir()
                    }}
                    color="success"
                  >
                    cerrar
                  </Button>
                  
                </ModalFooter>
              </Modal>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
