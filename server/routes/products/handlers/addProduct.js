const Product = require(__base + 'models/product')

function addProduct( req, res ) {
  const { name, category, image, price, discount, experyAt, shop, expired } = req.body
  const product = new Product( { name, category, image, price, discount, experyAt, shop, expired})
  product.save()
           .then(()  => res.status(200).json({ msg: 'product inserted properly'}))
           .catch(() => res.status(500).json({ msg: 'error inserting product'}))
}

module.exports = addProduct

