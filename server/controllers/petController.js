var mongoose = require('mongoose');
var Pet = mongoose.model('Pets');

module.exports = function () {
    require('../models/pet.js');
    return {
        index: function (req, res) {
            Pet.find({}, function (err, pets) {
                if (err) {
                    console.log(err);
                }
                res.json({ message: "Here's all the pets", pets: pets });
            });
            console.log("Pets pets pets pets pets pets pets");
        },
        pet: function (req, res) {
            let id = req.params.id;
            Pet.findOne({ _id: id }, function (err, pet) {
                if (err) {
                    console.log('Something is Wrong');
                    res.json({ status: "errors", errors: err });
                } else {
                    console.log('Found the pet');
                    
                    res.json(pet);
                }
            });
        },
        createPet: function (req, res) {
            let newPet = new Pet(req.body)
            console.log("This is new Pet in Controller.")
            console.log(newPet)
            newPet.save(function (err) {
                if (err) {
                    console.log('Something went wrong');
                    res.json({ status: "errors", errors: err });
                } else {
                    console.log('Successfully saved pet');
                    res.json({ message: "Success" });
                }
            });
            console.log('Saving pet');
        },
        updatePet: function (req, res) {
            let petId = req.params.id;

            Pet.findByIdAndUpdate(petId, req.body, { runValidators: false }, function (err) {
                if (err) {
                    console.log('Something went Wrong');
                    res.json({ status: "errors", errors: err })
                } else {
                    console.log('Successfully edited a pet!');
                    res.json({ message: 'Successfully edited a pet!' });
                }
            });
        },
        deletePet: function (req, res) {
            let petId = req.params.id;
            Pet.deleteOne({ _id: petId }, function (err) {
                if (err) {
                    console.log("Error's in Deleting a pet");
                    res.json({ error: err });
                } else {
                    console.log("Successfuly Deleted");
                    res.json({ message: "Successfully Deleted a pet" });
                }
            });
        }
    }
}