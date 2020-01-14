const ProductStore = require('../store/ProductsStore');

const getAllProducts = async (req, res) => {
  const { criteria, order, pageSize, page } = req.query;
  const result = await ProductStore.fetchAllProducts(
    criteria,
    Number(order),
    Number(pageSize),
    page
  );
  return res.send(result);
};

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

module.exports = {
  getAllProducts,
  addOneProduct,
  updateOneProduct,
  deleteOneProduct,
};
