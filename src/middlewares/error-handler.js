module.exports = (error, request, response, next) => {
    response
        .status(error.status)
        .end(error.message);
};