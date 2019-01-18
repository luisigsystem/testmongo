'use strict'

const express = require('express')
const ProductCtrl = require('../controllers/product')
const api = express.Router()

/** HACIENDO PETICIONES HTTP: GET, POST y PUT PARA EL API */
api.get('/product', ProductCtrl.getProducts)
api.get('/product/:productoID', ProductCtrl.getProduct)
api.post('/product', ProductCtrl.saveProduct) 
api.put('/product/:productoID', ProductCtrl.updateProduct)
api.delete('/product/:productoID', ProductCtrl.deleteProduct) 

module.exports = api