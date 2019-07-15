const initExpress = require('./express');
const initMiddlewares = require('./middlewares');

module.exports = expressApp => {
  initExpress(expressApp);
  initMiddlewares(expressApp);
}
