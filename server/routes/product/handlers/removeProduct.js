const Product = require(__base + 'models/product')

function removeProduct (req,res) {
  const { id } = req.params
  Product.findByIdAndRemove( id )
    .then(() => res.status(200).json({ msg: `product w/ id ${id} removed properly`}) )
    .catch(() => res.status(500).json({ msg: `error removing  product w/ id ${id} `}) )

}

module.exports = removeProduct
