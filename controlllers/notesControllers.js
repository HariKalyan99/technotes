const NoteServices = require("../services/notesValidators");
const Note = new NoteServices();

const getAllNotes = async(request, response) => {
    try{
        const result = await Note.read();
        return response.status(200).json(result);
    }catch(error){
        return response.status(400).json({message: error})
    }
}
const postNotes = async(request, response) => {
    try{
        const result = await Note.add({...request.body});
        return result;
    }catch(error){
        return response.status(400).json({message: error})
    }
}
const updateNotes = async(request, response) => {
    const {id} = request.params;
    try{
        const result = await Note.edit({...request.body}, id)
    }catch(error){
        return response.status(400).json({message: error})
    }
}
const deleteNotes = async(request, response) => {
    const {id} = request.params;
    try{
        const result = await Note.delete(id)
    }catch(error){
        return response.status(400).json({message: error})
    }
}


module.exports = {
    getAllNotes, postNotes, updateNotes, deleteNotes
}