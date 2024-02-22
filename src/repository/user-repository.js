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
            const res = await User.find(id);
            return res;
        } catch (error) {
            throw error;
        }
    }

    async delete(id){
        try {
            await User.findByIdAndDelete(id);
        } catch (error) {
            throw error;
        }
    }

    async update(userid, data){
        try {
            const response = await  User.findByIdAndUpdate( userid,data); 
            return response;
        } catch (error) {
           throw error; 
        }
    }
}

module.exports = UserRepository;