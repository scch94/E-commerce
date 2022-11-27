import express from 'express'
import productsRoutes from './routes/products.routes.js'
import routerV from './routes/ventas.routes.js';
import fileupload from 'express-fileupload'
import routerUsers from './routes/usuarios.routes.js'

const app= express();

//middleware
app.use(express.json())
app.use(fileupload({
    //archivos temporales que no se guarden en memoria si no en una carpeta luego la enviaremos a la nube
    useTempFiles: true,
    tempFileDir:'./files'
}))
//routes
app.use(productsRoutes)
app.use(routerV)
app.use(routerUsers)



export default app