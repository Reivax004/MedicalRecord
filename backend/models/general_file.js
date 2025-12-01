// backend/models/record.js
const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const { VaccineSchema } = require('./vaccine');

const GeneralPractitionerSchema = new Schema({
    practitionerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'practitioners',
        required: true,
    },
    lastname: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    }
}, { _id: false });

// sous-schéma dossier médical général (embedded)
const MedicalRecordSchema = new Schema({
    weight: {
        type: Number,
        required: false
    },
    height: {
        type: Number,
        required: false
    },
    blood_group: {
        type: String,
        required: false
    },
    blood_pressure: {
        type: String,
        required: false
    },
    /*general_practitioner: {type: GeneralPractitionerSchema, required: false},*/
    vaccines: {
        type: [VaccineSchema],
        default: []
    },
    allergies: {
        type: [String],
        default: []
    }
}, { _id: false }); // embedded, pas de _id

module.exports = { MedicalRecordSchema };
