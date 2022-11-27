//sintaxis moderna de es7 PARA IMPORTAR 
//importacion de las rutas
import { PORT } from './config.js';
import { DBconnection } from '../server/db.js';
import app from './app.js'

DBconnection()
app.listen(PORT);
console.log("server listening on port",PORT)




