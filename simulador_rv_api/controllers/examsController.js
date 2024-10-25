// controllers/examsController.js

// a modularização do projeto permite que esse arquivo possa ser substituído por uma lógica de integração com o banco de dados
const exams = [
    {
      id: 1,
      name: 'Simulado de Matemática',
      questions: [
        { id: 1, content: 'Quanto é 2 + 2?', options: [{ id: 1, content: '3' }, { id: 2, content: '4' }] },
        { id: 2, content: 'Quanto é 3 x 3?', options: [{ id: 1, content: '6' }, { id: 2, content: '9' }] }
      ]
    },
    {
      id: 2,
      name: 'Simulado de Física',
      questions: [
        { id: 1, content: 'Questão 1', options: [{ id: 1, content: '1' }, { id: 2, content: '2' }] },
        { id: 2, content: 'Questão 2', options: [{ id: 1, content: '3' }, { id: 2, content: '9' }] }
      ]
    },
    {
      id: 3,
      name: 'Simulado de Português',
      questions: [
        { id: 1, content: 'Questão 1', options: [{ id: 1, content: '1' }, { id: 2, content: '2' }] },
        { id: 2, content: 'Questão 2', options: [{ id: 1, content: '3' }, { id: 2, content: '9' }] }
      ]
    },
  ];
  
  exports.getAllExams = (req, res) => {
    res.json(exams);
  };
  
  exports.getExamById = (req, res) => {
    const exam = exams.find(q => q.id === parseInt(req.params.id));
    if (!exam) return res.status(404).json({ message: 'Simulado não encontrado' });
    res.json(exam);
  };
  
  exports.submitQuiz = (req, res) => {
    // Lógica para validar e salvar as respostas do usuário
    res.json({ message: 'Respostas recebidas' });
  };
  