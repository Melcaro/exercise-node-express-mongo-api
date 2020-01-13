const router = require('express').Router();

const ProductsCtrl = require('../controllers/ProductsController');

router.post('/', ProductsCtrl);

router.put('/:productID');

router.delete('/:productID');

module.exports = { router };
