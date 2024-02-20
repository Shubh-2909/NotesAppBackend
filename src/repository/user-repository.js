const User = require('../models/user');

class UserRepository{
    async create(data){
        try {
            const res = await User.create(data);
            return res;
        } catch (error) {
            throw error;
        }
    }

    async get(id){
        try {
            const res = await User.findById(id);
            return res;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserRepository;