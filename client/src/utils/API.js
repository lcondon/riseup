import axios from 'axios';

export default {
  // Gets all books
  createUser: function(userData) {
    return axios.post('/api/users/signup', userData);
  },
  // Gets the book with the given id
  isLoggedIn: function() {
    return axios.get('/api/users/isloggedin');
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
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post('/api/books', bookData);
  }
};
