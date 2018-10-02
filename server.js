const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const dbConnection = require('./db');
const db = require('./models'); // loads our connection to the mongo database
// const passport = require("./passport");
const path = require('path');
const socket = require('socket.io');
const http = require('https');
// const cookieparser = require("cookie-parser");
// const flash = require("connect-flash");
// const logger = require("morgan");

const PORT = process.env.PORT || 3001;

const userRouter = require('./routes/index');

const app = express();

const server = http.Server(app);
const io = socket(server);

io.on('connection', function(socket) {
  socket.emit('news', { hello: 'world' });
  // socket.on('my other event', function(data) {
  //   console.log(data);
  // });
});

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  //  res.io = skt;
  next();
});

// app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieparser());
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
// app.use(
//   session({
//     secret: "keyboard cat",
//     store: new MongoStore({ mongooseConnection: dbConnection }),
//     resave: false, // we support the touch method so per the express-session docs this should be set to false
//     proxy: true,
//     saveUninitialized: false,
//     rolling: true,
//     name: "sid",
//     cookie: {
//       httpOnly: true,
//       maxAge: 20 * 60 * 1000 // 20 minutes
//     }
//   })
// );
// app.use(flash());

// app.use(passport.initialize());
// app.use(passport.session());

// app.use(userRouter);
app.get('/api/test', (req, res) => res.json({}));

// const http = require('http').createServer(app);

// var fs = require('fs');
server.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
// const server = http.createServer(app);
// const port2 = 4001
// io.on('connection', socket => {
//   console.log('User connected');
//   socket.on('chat message', function(msg) {
//     io.emit('chat message', msg);
//   });
//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });
// });

// http.listen(80, function() {
//   console.log('listening on *:' + 80);
// });

// server.listen(port2, () => console.log(`Listening on port ${port2}`))
