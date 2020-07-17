const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  insertdate:{type:String},
});

module.exports = mongoose.model('User', postSchema);
