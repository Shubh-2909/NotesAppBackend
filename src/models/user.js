const mongoose = require('mongoose');

const userScema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required: true
    },
    otp:{
        type:String
    }
}, {timestamps:true});

const User = mongoose.model('User' , userScema);
module.exports = User;