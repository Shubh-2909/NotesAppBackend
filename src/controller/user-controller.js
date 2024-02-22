const UserService = require('../services/user-service');
const userService = new UserService();

const signin = async (req, res) => {
    try {
        const response = await userService.signin({
            username: req.body.username,
            email: req.body.email,
            incomingOtp: req.body.incomingOtp
        });
        return res.status(201).json({
            success: true,
            message: "Successfully created a user",
            data: response,
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Unable to create a user",
            data: {},
            err: error
        })
    }
}


const verifyOtp = async (req, res) => {
    try {
        const response = await userService.verifyOtp({
            otp:req.body.otp,
            email:req.body.email
        })
        return res.status(201).json({
            success: true,
            message: "Successfully verified the user",
            data: response,
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Unable to create a user",
            data: {},
            err: error
        })
    }
}
module.exports = { signin , verifyOtp}