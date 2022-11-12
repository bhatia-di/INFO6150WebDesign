const uuidv4 = require('uuidv4');

const mongoose = require('mongoose');

module.exports = mongoose.model('UserAccount', {
    _id: { type: String, default: () => uuidv4.uuid() },
    email : {type:  String, default: ''},
    full_name : {type:  String, default: ''},
    password : {type: String, default: ''},
    versionKey: false
});
