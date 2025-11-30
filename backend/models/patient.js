const mongoose = require('mongoose');
const {MedicalRecordSchema} = require("./record");

const addressSchema = new mongoose.Schema({
    number: Number,
    street: String,
    postal_code: Number,
    city: String,
    country: String
}, { _id: false });

const patientSchema = new mongoose.Schema({
    SSN: { type: String, required: true, unique: true },
    lastname: { type: String, required: true },
    firstname: { type: String, required: true },
    birthdate: { type: Date, required: true },
    address: { type: addressSchema, required: true },
    sex: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    general_file: { type: MedicalRecordSchema, default: {} }
});

module.exports = mongoose.model('Patient', patientSchema);
