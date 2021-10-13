const jwt = require('jsonwebtoken');
const User = require('../data/models/User');
const { createToken } = require('./cookie_handler');
const { handleErrors } = require('./error_handler');

const maxAge = 3 * 24 * 60 * 60;

module.exports.signup_get = async (request, response) => {
    response.send("Hello")
}

module.exports.signup_post = async (request, response) => {
    const { email, password } = request.body;

    try {
        const user = await User.create({ email, password });
        const token = createToken(user._id, maxAge);
        response.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
        response.status(201).json({ user: user._id });
    } catch (error) {
        console.log(error);
        const errors = handleErrors(error);
        response.status(400).json(errors);
    }
}

module.exports.login_get = async (request, response) => {
    
}

module.exports.login_post = async (request, response) => {
    const { email, password } = request.body;

    try {
        const user = await User.login(email, password);
        const token = createToken(user._id, maxAge);
        response.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
        response.status(201).json({ user: user._id });
    } catch (error) {
        console.log(error);
        const errors = handleErrors(error);
        response.status(400).json(errors);
    }
}
