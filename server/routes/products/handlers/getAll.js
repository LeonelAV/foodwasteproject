const Product = require(__base + 'models/product')

function getAll(req, res) {

  Product.find({})
        .populate('shop')
        .exec(products => res.json(products))
        .then(()  => res.status(200).json({ msg: 'product show...'}))
}

module.exports = getAll
