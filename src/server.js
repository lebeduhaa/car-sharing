const helpers = require('./helpers');
const Car = require('./models/car');
const http = require('http');
const config = require('./config');

exports.run = () => {
  http
  .createServer((request, response) => {
    switch (request.url) {
      case helpers.constants.endpoints.root:
        // Car.create({
        //   registrationNumber: 123
        // }).then(result => console.log('success')).catch(err => response.end(JSON.stringify(err.errors[Object.keys(err.errors)[0]].message)));
      Car.find({registrationNumber: {$gt: 123}}).then(result => response.end(JSON.stringify(result)));
    }
  })
  .listen(config.app.port, err => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Server started on the port ${config.app.port}!`);
    }
  });
}
