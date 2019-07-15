const database = require('./database');
const server = require('./server');

database()
  .then(info => {
    console.log(`Connected to ${info.host}:${info.port}/${info.name}`);

    server.run();
  })
  .catch(error => console.log('Database connection error!', error));
