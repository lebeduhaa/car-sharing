module.exports = callback => {
  return (request, response, next) => {
    try {
      callback(request, response, next);
    } catch (exception) {
      next(exception);
    }
  }
}