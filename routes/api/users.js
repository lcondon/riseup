const router = require('express').Router();
const passport = require('../../passport');
const db = require('../../models');

router
  .route('/')
  .post((req, res) => {
    db.User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      responses: []
    })
      .then(function(results) {
        res.json(results);
      })
      .catch(err => {
        res.json({ err: err });
      });
  })
  .put(function(req, res) {
    db.User.findByIdAndUpdate(
      req.body.user,
      {
        responses: req.body.responses
      },
      { new: true }
    ).then(function(results) {
      res.json(results);
    });
  })
  .delete(function(req, res) {
    db.User.findByIdAndDelete(req.body.id).then(function(results) {
      res.json(results);
    });
  });

router.route('/loggedin').get(function(req, res) {
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    res.send('Not logged in');
  }
});

router.route('/login').post(passport.authenticate('local'), function(req, res) {
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    res.json({ redirect: '/login' });
  }
});

router.route('/logout').post(function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
