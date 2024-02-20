const {ContentRepository} = require('../repository/index');

class ContentService{
    constructor(){
        this.contentRepository = new ContentRepository();
    }

    async createNote(data){
        try {
            const res = await  this.contentRepository.create(data);
            return res; 
        } catch (error) {
            throw error;
        }
    }

    async updateNote(id , data){
        try {
            const res = await  this.contentRepository.update(id , data);
            return res; 
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ContentService;