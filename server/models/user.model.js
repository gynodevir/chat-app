const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, { collection: 'user-data' });

const User = mongoose.model('UserData', userSchema);

module.exports = User;
