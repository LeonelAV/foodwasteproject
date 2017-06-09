const express = require('express')
const router = express.Router()

const updateShop = require('./handlers/updateShop')
const removeShop = require('./handlers/removeShop')

router.put('/:id', updateShop)
router.delete('/:id', removeShop)

module.exports = router