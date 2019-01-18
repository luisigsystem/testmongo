'use strict'

const Product = require('../models/product')

function getProduct(req, res){
    let productoID = req.params.productoID

    Product.findById(productoID, (err, product) => { /** Para encontrar segun el ID */
        if (err) res.status(500).send({message: `Error alrealizar la peticion ${err}`})
        if (err) res.status(404).send({message: 'El producto no existe'})

        res.status(200).send({ product: product })
    })
}
function getProducts(req, res){
    /** res.status(200).send({products: []}) *//** Envío de estado "200" osea, exitoso; y un array vacío */
    Product.find({}, (err, products) => {
        if (err) return res.status(500).send({message: `Error al obtener los productos ${err}`})
        if (!products) return res.status(404).send({message: 'No existen productos'})

        res.status(200).send({ products })
    })
}
function saveProduct(req, res){
    /**console.log(req.body)
    res.status(200).send({message: 'El producto se ha recibido exitosamente'}) *//** Envío de estado "200" osea, exitoso; y muestra un mensaje */
    /** res.status(404).send({message: 'El producto no existe'}) *//** Envío de estado "404" osea, no encontrado; y muestra un mensaje */
    console.log('POST /api/product')
    console.log(req.query)

    let product = new Product()
    product.name = req.query.name
    product.price = req.query.price
    product.brand = req.query.brand
    product.model = req.query.model

    product.save((err, productStored) => {
        if (err) res.status(500).send({message: `Error al salvar el producto en la bd: ${err}` })

        res.status(200).send({product: productStored})
    }) /** Salvar o ejecutar */
}
function updateProduct(req, res){
    let productoID = req.params.productoID
    let update = req.query

    Product.findByIdAndUpdate(productoID, update, (err, productUpdate) => {
        if (err) res.status(500).send({message: `Error al actualizar el producto en la bd: ${err}`})
        res.status(200).send({ product: productUpdate })
    })
}
function deleteProduct(req,res){
    let productoID = req.params.productoID

    Product.findById(productoID, (err, product) => {
        if (err) res.status(500).send({message: `Error al borrar el producto ${err}` })

        product.remove(err => {
            if (err) res.status(500).send({message: `Error al borrar el producto ${err}` })
            res.status(200).send({message: 'El producto ha sido eliminado exitosamente' })
        })
    })
}

module.exports = {
    getProduct,
    getProducts,
    saveProduct,
    updateProduct,
    deleteProduct
}