import mongoose from 'mongoose'
import PRODUCTO from './products.js'
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
    precio:{
        type:Number,
        required:true,
        trim:true
    },
})


const ventaEsquema=new mongoose.Schema({ 
    nombre:{
        type: String,
        required:true,
        trim:true
    },
    cedula:{
        type: Number, //de que tipo
        required: true, //si es requerido
        trim: true //elimina espacios de mas 
    },
    direccion:{
        type: String,
        required:true,
        trim:true
    },
    forma:{
        type: String,
        required:true,
        trim:true
    },
    productos:[productoEsquema],
    total:{
        type:Number,
        required:true,
        trim:true
    },
})

export default mongoose.model('VENTA', ventaEsquema)
