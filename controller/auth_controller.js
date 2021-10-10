const jwt = require('jsonwebtoken');

const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: "", password: "" }

    //incorrect email
    if(err.message === 'incorrect email'){
        errors.email = "The Email is not registered"
    }
}

module.exports.signup_get = (request, response) => {
    response.send("Hello")
}

module.exports.signup_post = (request, response) => {
    
}

module.exports.login_get = (request, response) => {
    
}

module.exports.login_post = (request, response) => {
    
}
