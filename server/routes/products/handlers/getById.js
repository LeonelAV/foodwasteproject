const Product = require(__base + 'models/product')

function getById (req,res) {

  const { id } = req.params
  const { projection } = req

  Product
    .findById(id , projection)
    .then( products => {
      res.json(products)
    })

}

module.exports = getById