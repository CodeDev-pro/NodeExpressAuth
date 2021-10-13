const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../utils/Constants');

const requireAuth = (request, response, next) => {
    const token = request.cookies.jwt;
    if(token){
        jwt.verify(token, JWT_SECRET, (error, decodedToken) => {
            if(error) {
                response.json({ isLogin: false })
                console.log(error)
            } else {
                console.log(decodedToken);
                next();
            }
        });
    }else {
        response.json({ isLogin: false })
    }
}

module.exports = { requireAuth }