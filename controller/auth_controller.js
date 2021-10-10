const jwt = require('jsonwebtoken');
const User = require('../data/models/User');

const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: "", password: "" }

    //incorrect email
    if(err.message === 'incorrect email'){
        errors.email = "The Email is not registered"
    }
}

module.exports.signup_get = async (request, response) => {
    response.send("Hello")
}

module.exports.signup_post = async (request, response) => {
    const { email, password } = request.body;

    try {
        const user = await User.create({ email, password });
        response.status(201).json(user);
    } catch (error) {
        
    }
}

module.exports.login_get = async (request, response) => {
    
}

module.exports.login_post = async (request, response) => {
    
}
