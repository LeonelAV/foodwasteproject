
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

const routesProducts = require('./routes/products')
const routesProduct = require('./routes/product')

/* bodyParser */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/* static folder */
app.use( express.static(path.join(__dirname,'../client')))

app.use('/api/products', routesProducts)
app.use('/api/product', routesProduct)

module.exports = app
