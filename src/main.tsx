import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './App.css';


// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

// Inicializar AOS antes de renderizar
AOS.init();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/ImpulsaT">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
