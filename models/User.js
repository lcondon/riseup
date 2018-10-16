const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {
    type: String,
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
  },
  password: { type: String, required: true },
  responses: { type: Object }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
