const ProductStore = require('../store/ProductsStore');

const addOneProduct = async (req, res) => {
  const product = req.body;
  const result = await ProductStore.addOneProduct(product);
  console.log('A new product was added', result);
  return res.json(product);
};

const updateOneProduct = async (req, res) => {
  const productID = req.params.productID;
  const product = req.body;
  const { result } = await ProductStore.updateAProduct(productID, product);
  return res.send(result);
};

const deleteOneProduct = async (req, res) => {
  const productID = req.params.productID;
  const { result } = await ProductStore.removeAProduct(productID);
  return res.send(result);
};

module.exports = { addOneProduct, updateOneProduct, deleteOneProduct };
