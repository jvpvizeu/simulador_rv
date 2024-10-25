import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

// Criação do contexto
const ExamContext = createContext();

// Componente Provider
export const ExamProvider = ({ children }) => {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    // Função para buscar os exames
    const fetchExams = async () => {
      try {
        const response = await axios.get('http://localhost:5000/exams');
        setExams(response.data);
      } catch (error) {
        console.error('Erro ao buscar simulados:', error);
      }
    };

    fetchExams();
  }, []);

  return (
    <ExamContext.Provider value={{ exams }}>
      {children}
    </ExamContext.Provider>
  );
};

// Hook para usar o contexto
export const useExams = () => {
  const context = useContext(ExamContext);
  if (!context) {
    throw new Error('useExams deve ser usado dentro de um ExamProvider');
  }
  return context;
};
