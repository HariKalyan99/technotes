const User = require("../models/User");
const bcrypt = require('bcrypt');
const UserExists = require("./userExist");
const Exist = new UserExists()

class UserServices {
    encryptPassword = async(password) => {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    }

    verifyPassword = async(id, pwd) => {
        const {password} = await Exist.findById(id)
        const passwordVerify = await bcrypt.compare(pwd, password);
        return passwordVerify;
    }

    read = async() => {
        try{
            const users = await User.find();
            return users
        }catch(error){
            throw error
        }
    }

    create = async(user) => {
        const {password} = user;
        try{
            const hashedPassword = await this.encryptPassword(password);
            const newUser = new User({...user, password: hashedPassword});
            const result = await newUser.save();
            return result;
        }catch(error){
            throw error
        }
    }

    update = async(user, id) => {
        const {password} = user
        try{
            const passwordVerified = await this.verifyPassword(id, password);
            const hashedPassword = await Exist.findById(id);
            if(passwordVerified){
                const result = await User.findOneAndUpdate({_id: id}, {...user, password: hashedPassword.password}, {new: true})
                return result;
            }
        }catch(error){
            throw error
        }
    }


    remove = async(id) => {
        try{
            const result = await User.findOneAndDelete({_id: id});
            return result;
        }catch(error){
            throw error
        }
    }
}

module.exports = UserServices;