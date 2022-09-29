const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost:27017/users');

db
  .then(() => console.log('connected to database'))
  .catch((err) => console.error(err));

module.exports = db;
