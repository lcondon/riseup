import axios from 'axios';

export default {
  // Creates a new user
  createUser: function(userData) {
    return axios.post('/api/users', userData);
  },
  // Checks if a user is logged in
  getUser: function() {
    return axios.get('/api/users/loggedin');
  },
  // Updates responses
  updateUser: function(id, responses) {
    return axios.put('/api/users', {
      user: id,
      responses: responses
    });
  },
//Logs the user in 
  logInUser: function(email, password) {
    return axios.post('/api/users/login', {
      email: email,
      password: password
    });
  },
//Deletes a user
  deleteUser: function(id) {
    return axios.delete('/api/users', { data: { id: id } });
  },
//Find user
findUser: function(number, data){
  return axios.get('/api/users/match', {
    number: data
  });
},
//Gets article of the day 
  getArticle: function() {
    return axios.get('/api/articles');
  },
//Gets all articles 
  postArticle: function() {
    return axios.post('/api/articles');
  },
  //Gets all past articles 
  getArchive: function() {
    return axios.get('/api/articles/archive');
  }
};
