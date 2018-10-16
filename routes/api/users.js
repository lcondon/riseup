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

router.route('/match').post(function(req, res) {
  // console.log(req.user);
  db.User.find({}).then(results => {
    let matches = results.filter(
      user =>
        user.responses[req.body.number] !==
        req.body.user.responses[req.body.number]
    );
    //
    if (matches.length > 0) {
      let i = 0;
      const createMatch = () => {
        let index = Math.floor(Math.random() * matches.length);
        db.Message.findOne({
          userIds: { $all: [req.body.user._id, matches[i]._id] }
        })
          .then(result => {
            if (!result) {
              db.Message.create({
                userIds: [req.body.user._id, matches[i]._id],
                messages: [
                  {
                    user: 'riseUP',
                    message: `${req.body.user.firstName} and ${
                      matches[i].firstName
                    }, we thought you two should meet to discuss your views on ${
                      req.body.topic
                    }!`
                  }
                ]
              }).then(newMessage => {
                res.json({ room: newMessage._id });
              });
            } else if (result && i < matches.length - 1) {
              i++;
              createMatch();
            } else {
              res.json({ err: 'no match' });
            }
          })
          .catch(err => {
            console.log('err' + err);
          });
      };
      createMatch();
    } else {
      res.json({ error: 'no matches' });
    }
  });
});

module.exports = router;
