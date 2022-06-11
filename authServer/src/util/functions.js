
var jwt = require('jsonwebtoken')

const generateJwt = (req) => {
    // TODO: for fun, convert this to a Promises-based function
    return jwt.sign({ _id: req.user._id, username: req.user.username }, process.env.JWT_TOKEN_SECRET)

}

module.exports = {
    generateJwt
}