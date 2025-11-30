const mongoose = require('mongoose');

const establishmentSchema = new mongoose.Schema({
    name: String,
    address: {
        number: Number,
        street: String,
        postal_code: Number,
        city: String,
        country: String
    },
    type: String,
    description: String,
    phone: String,
    email: String,
    creation_date: Date,
    number_employees: Number
}, { _id: false });

const practitionerSchema = new mongoose.Schema({
    lastname: { type: String, required: true },
    firstname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    specialization: { type: String, required: true },
    phone: { type: String, required: true },
    establishment: establishmentSchema         // snapshot comme dans la doc
});

module.exports = mongoose.model('Practitioner', practitionerSchema);
