const User = require("../models/User")

class UserExists {
    findById = async(id) => {
        try{
            const user = await User.findOne({_id: id});
            return user;
        }catch(error){
            return false 
        }
    }

    findByUsername = async(username) => {
        try{    
            const user = await User.findOne({username});
            return user;
        }catch(error){
            throw error;
        }
    }
}

module.exports = UserExists;