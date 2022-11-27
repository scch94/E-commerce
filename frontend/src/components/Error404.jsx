import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import s from '../stylesheets/error404.module.css'

export const Error404 = () => {
  return (
    <>
        <div className={s.contendor}>
            <h1>ERROR 404</h1>
        </div>
        <div className={s.contenedor}>
            <Link to="/"><Button color='success'>Volver atras</Button></Link>
        </div>
    </>
    
  )
}
