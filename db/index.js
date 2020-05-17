const mongoose = require('mongoose');

// var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1/riseup';
var MONGODB_URI = 'mongodb://lc:lc1234@ds145312.mlab.com:45312/heroku_k9x3ngkc'

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true, useCreateIndex: true, useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: false, // Don't build indexes
    poolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6 
  })
  .then(() => console.log('Database Connected'))
  .catch(err => console.log(err));

const db = mongoose.connection;

db.on('error', err => {
  console.log(`There was an error connecting to the database: ${err}`);
});
db.once('open', () => {
  console.log(
    `You have successfully connected to your mongo database: ${MONGODB_URI}`
  );
});

module.exports = db;
