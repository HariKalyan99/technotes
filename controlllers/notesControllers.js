const NoteServices = require("../services/notesServices");

const Note = new NoteServices();

const getAllNotes = async(request, response) => {
    try{
        const result = await Note.read();
        return response.status(200).json(result?.length > 0 ? result : {message: "No Notes found"});
    }catch(error){
        return response.status(400).json({message: error})
    }
}
const postNotes = async(request, response) => {
    try{
        const result = await Note.add({...request.body});
        return response.status(200).json(result);
    }catch(error){
        return response.status(400).json({message: error})
    }
}
const updateNotes = async(request, response) => {
    const {id} = request.params;
    try{
        const result = await Note.edit({...request.body}, id)
        return  response.status(200).json(result);
    }catch(error){
        return response.status(400).json({message: error})
    }
}
const deleteNotes = async(request, response) => {
    const {id} = request.params;
    try{
        const result = await Note.delete(id)
        return  response.status(200).json(result);
    }catch(error){
        return response.status(400).json({message: error})
    }
}


module.exports = {
    getAllNotes, postNotes, updateNotes, deleteNotes
}