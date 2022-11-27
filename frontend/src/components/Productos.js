import React, { useEffect } from "react";
import "../stylesheets/productos.css";
import { Producto } from "./Producto";
function Productos({productos, agregarCompra}){
  // console.log(productos,"cambio")
  // console.log(prueba)
  console.log(productos)
  return(
        <>
          <div className="titulo">
            <h3>Nuestros productos</h3>
          </div>
          <section className="productos-container">
            {
              
              productos.map(p=><Producto 
                key={p._id}
                id={p._id}
                img={p.img.url}
                nombre={p.nombre}
                descripcion={p.descripcion}
                precio={p.precio}
                agregarCompra={()=>agregarCompra(p)}
                cantidad={p.cantidad}
              />)
            }
          </section>
        </>
    )
}

export default Productos;