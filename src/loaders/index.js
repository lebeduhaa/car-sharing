const initExpress = require('./express');
const initMiddlewares = require('./middlewares');
const initRoutes = require('./routes');

module.exports = expressApp => {
  initExpress(expressApp);
  initRoutes(expressApp);
  initMiddlewares(expressApp);
}
