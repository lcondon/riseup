const path = require('path');
const router = require('express').Router();
// const apiRoutes = require('./api');
const passport = require('../passport');
const db = require('../models');

// API Routes
// router.use('/api', apiRoutes);

router.get('/api/users/isloggedin', function(req, res) {
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    res.json('not');
  }
});

router.post('/api/users/login', passport.authenticate('local'), function(
  req,
  res
) {
  console.log(req.user);
  if (req.isAuthenticated()) {
    res.json({ redirect: '/article' });
  } else {
    res.json({ redirect: '/login' });
  }
});

router.post('/api/users/signup', function(req, res) {
  db.User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    responses: []
  }).then(function(results) {
    res.json({ redirect: '/login' });
  });
});

router.put('/api/users', function(req, res) {
  console.log(req.body);
  db.User.findByIdAndUpdate(req.body.user, {
    responses: req.body.responses
  }).then(function(results) {
    console.log(results);
    res.json(results);
  });
});

router.post('/api/users/logout', function(req, res) {
  req.logout();
  res.redirect('/');
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
