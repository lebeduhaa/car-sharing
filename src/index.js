const database = require('./database');
const server = require('./server');

database()
  .then(info => {
    console.log(`Connected to ${info.host}:${info.port}/${info.name}`);

    server.run();
  });








