const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  nameOfUserOne: { type: String, required: true },
  nameOfUserTwo: { type: String, required: true },
  conversationId: { type: String, required: true },
  messages: { type: Array },
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
