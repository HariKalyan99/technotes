const Joi = require('joi');

const validationNotes = Joi.object().keys({
    user: Joi.string().required(),
    title: Joi.string().required(),
    text: Joi.string().required(),
    completed: Joi.boolean().default(false),
}).and('user', 'title', 'text')

module.exports = validationNotes;