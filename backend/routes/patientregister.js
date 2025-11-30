
const express = require('express');
const bcrypt = require('bcrypt');
const Patient = require('../models/patient');

const router = express.Router();

// POST /api/patient/register
router.post('/', async (req, res) => {
    try {
        const {
            SSN,
            lastname,
            firstname,
            birthdate,
            address,
            sex,
            phone,
            email,
            password
        } = req.body;

        if (!SSN || !lastname || !firstname || !birthdate || !address || !sex || !phone || !email || !password) {
            return res.status(400).json({ message: 'Champs obligatoires manquants' });
        }

        const existingEmail = await Patient.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ message: 'Email déjà utilisé' });
        }

        const existingSSN = await Patient.findOne({ SSN });
        if (existingSSN) {
            return res.status(400).json({ message: 'SSN déjà utilisé' });
        }

        const passwordHash = await bcrypt.hash(password, 10);

        const patient = await Patient.create({
            SSN,
            lastname,
            firstname,
            birthdate,
            address,
            sex,
            phone,
            email,
            passwordHash,
            general_file: {} // vide au début
        });

        return res.status(201).json({
            message: 'Compte patient créé',
            id: patient._id
        });
    } catch (err) {
        console.error('Erreur register patient:', err);
        return res.status(500).json({ message: 'Erreur serveur' });
    }
});

module.exports = router;
