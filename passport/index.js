const passport = require('passport');
const strategy = require('./localStrategy');
const db = require('../models');

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  db.User.findById(id)
    .then(function(user) {
      done(null, user);
    })
    .catch(done);
});

passport.use('local', strategy);

module.exports = passport;
