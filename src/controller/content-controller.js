const ContentService = require('../services/content-service');
const contentService = new ContentService();

const createNote = async (req,res) => {
    try {
        const response = await contentService.createNote({
            content: req.body.content, 
            user: req.user._id
        });
        return res.status(201).json({
            success : true,
            message: "Successfully craeted a note",
            data: response,
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Unable to craete note",
            data: {},
            err: error
        })
    }
}

const updateNote = async (req, res) => {
    try {
        const response = await contentService.updateNote({
            id: req.body.id, 
            data: req.body.data 
        });
        return  res.status(200).json({
            success:true,
            message:"Successfully updated a note",
            data: response,
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message : "Unable to update a note",
            data: {},
            err: error
        })
    }
}

module.exports={
    createNote,
    updateNote
}