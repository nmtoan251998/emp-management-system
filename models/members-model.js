const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/emp-management-system');

const membersSchema = new mongoose.Schema({
    name: String,
    dob: String,
    phone: String,
    email: String,
    facebook: String,
    city: String
}, {
    versionKey: false
});

const Member = mongoose.model('Member', membersSchema, 'members');

module.exports = Member;