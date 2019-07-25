const express = require('express');

const app = express();
const initApplication = require('./loaders');
const config = require('./config');

exports.run = () => {
    initApplication(app);

    app.listen(config.app.port, () => {
        console.log(`Server started on the port ${config.app.port}!`);
    });
};
