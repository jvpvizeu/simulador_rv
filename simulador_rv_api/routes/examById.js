// routes/examById.js
const express = require('express');
const router = express.Router();
const { getExamById } = require('../controllers/examsController'); // Certifique-se de que o caminho está correto

// Defina a rota
router.get('/', getExamById);  // Aqui, getAllExams deve ser uma função

module.exports = router;