//es el punto de entrada de una aplicación React que utiliza React Router para el enrutamiento. Define cómo se renderiza la aplicación en el DOM y configura el enrutamiento para la aplicación.

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  </React.StrictMode>
);