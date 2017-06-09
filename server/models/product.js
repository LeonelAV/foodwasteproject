const mongoose = require('mongoose')
const collection = 'products'

const ProductSchema = new mongoose.Schema({
  name: String,
  shop: String,
  category: String,
  image: String,
  price: Number,
  discount: Number,
  experyAt: String,
  // shop: { type: mongoose.Schema.ObjectId, ref: 'Shop' },
  expired: {
    type: Boolean,
    default: false
  }
}, { collection })

module.exports = mongoose.model('Product', ProductSchema)