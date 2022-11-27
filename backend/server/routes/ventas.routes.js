import {Router} from "express"
import { createVentas, deleteVenta, getVenta, getVentas, updateVentas } from "../controller/ventasController.js"
const routerV=Router()

routerV.get('/ventas',getVentas)
routerV.post('/ventas',createVentas)
routerV.put('/ventas/:id',updateVentas)
routerV.delete('/ventas/:id',deleteVenta)
//consultar solo un ventao
routerV.get('/venta/:id',getVenta)

export default routerV