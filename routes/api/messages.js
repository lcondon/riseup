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

module.exports = router;
