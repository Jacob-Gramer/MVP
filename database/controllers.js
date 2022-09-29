const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  platform: String,
});

const User = mongoose.model('User', userSchema);

const save = (info) => (
  User.create(info)
    .then(() => console.log('success'))
    .catch((err) => console.error(err))
);

const get = (name) => User.find({ username: name });

module.exports.save = save;
module.exports.get = get;
module.exports.User = User;
