import axios from 'axios';

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

  getArticle: function() {
    return axios.get('/api/articles');
  },

  postArticle: function() {
    return axios.post('/api/articles');
  },
  getArchive: function() {
    return axios.get('/api/articles/archive');
  }
};
