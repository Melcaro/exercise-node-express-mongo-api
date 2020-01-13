const router = require('express').Router();
const ProductsCtrl = require('../controllers/ProductsController');

router.post('/', ProductsCtrl.addOneProduct);

router.put('/:productID');

router.delete('/:productID');

module.exports = router;
