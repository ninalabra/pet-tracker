const express = require('express');
const router = express.Router();
const auth = require('../auth');
const petController = require('../controllers/petController');
const multer = require('multer');

const fileStorageEngine = multer.memoryStorage({
    destination: (req, file, cb) => {
        cb(null, '')
    }, 
    filename: (req, file, cb) => {
        cb(null, Date.now() + -- + file.originalname)
    }
})

router.post("/", [auth.verify], (req, res) => {
    let token = auth.decode(req.headers.authorization)

    petController.addPet(req.body, req.file).then(resultFromAddPet => res.send(resultFromAddPet));
})

router.get("/all-pets", auth.verify, (req, res) => {
    petController.getAllPets().then(resultFromGetAllPets => res.send(resultFromGetAllPets));
})