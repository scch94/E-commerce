import PRODUCTO from '../models/products.js'
import {uploadImage, deleteImage} from '../libraries/cloudinary.js'
import fs from "fs-extra";
export const getProducts = async(req,res)=>{
    try {
        const products = await PRODUCTO.find();
        res.send(products);
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }
} 

export const createProduct=async(req, res)=>{
    try{
        console.log(req.body.img)
        if(req.body.img){
            const { img,nombre,descripcion,cantidad, precio } = req.body;
            const nuevoP=new PRODUCTO({img,nombre,descripcion,cantidad,precio})
            await nuevoP.save()
            return res.json(nuevoP)
        }else{
            const { nombre,descripcion,cantidad, precio } = req.body;
            console.log(req.files.img)
            let img;
            if (req.files.img) {
                const result = await uploadImage(req.files.img.tempFilePath);
                await fs.remove(req.files.img.tempFilePath);
                console.log("esto es lo que llega ",req.files.img.tempFilePath)
                img = {
                url: result.secure_url,
                public_id: result.public_id,
                };
            }
            const nuevoP=new PRODUCTO({img,nombre,descripcion,cantidad,precio})
            await nuevoP.save()
            return res.json(nuevoP)
        }
        
    }catch(error){
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}

export const update=async (req, res)=>{
    try {
        console.log("entraste al metodo update")
        const updatedProduct = await PRODUCTO.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true
        });
        return res.json(updatedProduct);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteProduct= async (req, res)=>{
try {
    const productRemoved = await PRODUCTO.findByIdAndDelete(req.params.id);

    if (!productRemoved) {
        return res.sendStatus(404);
    } else {

        if (productRemoved.img.public_id) {
        await deleteImage(productRemoved.img.public_id);
        }
        console.log("producto eliminado con exito")
        return res.sendStatus(204);
        
    }
    } catch (error) {
    return res.status(500).json({ message: error.message });
    }
};

export const getProduct = async (req, res) => {
    try {
        const OneProduct = await PRODUCTO.findById(req.params.id);
    
        if (!OneProduct) {
            return res.sendStatus(404);
        } else {
            return res.json(OneProduct);
        }
        } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};