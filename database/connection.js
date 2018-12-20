var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/listings';

// Connect Mongoose to our local MongoDB via URI specified above and export it below
mongoose.connect(mongoUri);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('Connected!');
});

module.exports = db;