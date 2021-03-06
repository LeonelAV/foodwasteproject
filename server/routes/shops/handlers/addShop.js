const Shop = require(__base + 'models/shop')

function addShop( req, res ) {
  const { name, category, image, address, lat, lng} = req.body
  const shop = new Shop({ name, category, image, address, lat, lng})
  shop.save()
           .then(()  => res.status(200).json({ msg: 'shop inserted properly'}))
           .catch(() => res.status(500).json({ msg: 'error inserting shop'}))
}

module.exports = addShop
