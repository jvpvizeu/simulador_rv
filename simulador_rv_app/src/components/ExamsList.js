import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ExamsList = () => {
  const [exams, setExams] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/exams')
      .then((response) => {
        setExams(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar simulados:', error);
      });
  }, []);

  return (
    <div className='main-div'>
      <h2 className='examlist-title'>Lista de Simulados</h2>
      <ul>
        {exams.length > 0 ? (
          exams.map((exam) => (
            <li key={exam.id}>
              <Link to={`/exams/${exam.id}`}>
                <button>{exam.name}</button>
              </Link>
            </li>
          ))
        ) : (
          <li>Nenhum simulado encontrado.</li>
        )}
      </ul>
    </div>
  );
};

export default ExamsList;
