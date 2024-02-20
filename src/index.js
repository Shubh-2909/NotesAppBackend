const express = require('express');
const app = express();
const {PORT} = require('./config/server-config')
const connect = require('./config/database-config')
const {UserRepository , ContentRepository} = require('./repository/index')

app.listen(PORT , async ()=> {
    console.log(`Server running on PORT : ${PORT}`);
    await connect();
    console.log("Mongo DB connected");
    const userRepository = new UserRepository();
    const contentRepository = new ContentRepository();
})
