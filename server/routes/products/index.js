const express = require('express')
const router = express.Router()

const addProduct = require('./handlers/addProduct')
const getAll = require('./handlers/getAll')

router.get('/', getAll)
router.post('/', addProduct)

module.exports = router

