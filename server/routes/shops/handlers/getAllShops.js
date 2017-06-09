const Shop = require( __base + 'models/shop')

function getAllShops (req, res) {

  Shop.find()
           .then(shops => res.json(shops))
}

module.exports = getAllShops

