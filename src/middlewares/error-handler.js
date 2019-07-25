module.exports = (error, request, response, next) => {
    response
        .status(error.status ? error.status : 500)
        .end(error.message);
};
