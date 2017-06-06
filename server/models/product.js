const mongoose = require('mongoose')
const collection = 'products'

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: Number,
  discount: Number,
  experyAt: Number,
  shop: {
    name: String,
    address: String,
    coordinates: [ Number, Number ],
    }
  },
  expired: {
    type: Boolean,
    default: false
  }
}, { collection })

module.exports = mongoose.model('Product', ProductSchema)
