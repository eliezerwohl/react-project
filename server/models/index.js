const mongoose = require('mongoose');

module.exports.connect = (uri) => {
  mongoose.connect(uri);
  // plug in the promise library:
  mongoose.Promise = global.Promise;


  mongoose.connection.on('error', (err) => {

    console.error(`Mongoose connection error: ${err}`);
    process.exit(1);
  });

  mongoose.connection.on('open', (err) => {
    console.log('we are open');

  });



 

  // load models
  require('./user');
};