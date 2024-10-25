// server.js
const cors = require('cors');
const express = require('express');
const examsController = require('./controllers/examsController');

const app = express();


// Importar a rota exams
const examsRoutes = require('./routes/exams');

app.use(cors());

// Middleware para JSON
app.use(express.json());

app.get('/', (req, res) => {
  res.redirect('/exams');
});

// Usar a rota
app.use('/exams', examsRoutes);

app.get('/exams/:id', examsController.getExamById);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});