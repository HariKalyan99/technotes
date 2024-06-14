const NoteModel = require("../models/Note")

class NoteServices {
    read = async() => {
        try{
            const result = await NoteModel.find();
            return result;
        }catch(error){
            throw error
        }
    }
    add = async(note) => {
        try{
            const note = new NoteModel({...note});
            const result = await note.save();
            return result;
        }catch(error){
            throw error
        }
    }
    edit = async(note, id) => {
        try{
            const result = await NoteModel.findOneAndUpdate({_id: id}, {...note}, {new: true});
            return result;
        }catch(error){
            throw error
        }
    }
    delete = async(id) => {
        try{
            const result = await NoteModel.findOneAndDelete({_id: id});
            return result;
        }catch(error){
            throw error
        }
    }
}

module.exports = NoteServices;