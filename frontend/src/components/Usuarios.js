import React from 'react'
// import { Users } from './Users'
// import s from '../stylesheets/ventas.module.css'

export const Usuarios = ({users}) => {
    console.log(users)
    return (
      <div>
        <h1>Usuarios</h1>
        <div>
          {
            users.map((v,i)=><h1>{v.nombre}</h1>)
          }
        </div>
      </div>
      
    )
  }