const Shop = require(__base + 'models/shop')

function updateShop (req,res) {
  const { id } = req.params
  const {name, category, image, address, coordinates } = req.body

  const dataToUpdate = {}
  if (name) dataToUpdate.name = name
  if (category) dataToUpdate.category = category
  if (image) dataToUpdate.image = image
  if (address) dataToUpdate.address = address
  if(coordinates) dataToUpdate.coordinates = coordinates


  Shop.findByIdAndUpdate( id, dataToUpdate)
           .then( () => res.status(200).json({ msg: `shop w/ id ${id} updated properly`}) )
           .catch( () => res.status(500).json({ msg: `error updating  shop w/ id ${id} `}) )

}

module.exports = updateShop