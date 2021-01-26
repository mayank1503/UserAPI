
const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    aadhar:String,
    pan:String,
    bankAccountNumber:String,
    attendance:[{
        date:{
             type:Date,
             default:Date.now,
         },
         entry:{type:Date},
    }]
});

module.exports = mongoose.model('User', UserSchema);