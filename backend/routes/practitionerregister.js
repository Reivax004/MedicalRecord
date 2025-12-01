const express = require('express');
const bcrypt = require('bcrypt');
const Practitioner = require('../models/practitioners');

const router = express.Router();

// POST /api/practitioner/register
router.post('/', async (req, res) => {
    try {
        const {
            lastname,
            firstname,
            email,
            password,
            specialization,
            phone,
            establishment
        } = req.body;

        if (!lastname || !firstname || !email || !password || !specialization || !phone) {
            return res.status(400).json({ message: 'Champs obligatoires manquants' });
        }

        const existing = await Practitioner.findOne({ email });
        if (existing) {
            return res.status(400).json({ message: 'Email déjà utilisé' });
        }

        const passwordHash = await bcrypt.hash(password, 10);

        const practitioner = await Practitioner.create({
            lastname,
            firstname,
            email,
            passwordHash,
            specialization,
            phone,
            establishment
        });

        return res.status(201).json({
            message: 'Compte praticien créé',
            id: practitioner._id
        });
    } catch (err) {
        console.error('Erreur register practitioner:', err);
        return res.status(500).json({ message: 'Erreur serveur' });
    }
});

module.exports = router;
