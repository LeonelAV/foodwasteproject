const express = require('express')
const router = express.Router()

const updateProduct = require('./handlers/updateProduct')
const removeProduct = require('./handlers/removeProduct')

router.put('/:id', updateProduct)
router.delete('/:id', removeProduct)

module.exports = router
