import { Router } from "express";
import {createProduct, deleteProduct, getProduct, getProducts, update} from '../controller/products.controller.js'
const router =Router();

router.get('/products',getProducts)
router.post('/products',createProduct)
router.put('/products/:id',update)
router.delete('/products/:id',deleteProduct)
//consultar solo un producto
router.get('/product/:id',getProduct)

export default router