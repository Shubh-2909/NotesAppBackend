const express = require('express');
const app = express();
const { PORT } = require('./config/server-config')
const connect = require('./config/database-config')
const { UserRepository, ContentRepository } = require('./repository/index')
const { createNote, updateNote } = require('./controller/content-controller');
const { signin , verifyOtp } = require('./controller/user-controller')
const emailmiddleware = require('./middleware/email-middleware')
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(PORT, async () => {
    console.log(`Server running on PORT : ${PORT}`);
    await connect();
    console.log("Mongo DB connected");
})


app.post('/signin',signin);
app.post('/signin/verify',verifyOtp);
app.post('/createnote', createNote);
app.post('/updatenote', updateNote);

