module.exports = (request, response, next) => {
    next(request.params);
};
