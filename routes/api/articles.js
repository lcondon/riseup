const router = require('express').Router();
const db = require('../../models');
const request = require('request');
const moment = require('moment');

router
  .route('/')
  .get(function(req, res) {
    db.Article.find({})
      .then(results => {
        if (
          results.length > 0 &&
          moment().diff(results[results.length - 1].date, 'days') < 7
        ) {
          res.json(results[results.length - 1]);
        } else {
          res.json({ error: 'not found' });
        }
      })
      .catch(error => res.json({ error: 'not found' }));
  })
  .post(function(req, res) {
    request.get(
      {
        url: 'http://api.nytimes.com/svc/search/v2/articlesearch.json',
        qs: {
          'api-key': 'b9f91d369ff59547cd47b931d8cbc56b:0:74623931',
          q: 'politics',
          sort: 'newest'
        }
      },
      function(err, response, body) {
        if (err) {
          res.json('error');
        } else {
          body = JSON.parse(body);
          console.log(JSON.stringify(body.response.docs[0], null, 2));
          db.Article.create({
            title: body.response.docs[0].headline.main,
            text: body.response.docs[0].snippet,
            url: body.response.docs[0].web_url,
            image: body.response.docs[0].multimedia[17]
              ? `https://nytimes.com/${
                  body.response.docs[0].multimedia[17].url
                }`
              : null,
            date: moment().format()
          }).then(result => {
            res.json(result);
          });
        }
      }
    );
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

router.route('/archive').get(function(req, res) {
  db.Article.find({}).then(function(results) {
    res.json(results);
  });
});

router.route('/historical').get((req, res) => {
  console.log(moment().date());
  console.log(moment().month());
  db.Historical.find({ day: moment().date(), month: moment().month() }).then(
    result => {
      console.log(result);
      res.json(result);
    }
  );
});

module.exports = router;
