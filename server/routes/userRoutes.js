const express = require('express');
const router = express.Router();
const auth = require('../auth');
const userController = require('../controllers/userController');

router.post("/check-email", (req, res) => {
    userController.checkEmail(req.body).then(resultFromCheckEmail => res.send(resultFromCheckEmail));
});

router.post("/register", (req, res) => {
    userController.registerUser(req.body).then(resultFromRegisterUser => res.send(resultFromRegisterUser));
});

router.login("/login", (req, res) => {
    userController.loginUser(req.body).then(resultFromLoginUser => res.send(resultFromLoginUser));
});

router.get("/profile", auth.verify, (req, res) => {
    const token = auth.decode(req.headers.authorization);

    userController.getProfile(userData.id).then(resultFromGetProfile => res.send(resultFromGetProfile));
})

