import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = () => {
    let online=useSelector(state=>state.online)
    if(online.entrar==false){
        return <Navigate to='/'/>
    }
    return <Outlet/>
}
