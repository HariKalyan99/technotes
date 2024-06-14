const { getAllUsers, createNewUser, deleteUser, updateUser } = require('../controlllers/usersControllers');
const userValidationMiddleware = require('../middlewares/usersMiddlewares');
const userValidationSchema = require('../validators/usersValidators');

const userRoutes = require('express').Router();

const userValidate = userValidationMiddleware(userValidationSchema)

userRoutes.get("/read", getAllUsers);
userRoutes.post("/new", userValidate, createNewUser);
userRoutes.put("/edit/:id",  updateUser);
userRoutes.delete("/remove/:id",  deleteUser);



module.exports = userRoutes;