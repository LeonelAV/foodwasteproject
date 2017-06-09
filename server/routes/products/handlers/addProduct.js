const Product = require(__base + 'models/product')

function addProduct( req, res ) {
  const { name, shop, category, image, price, discount, experyAt, address, coordinates, expired } = req.body
  const product = new Product( { name, shop, category, image, price, discount, experyAt, address, coordinates, expired})
  product.save()
           .then(()  => res.status(200).json({ msg: 'product inserted properly'}))
           .catch(() => res.status(500).json({ msg: 'error inserting product'}))
}

module.exports = addProduct

