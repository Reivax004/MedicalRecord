const mongoose = require('mongoose');
const { Schema } = mongoose;

const patientSchema = new Schema(
    {
        lastname:  { type: String, required: true },
        firstname: { type: String, required: true },
        birthdate: { type: Date },
        email:     { type: String },
        isActive:  { type: Boolean, default: true },
    },
    { versionKey: false }
);

module.exports = mongoose.model('Patient', patientSchema);
