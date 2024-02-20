const notesContent = require('../models/notesContent');

class ContentRepository{

    async create(data){
        try {
            const res = await notesContent.create(data);
            return res;
        } catch (error) {
            throw error;
        }
    }

    async get(id){
        try {
            const res = await notesContent.findById(id);
            return res; 
        } catch (error) {
            throw error;
        }
    }

    async delete(id){
        try {
            await notesContent.findOneAndDelete(id);
        } catch (error) {
            throw error;
        }
    }

    async update(id , data){
        try {
            const res = await notesContent.findByIdAndUpdate(id, data);
            return res; 
        } catch (error) {
            throw error;
        }
    }
}


module.exports = ContentRepository;
