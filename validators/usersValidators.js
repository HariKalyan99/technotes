const Joi = require('joi');

const userValidationSchema = Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.required(),
    roles: Joi.array(),
    active: Joi.boolean()
}).and('username', 'password','roles')


module.exports = userValidationSchema;