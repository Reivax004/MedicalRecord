const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const Patient = require('./models/Patient');

// Connexion MongoDB
mongoose.connect('mongodb://localhost:27017/MedicalRecord')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: 'http://localhost:4200',
    methods: 'GET,POST,PUT,PATCH,DELETE',
    allowedHeaders: 'Content-Type, X-Requested-With',
    credentials: true
}));

// ---------- ROUTES PATIENTS ----------

// CREATE - POST /api/patients
app.post('/api/patients', async (req, res) => {
    try {
        const patient = new Patient(req.body);
        const saved = await patient.save();
        res.json(saved);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// READ ALL - GET /api/patients
app.get('/api/patients', async (req, res) => {
    try {
        const patients = await Patient.find();
        res.json(patients);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// READ ONE - GET /api/patients/:id
app.get('/api/patients/:id', async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        if (!patient) {
            return res.status(404).json({ error: 'Patient not found' });
        }
        res.json(patient);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// UPDATE - PUT /api/patients/:id
app.put('/api/patients/:id', async (req, res) => {
    try {
        const updated = await Patient.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updated) {
            return res.status(404).json({ error: 'Patient not found' });
        }
        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE - DELETE /api/patients/:id
app.delete('/api/patients/:id', async (req, res) => {
    try {
        const deleted = await Patient.findByIdAndDelete(req.params.id);
        if (!deleted) {
            return res.status(404).json({ error: 'Patient not found' });
        }
        res.json({ message: 'Patient deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Lancement serveur
app.listen(3000, () => console.log('API running on http://localhost:3000'));
