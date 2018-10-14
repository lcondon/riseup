const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  userIds: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  messages: { type: Array }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
