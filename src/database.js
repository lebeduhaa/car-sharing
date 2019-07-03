const mongoose = require('mongoose');
const config = require('./config');

module.exports = () => new Promise((resolve, reject) => {
  mongoose.connection.on('open', () => resolve(mongoose.connections[0]));
  mongoose.connection.on('close', () => console.log('Connection was closed!'));
  mongoose.connection.on('error', error => console.error(error));

  mongoose.connect(config.database.url, {useNewUrlParser: true});
});
