const mongoose = require('mongoose');

const membersSchema = new mongoose.Schema({
    name: String,
    dob: String,
    phone: String,
    email: String,
    facebook: String,
    city: String
});

let Member = mongoose.model('Member', membersSchema, 'members');

module.exports = Member;