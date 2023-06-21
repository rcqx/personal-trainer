const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema({
  name: {
    require: true,
    type: String,
  },
  age: {
    required: true,
    type: Number,
  },
});

module.exports = mongoose.model('Data', dataSchema);
