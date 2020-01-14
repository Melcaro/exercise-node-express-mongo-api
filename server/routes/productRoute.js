const router = require('express').Router();
const ProductsCtrl = require('../controllers/ProductsController');

router.post('/', ProductsCtrl.addOneProduct);

router.put('/:productID', ProductsCtrl.updateOneProduct);

router.delete('/:productID', ProductsCtrl.deleteOneProduct);

module.exports = router;
