const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

const routesProducts = require('./routes/products')
const routesProduct = require('./routes/product')
const routesShops = require('./routes/shops')
const routesShop = require('./routes/shop')

/* bodyParser */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/* static folder */
app.use(express.static(path.join(__dirname, '../client')))

app.use('/api/products', routesProducts)
app.use('/api/product', routesProduct)
app.use('/api/shops', routesShops)
app.use('/api/shop', routesShop)

module.exports = app
