// routes/exams.js
const express = require('express');
const router = express.Router();
const { getAllExams } = require('../controllers/examsController'); // Certifique-se de que o caminho está correto

// Defina a rota
router.get('/', getAllExams);  // Aqui, getAllExams deve ser uma função

module.exports = router;