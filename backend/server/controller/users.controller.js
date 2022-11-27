import users from "../models/users.js";

export const getUsers = async (req,res)=>{
    try{
        const usuarios= await users.find();
        res.send(usuarios);
        console.log("Te muestra los usuarios")
    }catch(error){
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }
}

export const createUsers=async(req, res)=>{
    try{
        const { nombre,email,clave,rol } = req.body;
        const newUsers=new users({nombre,email,clave,rol})
        await newUsers.save()
        return res.json(newUsers)
    }catch(error){
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}

export const updateUsers=async (req, res)=>{
    try {
        const updatedUser = await users.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        });
        return res.json(updateUsers);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteUsers= async (req, res)=>{
    try {
        const usersRemoved = await users.findByIdAndDelete(req.params.id);
    
        if (!usersRemoved) {
            return res.sendStatus(404);
        } else {
            console.log("producto eliminado con exito")
            return res.sendStatus(204);
        }
        } catch (error) {
        return res.status(500).json({ message: error.message });
        }
};

export const getUser = async (req, res) => {
    try {
        const OneUser = await users.findById(req.params.id);
    
        if (!OneUser) {
            return res.sendStatus(404);
        } else {
            return res.json(OneUser);
        }
        } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};