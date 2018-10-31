const router = require('express').Router();
const passport = require('../../passport');
const db = require('../../models');

router
  .route('/:id')
  .get((req, res) => {
    db.Message.find({ userIds: req.params.id })
      .populate('userIds')
      .exec((err, user) => {
        res.json(user);
      });
  })
  .post((req, res) => {
    db.Message.update(
      { _id: req.params.id },
      { $push: { messages: req.body.message } }
    );
  });

router.route('/').post((req, res) => {
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
                console.log(newMessage);
                res.json({ room: newMessage });
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
      console.log('err');
      res.json({ error: 'no matches' });
    }
  });
});

module.exports = router;
