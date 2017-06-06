const Product = require( __base + 'models/Product')

function getAll (req, res) {

  Product.find()
           .then(products => res.json(products))
}

module.exports = getAll
