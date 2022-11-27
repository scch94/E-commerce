import React from 'react'
import s from '../stylesheets/venta.module.css'
import Productos from './Productos'

export const Venta = ({venta, index}) => {
    console.log(venta)
    console.log(index)
    index=index+1;
  return (
    <div className={s.s}>
        <div className={`card text-white  mb-3`}>
            <div className="card-header">
                <h2>Venta #{index}</h2>
            </div>
            <div className="card-body">
                <h5 className="card-title">Comprador: {venta.nombre}</h5>
                <ul>
                    <li>Documento: {venta.cedula}</li>
                    <li>Direccion de envio: {venta.direccion}</li> 
                    <li>Forma de pago: {venta.forma}</li>
                    <li> productos comprados</li>
                    <br></br>
                    {
                        venta.productos.map(p=>(<p>{p.nombre} </p>))
                    }
                    <li> total pagado= {venta.total} $</li>
                </ul>    
            </div>
        </div>
    </div>
  )
}
