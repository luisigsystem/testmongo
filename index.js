'use strict'
/** Importaciones desde el npm */
const mongoose = require('mongoose') /** Se importa el paquete mongoose */
const app = require('./app') /** Se importa el paquete app */
const config = require('./config') /** */

mongoose.connect(config.db, { useNewUrlParser: true }, (err, res) => { /** Conectar con el MONGO DB */
    if (err) {
        console.log(`- Error al conectar con la base de datos nosql ${err} -`)
    }
    console.log('- Conexion a la base de datos nosql -')

    app.listen(config.port, () => { /** port, () => { ___ es lo mismo que___ port, function() { */
        console.log(`API REST corriendo en http://localhost:${config.port}`)  
    }) 
})  