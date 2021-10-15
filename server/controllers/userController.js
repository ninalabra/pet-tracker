const User = require('../models/user');
const auth = require('../auth');
const bcrypt = require('bcrypt');

module.exports.checkEmail = (body) => {
    return User.find({email: body.email}).then(result => {
        if(result.length > 0){
            return true;
        }else{
            return false;
        }
    })
}

module.exports.registerUser = (body) => {
    let newUser = new User({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        address: {
            steet1: body.address.street1,
            city: body.address.city,
            province: body.address.province,
        }
    })

    return newUser.save().then((user, error) => {
        if(error){
            return false;
        }else{
            return true;
        }
    })
}