const router = require('express').Router();
const db = require('../../models');
const request = require('request');
const moment = require('moment');

router
  .route('/')
  .get(function(req, res) {
    // res.json({ pleas: 'please' });
    console.log('maybe');
    // res.json('yea');
    // db.Article.find({}).then(results => {
    //   if (results.length > 1) {
    //     res.json(results[results.length - 1]);
    //   } else {
    request.get(
      {
        url: 'http://api.nytimes.com/svc/search/v2/articlesearch.json',
        qs: {
          'api-key': 'b9f91d369ff59547cd47b931d8cbc56b:0:74623931',
          q: 'politics'
        }
      },
      function(err, response, body) {
        if (err) {
          res.json('erro');
        } else {
          body = JSON.parse(body);
          console.log(body);
          db.Article.create({
            title: body.response.docs[0].headline.main,
            text: body.response.docs[0].snippet,
            url: body.response.docs[0].web_url,
            image: `http://nytimes.com/${
              body.response.docs[0].multimedia[17].url
            }`,
            date: moment()
          }).then(result => {
            res.json(result);
          });
        }
      }
    );
    //   }
    // });
  })
  .post(function(req, res) {})
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
