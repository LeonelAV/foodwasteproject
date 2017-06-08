const Product = require(__base + 'models/product')

function updateProduct (req,res) {
  const { id } = req.params
  const {name, price, discount, experyAt } = req.body

  const dataToUpdate = {}
  if (name) dataToUpdate.name = name
  if (price) dataToUpdate.description = price
  if (discount) dataToUpdate.image = discount
  if (experyAt) dataToUpdate.image = experyAt


  Product.findByIdAndUpdate( id, dataToUpdate)
           .then( () => res.status(200).json({ msg: `product w/ id ${id} updated properly`}) )
           .catch( () => res.status(500).json({ msg: `error updating  product w/ id ${id} `}) )

}

module.exports = updateProduct
