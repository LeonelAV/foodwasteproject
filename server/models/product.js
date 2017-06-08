const mongoose = require('mongoose')
const collection = 'products'

const ProductSchema = new mongoose.Schema({
  name: {
    type: String
  },
  category: String,
  image: String,
  price: Number,
  discount: Number,
  experyAt: String,
  shop: String,
  address: String,
  coordinates: [ Number, Number ],
  expired: {
    type: Boolean,
    default: false
  }
}, { collection })

module.exports = mongoose.model('Product', ProductSchema)
