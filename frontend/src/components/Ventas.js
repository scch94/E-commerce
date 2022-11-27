import React, { useEffect } from 'react'
import { Venta } from './Venta'
import s from '../stylesheets/ventas.module.css'
import { useDispatch, useSelector } from 'react-redux'

export const Ventas = ({ventas}) => {
  console.log(ventas)
  let detail=useSelector(state=>state.usuarios)
  return (
    <div className={s.contenedor}>
      <h1>Ventas{detail[0].nombre}</h1>
      <div className={s.ventas}>
        {
          ventas.map((v,i)=><Venta venta={v} index={i}/>)
        }
      </div>
    </div>
    
  )
}
