const router = require('express').Router();
const db = require('../../models');
const request = require('request');

router
  .route('/daily')
  .get((req, res) => {
    // db.Article.find({}).then(results => {
    //   console.log(results);
    // });
    request.get(
      {
        url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
        qs: {
          'api-key': 'b9f91d369ff59547cd47b931d8cbc56b:0:74623931',
          q: 'politics'
        }
      },
      function(err, response, body) {
        body = JSON.parse(body);
        console.log(body);
        res.json(body);
      }
    );
  })
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

module.exports = router;
