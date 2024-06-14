const userValidationMiddleware = (schema) => (request, response, next) => {

    const {error} = schema.validate({...request.body});

    if(error){
        return response.status(400).json({message: error.message})
    }

    next();
}

module.exports = userValidationMiddleware;