const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const dbConnection = require('./db');
const db = require('./models'); // loads our connection to the mongo database
const passport = require('./passport');
const path = require('path');
const socket = require('socket.io');
const http = require('http');
const cookieparser = require('cookie-parser');
const flash = require('connect-flash');
const logger = require('morgan');

const PORT = process.env.PORT || 3001;

const router = require('./routes');

const app = express();

// server.listen(3002);

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  // res.header(
  //   'Access-Control-Allow-Headers',
  //   'Origin, X-Requested-With, Content-Type, Accept'
  // );
  res.header('Access-Control-Allow-Credentials', true);
  //  res.io = skt;
  next();
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieparser());
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
app.use(
  session({
    secret: 'keyboard cat',
    store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: false, // we support the touch method so per the express-session docs this should be set to false
    proxy: true,
    saveUninitialized: false,
    rolling: true,
    name: 'sid',
    cookie: {
      httpOnly: true,
      maxAge: 20 * 60 * 1000 // 20 minutes
    }
  })
);
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use('/', router);

let server2 = app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

const io = socket(server2);

io.on('connection', function(socket) {
  console.log(socket.id);

  socket.on('SEND_MESSAGE', function(data) {
    io.emit('RECEIVE_MESSAGE', data);
    console.log(data);
  });

  socket.on('SEND_COMMENT', function(data) {
    io.emit('RECEIVE_COMMENT', data);
    console.log(data);
  });
});
