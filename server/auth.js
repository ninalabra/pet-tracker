const jwt = require('jsonwebtoken');
const secretKey = "petTrackerAPI";

module.exports.createAccessToken = (user) => {
    const data = {
        id: user._id,
        username: user.username,
        isAdmin: user.isAdmin
    };

    return jwt.sign(data, secretKey, {});
}

module.exports.verify = (req, res, next) => {
    let token = req.headers.authorization

    if(typeof token !== "undefined"){
        return jwt.verify(token, secretKey, (err, data) => {
            if(err){
                return res.send({
                    auth: "failed"
                })
            }else{
                next();
            }
        })
    }else{
        return res.send({
            auth: "failed"
        });
    }
}

module.exports.decode = (token) => {
    if(typeof token !== "undefined"){
        token = token.slice(7, token.length);

        return jwt.verify(token, secretKey, (err, data) => {
            if(err){
                return null;
            }else{
                return jwt.decode(token, {
                    complete: true
                }).payload;
            }
        })
    }
}