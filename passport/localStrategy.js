const db = require('../models');
const LocalStrategy = require('passport-local').Strategy;

const strategy = new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  function(email, password, done) {
    db.User.findOne({ email: email }).then(function(user, err) {
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (user) {
        if (password === user.password) {
          return done(null, user);
        } else {
          return done(null, false, { msg: 'Invalid password.' });
        }
      }
    });
  }
);

module.exports = strategy;
