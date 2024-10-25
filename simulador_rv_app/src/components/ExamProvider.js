import React, { createContext, useContext, useState } from 'react';

// Criação do contexto
const ExamContext = createContext();

// Componente Provider
export const ExamProvider = ({ children }) => {
  const [examData, setExamData] = useState([]);

  // Você pode adicionar funções aqui para manipular o estado dos exames, se necessário

  return (
    <ExamContext.Provider value={{ examData, setExamData }}>
      {children}
    </ExamContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useExamContext = () => {
  return useContext(ExamContext);
};