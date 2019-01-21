require("../config/mongoose");
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");



    const PetSchema = new mongoose.Schema({
        name: { type: String, required: [true, "Pet needs a name"], minlength: [3, "Pet's Name must be at least 3 characters."], unique: true },
        type: { type: String, required: [true, "Pet needs a type"], minlength: [3, "Pet type must be at least 3 characters"] },
        description: { type: String, required: [true, "All pet's must have a description"], minlength: [3, "A Description must be more then three characters."] },
        skill1: { type: String },
        skill2: { type: String },
        skill3: { type: String },
        likes: { type: Number, default: 0 }
    }, { timestamps: true, strict: false });

    PetSchema.plugin(uniqueValidator, { message: 'All of our pets here have unique names! Please Try a new Name.' });
    mongoose.model('Pets', PetSchema);








