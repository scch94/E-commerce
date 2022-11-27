import React from 'react'
import "../stylesheets/productos.css";
export const Producto = ({img,nombre,descripcion,precio,cantidad, agregarCompra}) => {
    return (
        <>
            {
                cantidad>0?(
                <article className="card">
                    <img className="imagen" src={img} alt="Air Force One"/>
                    <div className="card-info">
                
                        <h3>{nombre}</h3>
                        <p className="descripcion">{descripcion}</p>
                        <p className="unidadesS"> Disponible en stock {cantidad} unidades</p>
                        <p className="precio">{precio}$</p>
                        <button className="button" onClick={agregarCompra}>Agregar al carro</button>
                    </div>
                </article>): (<article className="card">
                    <img className="imagen" src={img} alt="Air Force One"/>
                    <div className="card-info">
                
                        <h3>{nombre}</h3>
                        <p className="descripcion">{descripcion}</p>
                        <p className="unidadesS"> Producto agotado {cantidad} unidades</p>
                        <p className="precio">{precio}$</p>
                        {/* <button className="button" onClick={agregarCompra}>Agregar al carro</button> */}
                    </div>
                </article>)
            }
            
        </>
    )
    }
