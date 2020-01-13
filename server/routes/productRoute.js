const router = require('express').Router();

const ProductsCtrl = require('../controllers/ProductsController');

router.post('/', ProductsCtrl);

module.exports = { router };
