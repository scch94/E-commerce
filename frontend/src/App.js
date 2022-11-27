import "./App.css";
import Inicio from "./components/Inicio";
import NavBar from "./components/NavBar";
import NavBarAdmin from "./components/NavBarAdmin"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Productos from "./components/Productos";
import Footer from "./components/Footer";
import { Tabla } from "./components/Tabla";
import { Ventas } from "./components/Ventas";
import Carro from "./components/Carro";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import * as actions from './redux/actions/index'
import { Error404 } from "./components/Error404";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  const [carrito,setCarrito]=useState([]);
  const [productos,setProductos]=useState([])
  //IMPORTACION DEL DISPATCH Y DE LA VARIABLE DEL STORE QUE QUIERA UTILIZAR
  let dispatch=useDispatch()
  let detail=useSelector(state=>state.usuarios)
  let online=useSelector(state=>state.online)
  useEffect(()=>{
    //guardar los usuarios en el store
    dispatch(actions.getUsuarios())
    console.log("hola",detail)
    console.log("entraste a la lista de productos")
    axios.get("https://devgroup.onrender.com/ventas")
    .then(response=>setVentas(response.data))
    .catch((error)=>console.log(error))
    console.log("entraste a la lista de productos")
    axios.get("https://devgroup.onrender.com/products")
    .then(response=>{
      console.log(response.data)
      setProductos(response.data)
    })
    .catch((error)=>console.log(error))
  },[])
  
  //   {
  //     id:1,
  //     img:'air',
  //     nombre:"Air Force One",
  //     descripcion:"Las zapatillas Air Force 1 son un icono de estilo y perfección. Descubre nuestras colecciones.",
  //     cantidad:"5",
  //     precio:"25"
  //   },
  //   {
  //     id:2,
  //     img:'hoddies',
  //     nombre:"Colección de abrigos",
  //     descripcion:"Colección de abrigos de varios colores para hombre y mujer de todas las tallas, S, M, XL, XXL",
  //     cantidad:"5",
  //     precio:"15"
  //   },
  //   {
  //     id:3,
  //     img:'gafas',
  //     nombre:"Gafas de sol",
  //     descripcion:"NIEEPA Gafas de sol polarizadas deportivas para hombre con marco cuadrado NP1007",
  //     cantidad:"5",
  //     precio:"25"
  //   },
  //   {
  //     id:4,
  //     img:'buzo',
  //     nombre:"Buzo cuello redondo",
  //     descripcion:"oklama Cuello redondo exclusivo de Union X The Big Steppers Tour de algodon",
  //     cantidad:"5",
  //     precio:"25"
  //   },
  //   {
  //     id:5,
  //     img:'nirvana',
  //     nombre:"Camisa nirvana para mujer",
  //     descripcion:"Camiseta manga corta print Nirvana Tallas XS, M, S, L",
  //     cantidad:"5",
  //     precio:"50"
  //   },
  //   {
  //     id:6,
  //     img:'bolso',
  //     nombre:"Bolso de cuero",
  //     descripcion:"Bolso asa cadena efecto cocodrilo - Mas vendidos",
  //     cantidad:"5",
  //     precio:"45"
  //   },
  //   {
  //     id:7,
  //     img:'abrigo',
  //     nombre:"Abrigo Trench - Mujer",
  //     descripcion:"Abrigo trench largo efecto suede Tallas XS, M, L",
  //     cantidad:"5",
  //     precio:"80"
  //   },
  //   {
  //     id:8,
  //     img:'set',
  //     nombre:"Sets de pendientes",
  //     descripcion:"Set 9 pendientes cascada pedrería color dorado",
  //     cantidad:"5",
  //     precio:"100"
  //   },
  //   {
  //     id:9,
  //     img:'puffy',
  //     nombre:"Cazadora puffy",
  //     descripcion:"Cazadora puffy pana Tallas S, M, L, XL en varios colores",
  //     cantidad:"5",
  //     precio:"20"
  //   },
  //   {
  //     id:10,
  //     img:'pantalones',
  //     nombre:"Pantalón wide",
  //     descripcion:"Pantalón wide cargo hilo contraste disponoble en 4 colores",
  //     cantidad:"5",
  //     precio:"30"
  //   },
  //   {
  //     id:11,
  //     img:'sudadera',
  //     nombre:"Sudadera Rolling Stones",
  //     descripcion:"Sudadera print Rolling Stones Tallas XS, S, M, L, XS",
  //     cantidad:"5",
  //     precio:"100"
  //   },
  //   {
  //     id:12,
  //     img:'zapatillas',
  //     nombre:"Zapatillas monocolor",
  //     descripcion:"Zapatillas monocolor hombre Tallas 36 en adelante",
  //     cantidad:"5",
  //     precio:"120"
  //   }
  // ])
  const [ventas,setVentas]=useState([])
  function editar(info){
    let nuevo=productos;
    let obj={
      id:info._id,
      img:info.img,
      nombre:info.nombre,
      descripcion:info.descripcion,
      cantidad:info.cantidad,
      precio:info.precio
    }
    nuevo.map((p,i)=>{
      if(p._id==info._id){
        nuevo[i]=obj
      }
    })
    setProductos(nuevo)
    axios({
      method: 'put',
      url:`https://devgroup.onrender.com/products/${info._id}`,
      data:{
        id:info._id,
        nombre:info.nombre,
        descripcion:info.descripcion,
        cantidad:info.cantidad,
        precio:info.precio
      }
    })

  }
  function crear(info){
    let nuevo=info.img;
    info.img={url:nuevo,public_id:"12"};
    nuevo=[info]
    console.log(info)
    setProductos((prev)=>[...prev,...nuevo])
    axios({
      method:'post',
      url:"https://devgroup.onrender.com/products/",
      data:info
    })
  }

  function onClose(id) {

    
    setProductos(oldProductos => oldProductos.filter((p) => p._id !== id));
    axios.delete(`https://devgroup.onrender.com/products/${id}`)
    .then(responde=>console.log(responde))
  }
  function onCarrito(id) {
    console.log(id)
    let nuevo=carrito.filter((c,i)=>i!==id)
    console.log(nuevo)
    setCarrito(nuevo)
  }
  function agregarCompra(name){
        setCarrito(prev=>[...prev,...[name]])
  }
  function onGo(){
  }
  function menosUno(){

  }
  useEffect(()=>{
    setCarrito([])
    
  },[ventas])
  
  function agregarVenta(nombre,cedula,direccion,carrito,sumatoria,pago){
    let info={
      nombre:nombre,
      cedula:cedula,
      direccion:direccion,
      forma:pago,
      productos:carrito,
      total:sumatoria

    }
    console.log(info)
    if(ventas.length>0){
      setVentas((prev) => [...prev,...[info]])
    }else{
      setVentas([info])
    }
    let nuevo=productos
    for(let i=0; i<carrito.length; i++){
      for(let j=0; j<nuevo.length; j++){
        if(carrito[i].id==nuevo[j].id){
          nuevo[j].cantidad=nuevo[j].cantidad-1
          axios({
            method: 'put',
            url:`https://devgroup.onrender.com/products/${nuevo[j]._id}`,
            data:{
              cantidad:nuevo[j].cantidad
            }
          })
        }
      }
    }
    setProductos(nuevo)
    axios({
      method: 'post',
      url:`https://devgroup.onrender.com/ventas`,
      data:info
    })

  }
  // if(online.entrar==false){
  //   return(
  //     <Router>
  //     <div className="App">
  //       <div>
  //         <Routes>
  //           <Route exact path="/" element={[<NavBar  carrito={carrito}/>, <Inicio />, <Footer/>]} />
  //           <Route path="*" element={<Error404/>}/>
  //         </Routes>
  //       </div>
  //     </div>
  //     </Router>
  //   )
  // }
  return (
    <Router basename={process.env.PUBLIC_URL}> 
      <div className="App">
        <div>
          <Routes>
            <Route path="/" element={[<Inicio />, <Footer/>]} />
            <Route element={<ProtectedRoute/>}>
              <Route e path="/home" element={[<NavBar  carrito={carrito}/>, <Productos  agregarCompra={agregarCompra}  productos={productos} carrito={carrito}/>, <Footer/>]}></Route>
            </Route>
            <Route element={<ProtectedRoute/>}>
              <Route path='/admin' element={[<NavBar  carrito={carrito}/>,<Tabla  editar={editar} productos={productos} onClose={onClose} crear={crear}/>,<Footer/>]}></Route>
            </Route>
            <Route element={<ProtectedRoute/>}>
              <Route path='/ventas' element={[<NavBar  carrito={carrito}/>,<Ventas  ventas={ventas}/>]}/>
            </Route>
            <Route element={<ProtectedRoute/>}>
              <Route path="/carro" element={[<NavBar  carrito={carrito}/>, <Carro menosUno={ menosUno} carrito={carrito} agregarVenta={agregarVenta} onCarrito={onCarrito} />]}></Route>
            </Route>
            <Route path="*" element={<Error404/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
