const Pet = require('../models/pet');
const auth = require('../auth');
const { uploadFile } = require('../s3');

module.exports.addPet = async (body, file) => {
   const result = await uploadFile(file);

   const newPetDescription = new Pet({
       name: body.name,
       species: body.species,
       breed: body.breed,
       dateOfBirth: body.dateOfBirth,
       color: body.color       
   });

   return newPetDescription.save().then((pet, error) => {
       if(error){
           return false;
       }else{
           return result;
       }
   })  
}

module.exports.getSpecificPetDescription = (params) => {
    return Pet.find({_id: params.petId}).then(result => {
        return result;
    })
}

