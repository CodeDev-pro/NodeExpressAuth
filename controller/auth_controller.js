const jwt = require('jsonwebtoken');
const User = require('../data/models/User');
const { handleErrors } = require('./error_handler');

module.exports.signup_get = async (request, response) => {
    response.send("Hello")
}

module.exports.signup_post = async (request, response) => {
    const { email, password } = request.body;

    try {
        const user = await User.create({ email, password });
        response.status(201).json(user);
    } catch (error) {
        console.log(error);
        const errors = handleErrors(error);
        response.status(400).json(errors);
    }
}

module.exports.login_get = async (request, response) => {
    
}

module.exports.login_post = async (request, response) => {
    
}
