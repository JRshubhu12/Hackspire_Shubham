// start the server {node client-server.js}
// in new cmd terminal using cd server


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer'); 
const path = require('path');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configure multer for file uploads
const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage });

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/ClinicDb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const patientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  mobileno: String,
  weight: Number,
  height: Number,
  condition: String,
  prescriptionNo: String, // Added prescription number field
  file: {
    data: Buffer,
    contentType: String
  }
});

const Patient = mongoose.model('Patient', patientSchema);

// Routes
app.post('/patients', upload.single('file'), async (req, res) => {
  const { name, age, gender, mobileno, weight, height, condition, prescriptionNo } = req.body; // Added prescriptionNo
  const newPatient = new Patient({
    name,
    age,
    gender,
    mobileno,
    weight,
    height,
    condition,
    prescriptionNo, // Added prescriptionNo to the newPatient object
    file: req.file ? {
      data: req.file.buffer,
      contentType: req.file.mimetype
    } : undefined
  });

  try {
    await newPatient.save();
    res.status(201).json(newPatient);
  } catch (error) {
    res.status(400).json({ message: 'Error saving patient data', error });
  }
});

app.get('/patients', async (req, res) => {
  try {
    const patients = await Patient.find();
    res.status(200).json(patients);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching patients', error });
  }
});

app.listen(5001, () => {
  console.log('Server running on port 5001');
});