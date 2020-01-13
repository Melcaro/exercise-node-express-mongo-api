const express = require('express');
const routes = require('./routes');
const middlewares = require('./middlewares');

const app = express();

middlewares(app);
routes(app);

const PORT = 5000;

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server launched on port ${PORT}`);
});
