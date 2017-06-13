const mongoose = require('mongoose')
const collection = 'shops'

const ShopSchema = new mongoose.Schema({
  name: String,
  category: String,
  image: String,
  address: String,
  // coordinates: [ Number, Number ]
  lat: Number,
  lng: Number
}, { collection })

module.exports = mongoose.model('Shop', ShopSchema)
