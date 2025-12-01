const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const AppointmentSchema = new Schema({
    patientId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'patients',
        required: true,
        index: true
    },

    practitionerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'practitioners',
        required: true
    },

    name: {
        type: String,
        required: true },

    date: {
        type: Date,
        required: true,
        default: null,
        },

    type: {
        type: String,
        require: true },

    description: {
        type: String,
        required: false }

});

module.exports = mongoose.model('appointments', AppointmentSchema);