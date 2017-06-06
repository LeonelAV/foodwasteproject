const Product = require(__base + 'models/Product')

function addProduct( req, res ) {
  const { name, price, discount, experyAt } = req.body
  const product = new Product( { name, price, discount, experyAt})
  product.save()
           .then(()  => res.status(200).json({ msg: 'product inserted properly'}))
           .catch(() => res.status(500).json({ msg: 'error inserting product'}))
}

module.exports = addProduct
