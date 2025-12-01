const express = require('express');
const router = express.Router();

const MedicalRecord = require('../models/general_file');
const patients = require('../models/patient');

// -----------------------------------------------------
// CREATE - POST /api/medical-records
// -----------------------------------------------------
router.post('/', async (req, res) => {
    try {
        const updatedPatient = await patients.findByIdAndUpdate(
            req.params.patientId,
            { $set: { general_file: req.body } },  // ✔ ajoute le dossier
            { new: true, upsert: false }           // ✔ ne crée pas de nouveau patient
        ).select("general_file");
        if (!updatedPatient) {
            return res.status(404).json({ error: "Patient not found" });
        }
        res.json(updatedPatient.general_file);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// -----------------------------------------------------
// READ ALL - GET /api/medical-records
// -----------------------------------------------------
router.get('/', async (req, res) => {
    try {
        const records = await MedicalRecord.find()
            //.populate('general_practitioner')
            .populate('vaccine');


        res.json(records);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// -----------------------------------------------------
// READ ONE - GET /api/medical-records/:id
// -----------------------------------------------------
router.get('/:id', async (req, res) => {
    try {
        console.log("Fetching medical record for patient ID:", req.params.id);
        const record = await patients.findById(req.params.id).select('general_file');
            //.populate('general_practitioner')

        console.log(record)
        if (!record) {
            return res.status(404).json({ error: 'Medical record not found' });
        }

        res.json(record.general_file);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// -----------------------------------------------------
// UPDATE - PUT /api/medical-records/:id
// -----------------------------------------------------
router.put('/:id', async (req, res) => {
    try {
        console.log(req.body);
        const updated = await patients.findByIdAndUpdate(
            req.params.id,
            { $set: {
                "general_file.weight": req.body.weight,
                "general_file.height": req.body.height,
                "general_file.blood_pressure": req.body.blood_pressure,
                "general_file.blood_group": req.body.blood_group,
                "general_file.allergies": req.body.allergies,
                "general_file.vaccines": req.body.vaccine   // ⭐ forcé
            }},
            { new: true, overwrite: false }
        ).select('general_file');

        if (!updated) {
            return res.status(404).json({ error: 'Medical record not found' });
        }

        res.json(updated.general_file);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// -----------------------------------------------------
// DELETE - DELETE /api/medical-records/:id
// -----------------------------------------------------
router.delete('/:id', async (req, res) => {
    try {
        const updated = await patients.findByIdAndUpdate(
            req.params.id,
            { $unset: { general_file: "" } },   // ⭐ supprime uniquement le champ général
            { new: true }
        );
        if (!updated) {
            return res.status(404).json({ error: 'Medical record not found' });
        }

        res.json({ message: 'Medical record deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
