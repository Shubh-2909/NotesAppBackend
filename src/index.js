const express = require('express');
const app = express();
const {PORT} = require('./config/server-config')
const connect = require('./config/database-config')
const User = require('./models/user')
const notesContent = require('./models/notesContent');

app.listen(PORT , async ()=> {
    console.log(`Server running on PORT : ${PORT}`);
    await connect();
    console.log("Mongo DB connected");
    // await User.create({
    //     username : 'Shubh',
    //     email : 'shubh.com'
    // });
    // await notesContent.create({
    //     content : 'This is the first note  , Created by me',
    //     user : '65d4b35c1e42b0c5259b0f4a'
    // })
    
})
