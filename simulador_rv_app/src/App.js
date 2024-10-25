import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExamsList from './components/ExamsList';
import ExamDetails from './components/ExamDetails';
import { ExamProvider } from './components/ExamContext'; // Importa o Provider

const App = () => {
  return (
    <ExamProvider>
      <Router>
        <Routes>
          <Route path="/exams/:id" element={<ExamDetails />} />
          <Route path="/" element={<ExamsList />} />
        </Routes>
      </Router>
    </ExamProvider>
  );
};

export default App;
