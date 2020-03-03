const ProductsRouter = require('./routes/productRoute');

function routes(app) {
  app.use('/api/v1/products', ProductsRouter);
}

module.exports = routes;
