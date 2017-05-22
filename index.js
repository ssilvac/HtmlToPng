'use strict'

/**
 * iniciar con npm start
 * start es el nombre del script que ejecuta nodemon
 * "nodemon index.js"
 */

const app = require('./app')
const config = require('./config')

app.listen(config.port, () => {
    console.log(`API REST corriendo en http://localhost:${config.port}`)
})
