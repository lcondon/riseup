import axios from 'axios';
import request from 'request';
import moment from 'moment';

export default {
  // Gets all books
  createUser: function(userData) {
    return axios.post('/api/users', userData);
  },
  // Gets the book with the given id
  getUser: function() {
    return axios.get('/api/users/loggedin');
  },
  // Deletes the book with the given id
  updateUser: function(id, responses) {
    return axios.put('/api/users', {
      user: id,
      responses: responses
    });
  },

  logInUser: function(email, password) {
    return axios.post('/api/users/login', {
      email: email,
      password: password
    });
  },

  deleteUser: function(id) {
    return axios.delete('/api/users', { data: { id: id } });
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post('/api/books', bookData);
  },

  getArticle: function(cb) {
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
        let article = {
          title: body.response.docs[0].headline.main,
          snippet: body.response.docs[0].snippet,
          url: body.response.docs[0].web_url,
          image: `http://nytimes.com/${
            body.response.docs[0].multimedia[17].url
          }`,
          posted: moment()
        };
        cb(article);
      }
    );
  }
};
