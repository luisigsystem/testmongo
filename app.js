'use strict'

/** Importaciones desde el npm */
const express = require('express') /** Se importa el paquete "express" */
const bodyparser = require('body-parser') /** Se importa el paquete body-parser */
const app = express() /** Se declara como constante el express */
const api = require('./routes')

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json()) /** Lo parsea a formato json */
app.use('/api', api)

module.exports = app