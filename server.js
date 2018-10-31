const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const dbConnection = require('./db');
const db = require('./models'); // loads our connection to the mongo database
const passport = require('./passport');
const path = require('path');
const cookieparser = require('cookie-parser');
const flash = require('connect-flash');
const logger = require('morgan');
const compression = require('compression');

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 3001);

const router = require('./routes');

const app = express();

var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieparser());
if (process.env.NODE_ENV === 'production') {
  app.disable('x-powered-by');
  app.use(compression());
  app.use(logger('common'));
  app.use(express.static(path.resolve(__dirname, './client/build')));
  app.use(function(req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header('Access-Control-Allow-Credentials', true);
    next();
  });
} else {
  // app.use(function(req, res, next) {
  //   res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  //   res.header(
  //     'Access-Control-Allow-Headers',
  //     'Origin, X-Requested-With, Content-Type, Accept'
  //   );
  //   res.header('Access-Control-Allow-Credentials', true);
  //   next();
  // });
}

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

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
      httpOnly: false,
      maxAge: 20 * 60 * 1000 // 20 minutes
    }
  })
);
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', router);

server.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

io.sockets.on('connect', function(socket) {
  let room;
  let roomId;

  socket.on('join', data => {
    socket.leaveAll();
    room = `room${data.room}`;
    roomId = data.room;
    socket.join(room);
    db.Message.find({ userIds: data.user })
      .populate('userIds')
      .exec((err, messages) => {
        // res.json(messages);
        socket.emit('RECEIVE_ALL_MESSAGES', messages);
      });
  });

  console.log(socket.id);

  socket.on('connect', () => console.log('connect'));

  socket.on('GET_CONVERSATION', id => {
    db.Message.findById(id).then(convo => {
      socket.emit('RECEIVE_CONVERSATION', convo);
    });
  });

  socket.on('GET_ALL_MESSAGES', userId => {
    db.Message.find({ userIds: userId })
      .populate('userIds')
      .exec((err, messages) => {
        // res.json(messages);
        socket.emit('RECEIVE_ALL_MESSAGES', messages);
      });
  });

  socket.on('SEND_MESSAGE', data => {
    db.Message.findByIdAndUpdate(roomId, {
      $push: { messages: { message: data.message, user: data.user } }
    }).then(results => {
      console.log(results);
    });
    io.to(room).emit('RECEIVE_MESSAGE', data);
  });

  //SOCKET.IO for articles
  socket.on('SEND_COMMENT', function(data) {
    db.Article.findByIdAndUpdate(data.articleId, {
      $push: { comments: data.info }
    }).then(results => {
      // console.log(results);
    });
    io.emit('RECEIVE_COMMENT', data);
  });

  socket.on('SEND_PAST_COMMENT', function(data) {
    db.Historical.findByIdAndUpdate(data.articleId, {
      $push: { comments: data.info }
    }).then(results => {
      // console.log(results);
    });
    io.emit('RECEIVE_PAST_COMMENT', data.info);
  });

  socket.on('disconnect', () => console.log('disconnect'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});
