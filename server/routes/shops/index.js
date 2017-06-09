const express = require('express')
const router = express.Router()

const addShop = require('./handlers/addShop')
const getAllShops = require('./handlers/getAllShops')

router.get('/', getAllShops)
router.post('/', addShop)

module.exports = router
