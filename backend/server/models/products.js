import mongoose from 'mongoose'
//MONGOSE PONE EL ID DEL ELEMENTO
//ESQUEMA DEL PRODUCTO
const productoEsquema =new mongoose.Schema({ 
    img:{
        url:String,
        public_id:String
    },
    nombre:{
        type: String, //de que tipo
        required: true, //si es requerido
        trim: true //elimina espacios de mas 
    },
    descripcion:{
        type: String,
        required:true,
        trim:true
    },
    cantidad:{
        type:Number,
        required:true,
        trim:true
    },
    precio:{
        type:Number,
        required:true,
        trim:true
    },
})

export default mongoose.model('PRODUCTO', productoEsquema)