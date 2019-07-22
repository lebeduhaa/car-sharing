module.exports = (request, response, next) => {
    next(request.query);
};
