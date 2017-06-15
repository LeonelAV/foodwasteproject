const express = require('express')
const router = express.Router()

const addProduct = require('./handlers/addProduct')
const getAll = require('./handlers/getAll')
const getById = require('./handlers/getById')

router.get('/', getAll)
router.get('/', getById)
router.post('/', addProduct)

module.exports = router

