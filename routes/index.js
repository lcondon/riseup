const path = require('path');
const router = require('express').Router();
// const apiRoutes = require('./api');
const passport = require('passport');
const db = require('../models');

// API Routes
// router.use('/api', apiRoutes);

router.get('/login', function(req, res) {
  db.User.find({ firstName: 'Lola' }).then(function(results) {
    res.json(results);
  });
});

router.get('/logme', function(req, res) {
  db.User.create({
    firstName: 'Lola',
    lastName: 'Owen',
    email: 'lola@owen.com',
    password: 'iloverun'
  }).then(function(results) {
    res.json(results);
  });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
  console.log(req.body);
  if (req.isAuthenticated()) {
    res.json('yes');
  } else {
    res.json('no?');
  }
});

// router.post(
//   '/login',
//   function(req, res, next) {
//     console.log(req.body);
//     console.log('================');
//     next();
//   },
//   passport.authenticate('local'),
//   (req, res) => {
//     console.log('POST to /login');
//     const user = JSON.parse(JSON.stringify(req.user)); // hack
//     res.json({ user: user });
//   }
// );

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
