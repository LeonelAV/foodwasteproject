const Shop = require(__base + 'models/shop')

function removeShop (req,res) {
  const { id } = req.params
  Shop.findByIdAndRemove( id )
    .then(() => res.status(200).json({ msg: `shop w/ id ${id} removed properly`}) )
    .catch(() => res.status(500).json({ msg: `error removing  shop w/ id ${id} `}) )

}

module.exports = removeShop