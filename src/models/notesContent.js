const mongoose = require('mongoose');

const contentScema = new  mongoose.Schema({
    content:{
        type:String,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required:true
    }
}, {timestamps:true})

const notesContent = mongoose.model('notesContent' , contentScema);
module.exports = notesContent;