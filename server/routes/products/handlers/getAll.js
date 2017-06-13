const Product = require(__base + 'models/product')

function getAll(req, res) {

  Product.find({})
        .then(products => res.json(products))
}

module.exports = getAll
