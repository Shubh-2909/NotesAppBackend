const { UserRepository } = require('../repository/index');
const sendBasicEmail = require('./email-service')
class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async signin(data) {
        try {
            let otp = "";
            for (let i = 0; i < 6; i++) {
                otp = otp + Math.floor(Math.random() * 10).toString();
            }

            const user = await this.userRepository.create(data);
            await this.userRepository.update({
                _id: user._id

            }, { otp: otp });
            sendBasicEmail(
                "shubhshubhanjal7@gmail.com",
                "shubhshubhanjal96@gmail.com",
                "Otp Verification for Notes App",
                otp,
            )
            return user;

        } catch (error) {
            throw error;
        }
    }

    async verifyOtp(data) {
        let incomingOtp = data.otp;
        const user = await this.userRepository.get({
            email: data.email
        });
        let otpp = user[0].otp;
        let empty = ""

        if (incomingOtp != otpp) {
            await this.userRepository.delete({
                _id: user[0]._id

            });
        }
        else {
            await this.userRepository.update({
                _id: user[0]._id

            }, { otp: empty });
            sendBasicEmail(
                "shubhshubhanjal7@gmail.com",
                data.email,
                "Notes App",
                "Successfully created  account!"
            )
        }
    }
}




module.exports = UserService;