const ProductStore = require('../store/ProductsStore');

const addOneProduct = async (req, res) => {
  const product = req.body;
  console.log(product);
  const result = await ProductStore.addOneProduct(product);
  return res.send(result);
};

module.exports = { addOneProduct };
