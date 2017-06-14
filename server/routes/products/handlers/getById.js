const Product = require(__base + 'models/product')

function getById(req, res) {

  Product.find({})
        .populate('shop')
        .exec(function(err, product) {
	      res.json( product)
	  })
}

module.exports = getAll