const router = require('express').Router();
const passport = require('../../passport');
const db = require('../../models');

router
  .route('/')
  .post(function(req, res) {
    db.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      responses: []
    }).then(function(results) {
      res.json({ redirect: '/login' });
    });
  })
  .put(function(req, res) {
    console.log(req.body);
    db.User.findByIdAndUpdate(req.body.user, {
      responses: req.body.responses
    }).then(function(results) {
      console.log(results);
      res.json(results);
    });
  })
  .delete(function(req, res) {
    console.log(1);
    console.log(req.body.id);
    console.log(2);
    db.User.findByIdAndDelete(req.body.id).then(function(results) {
      console.log(results);
      res.json(results);
    });
  });

router.route('/isloggedin').get(function(req, res) {
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    res.json('not');
  }
});

router.route('/login').post(passport.authenticate('local'), function(req, res) {
  console.log(req.user);
  if (req.isAuthenticated()) {
    res.json({ redirect: '/article' });
  } else {
    res.json({ redirect: '/login' });
  }
});

router.route('/logout').post(function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
