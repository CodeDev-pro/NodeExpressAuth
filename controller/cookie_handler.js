const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/Constants');

module.exports.createToken = (_id, maxAge) => {
    return jwt.sign({ _id }, JWT_SECRET, { 
        expiresIn: maxAge
    });
}

