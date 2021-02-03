var jwt = require('jsonwebtoken');
const accessTokenSecret = 'eabmodel-cet';

module.exports.sign = (user, password) => {
    var payload = {
        user: user,
        password: password
    }

    return jwt.sign(payload, accessTokenSecret);
}