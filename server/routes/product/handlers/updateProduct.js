const Product = require(__base + 'models/product')

function updateProduct (req,res) {
  const { id } = req.params
  const {name, category, image, price, discount, experyAt, expired } = req.body

  const dataToUpdate = {}
  if (name) dataToUpdate.name = name
  if (category) dataToUpdate.category = category
  if (image) dataToUpdate.image = image
  if (price) dataToUpdate.price = price
  if (discount) dataToUpdate.discount = discount
  if (experyAt) dataToUpdate.experyAt = experyAt
  if (expired) dataToUpdate.expired = expired


  Product.findByIdAndUpdate( id, dataToUpdate)
           .then( () => res.status(200).json({ msg: `product w/ id ${id} updated properly`}) )
           .catch( () => res.status(500).json({ msg: `error updating  product w/ id ${id} `}) )

}

module.exports = updateProduct
