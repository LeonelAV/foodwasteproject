const Product = require(__base + 'models/product')

function getAll(req, res) {

  Product.find({})
        .populate('shop')
        .exec(products => products)
        .then(products => res.json(products))
}

module.exports = getAll
