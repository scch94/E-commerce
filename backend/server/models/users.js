import mongoose from "mongoose";
const usersSchema = new mongoose.Schema ({
    nombre:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    clave:{
        type: String,
        require: true
    },
    rol:{
        type: String,
        require: true
    }
})

export default mongoose.model("users", usersSchema)