// const User = require('../models/User');
// const Note = require('../models/Note');
const UserExists = require('../services/userExist');
const Exists = new UserExists()
const UserServices = require('../services/usersService');
const User = new UserServices();


const getAllUsers = async(request, response) => {

    try{
        const users = await User.read();
        if(!users?.length){
            return response.status(400).json({message: 'No users found'})
        }
        return response.status(200).json(users);
    }catch(error){
        return response.json({message: error.message})
    }
}


const createNewUser = async(request, response) => {
    try{
        const {username} = request.body;
        const userExist = await Exists.findByUsername(username)
        if(!userExist){
            const result = await User.create({...request.body});
            return response.status(201).json({message: `New user ${result.username} created`})
        }else{
            return response.status(400).json({message: "Username already exists"})
        }
    }catch(error){
        return response.json({message: error.message})
    }
}


const updateUser = async(request, response) => {
    const {id} = request.params;
    try{
        const findUserExist = await Exists.findById(id);
        if(!findUserExist){
            return response.json({message: `User not found`})
        }else{
            const result = await User.update({...request.body}, id);
            return response.json(result)
        }
        
    }catch(error){
        return response.json({message: error.message})
    }
}



const deleteUser = async(request, response) => {
    const {id} = request.params;
    try{
        const findUserExist = await Exists.findById(id);
        if(!findUserExist){
            return response.json({message: `User not found`})
        }else{
            const result = await User.remove(id);
            return response.json(result)
        }
    }catch(error){
        return response.json({message: error.message})
    }
}
module.exports = {
    getAllUsers, createNewUser, updateUser, deleteUser
}