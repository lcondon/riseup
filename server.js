const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const dbConnection = require('./db');
const db = require('./models'); // loads our connection to the mongo database
// const passport = require("./passport");
const path = require('path');
// const cookieparser = require("cookie-parser");
// const flash = require("connect-flash");
// const logger = require("morgan");

const PORT = process.env.PORT || 3001;

const userRouter = require('./routes/index');

const app = express();

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

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

const http = require('http');
const socketIO = require('socket.io');
const server = http.createServer(app);
const io = socketIO(server);
// const port2 = 4001
io.on('connection', socket => {
  console.log('User connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

// server.listen(port2, () => console.log(`Listening on port ${port2}`))
