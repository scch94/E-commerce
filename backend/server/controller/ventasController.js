
import VENTA from '../models/ventas.js'

export const getVentas = async (req,res)=>{
    try{
        const ventas= await VENTA.find();
        res.send(ventas);
        console.log("te llevas los productos")
    }catch(error){
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }
}

export const createVentas=async(req, res)=>{
    try{
        const { nombre,cedula,direccion,forma,productos,total } = req.body;
        const nuevaV=new VENTA({nombre,cedula,direccion,forma,productos,total})
        await nuevaV.save()
        return res.json(nuevaV)
    }catch(error){
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}

export const updateVentas=async (req, res)=>{
    try {
        const updatedVenta = await VENTA.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true,
        });
        return res.json(updatedVenta);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const deleteVenta= async (req, res)=>{
    try {
        const ventaRemoved = await VENTA.findByIdAndDelete(req.params.id);
    
        if (!ventaRemoved) {
            return res.sendStatus(404);
        } else {
            console.log("producto eliminado con exito")
            return res.sendStatus(204);
        }
        } catch (error) {
        return res.status(500).json({ message: error.message });
        }
};

export const getVenta = async (req, res) => {
    try {
        const OneVenta = await VENTA.findById(req.params.id);
    
        if (!OneVenta) {
            return res.sendStatus(404);
        } else {
            return res.json(OneVenta);
        }
        } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};