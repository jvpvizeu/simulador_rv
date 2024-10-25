import React, { useEffect, useState } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';

const ExamDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [examDetails, setExamDetails] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/exams/${id}`)
      .then((response) => {
        setExamDetails(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar detalhes do simulado:', error);
      });
  }, [id]);

  const selectOption = (questionId, optionId) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [questionId]: optionId,
    }));
  };

  const showQuestion = (index) => {
    setCurrentQuestionIndex(index);
  };

  if (!examDetails) {
    return <div>Carregando...</div>;
  }

  const currentQuestion = examDetails.questions[currentQuestionIndex];

  return (
    <div id="main-content">
      
      {/* Botão para voltar à página principal */}
      <div className='backbtn-div'>
      <button 
        className="back-button" 
        onClick={() => navigate('/')} // Redireciona para a página principal
      >
        Voltar
      </button></div>

      {/* Título do simulado */}
      <div id="exam-name">
        <p id="exam-name"> {examDetails.name}</p>
      </div>


      {/* Navbar de questões dinâmica */}
      <div id="question-navbar">
        {examDetails.questions.map((question, index) => (
          <div
            key={question.id}
            className={`nav-item ${index === currentQuestionIndex ? 'active' : ''}`}
            onClick={() => showQuestion(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>

      {/* Título da questão */}
      <div id="question-title">
        <p id="question-text">Questão {currentQuestionIndex + 1}: {currentQuestion.content}</p>
      </div>

      {/* Opções de resposta */}
      <div id="question-options">
        {currentQuestion.options.map((option) => (
          <div key={option.id} className="option">
            <input
              type="radio"
              id={`question-${currentQuestion.id}-option-${option.id}`}
              name={`question-${currentQuestion.id}`}
              value={option.id}
              checked={selectedOptions[currentQuestion.id] === option.id}
              onChange={() => selectOption(currentQuestion.id, option.id)}
              className="radio-input" // Adicione uma classe para estilização
            />
            <label htmlFor={`question-${currentQuestion.id}-option-${option.id}`} className="radio-label">
              {option.content}
            </label>
          </div>
        ))}
      </div>

      {/* Botão para terminar o simulado */}
      <div className="finish-simulated">
        <button id="finish-button" className="finish-btn">Terminar Simulado</button>
      </div>
    </div>
  );
};

export default ExamDetails;
