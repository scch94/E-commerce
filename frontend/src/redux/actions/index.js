import axios from 'axios'
export const getUsuarios=()=>dispatch=>{
    return(
        fetch('https://santiagocanal.onrender.com/users')
        .then(response=>response.json())
        .then(respuesta=>dispatch({type:'GET_USUARIOS',payload:respuesta}))
    )
}
export const createUser=(info)=>{
    return(
        {type:'CREATE_USER',payload:info}
    )
}
export const editarOnline = (info) => {
    return({
        type:'ONLINE_MODIFICAR',
        payload:info
    })
};
export const logOut=()=>{
    return({
        type:"LOGOUT",
    })
}


