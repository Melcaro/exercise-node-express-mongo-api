const ProductsRouter = require('./routes/productRoute');

const routes = app => {
  app.get('/api/v1/products', ProductsRouter);
};

module.exports = { routes };
