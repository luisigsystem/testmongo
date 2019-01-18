'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema /** Esquemas */

const ProductSchema = Schema({ /** Creamos los esquemas o tablas con sus atributos */
    name: String,
    price: { type: Number, default: 0},
    brand: { type: String, enum: ['Samsung', 'Apple', 'Toshiba', 'Lenovo', 'HP']},
    model: String
})

module.exports = mongoose.model('Product', ProductSchema)  /** Registramos al 'Product' como modelo del mongoose para que pueda ser usado por otros ficheros */