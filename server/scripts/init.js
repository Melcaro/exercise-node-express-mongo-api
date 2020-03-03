const ProductStore = require('../store/ProductsStore');

const products = [
  {
    name: 'product10',
    description: 'Lorem ipsum dolor sit amet',
    price: '10$',
    category: 'shoes',
  },
  {
    name: 'product2',
    description: 'Lorem ipsum dolor sit amet',
    price: '5$',
    category: 'bag',
  },
];

const initialize = async () => {
  await ProductStore.initializeDatabase();
  await ProductStore.removeAllProducts();
  ProductStore.addProducts(products);
};

try {
  initialize();
} catch (e) {
  console.log(e);
}
