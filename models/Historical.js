const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const historicalSchema = new Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },
  text: { type: String, required: true },
  url: { type: String },
  comments: { type: Array }
});

const Historical = mongoose.model('Historical', historicalSchema);

module.exports = Historical;
