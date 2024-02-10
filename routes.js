const express = require('express')
const router = express.Router()
const { all_products, create_product, get_products, delete_product, get_product_by_id, get_ } = require('./controllers')

router.get('/', all_products)
router.post('/', create_product)

router.get('/search', get_products)


router.get("/:id", get_product_by_id)
router.delete('/:id', delete_product)
module.exports = router;