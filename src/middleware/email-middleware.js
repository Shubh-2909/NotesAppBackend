const sendBasicEmail = require('../services/email-service');

const emailmiddleware = (req,res,next) => {
    let otp = "";
    for (let i = 0; i < 6; i++) {
        otp = otp + Math.floor(Math.random() * 10).toString();
    }
    let validOtp = parseInt(otp);

    sendBasicEmail(
        "shubhshubhanjal7@gmail.com",
        "shubhshubhanjal96@gmail.com",
        "Notes App",
        validOtp,
    );

    next();
};

module.exports = emailmiddleware;
