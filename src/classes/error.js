class CustomError extends Error {
    constructor(message, status) {
        this.message = message;
        this.status = status;
    }
}

module.exports = CustomError;
