const express = require('express');
const router = express.Router();
const auth = require('../auth');
const petController = require('../controllers/petController');
const multer = require('multer');
const upload = multer({
    dest: 'uploads/'
})

router.post("/", upload.single('image'), async (req, res) => {
    let token = auth.decode(req.headers.authorization)

    petController.addPet(req.body, req.file).then(resultFromAddPet => res.send(resultFromAddPet));

})

router.get("/:petId", (req, res) => {
    petController.getSpecificPetDesciption(req.params).then(resultFromGetAllPets => res.send(resultFromGetAllPets));
})


module.exports = router;
