module.exports = (request, response) => {
    response
        .status(404)
        .end('Resource does not exist!');
};
