const ProductsRouter = require('./routes/productRoute');

const routes = app => {
  app.use('/api/v1/products', ProductsRouter);
};

module.exports = routes;
