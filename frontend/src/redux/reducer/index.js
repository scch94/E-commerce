import axios from 'axios'
const initialstate={
    usuarios:[],
    online:{entrar:false,nombre:"",i:"",rol:""}
}

export default(state=initialstate,action)=>{
    switch(action.type){
        case 'GET_USUARIOS':
            return{
                ...state,
                usuarios:action.payload
            }
        case 'ONLINE_MODIFICAR':

            return{
                ...state,
                online:action.payload
            }
        case 'CREATE_USER':
            axios({
                method:'post',
                url:"https://devgroup.onrender.com/newUsers/",
                data:action.payload
            })
            let nuevo=state.usuarios
            nuevo=[...nuevo,action.payload]
            console.log("holaaaa",nuevo)
            return{
                ...state,
                usuarios:nuevo
            }

        case 'LOGOUT':
                return{
                    ...state,
                    online:{entrar:false,nombre:"",i:""}
                }
        default:return{...state}
    }
}

