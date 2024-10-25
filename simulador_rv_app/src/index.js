import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot
import './index.css'; // Estilos globais
import App from './App'; // O componente principal da sua aplicação
import reportWebVitals from './reportWebVitals'; // Opcional, para medir performance

// Obtém o elemento HTML onde a aplicação será montada
const container = document.getElementById('root');

// Cria a raiz do React
const root = createRoot(container);

// Renderiza o componente <App /> dentro da raiz do React
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Para medir desempenho na sua aplicação
reportWebVitals();