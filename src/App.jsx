// src/App.jsx
import React from 'react';
import './App.css'; // Importa el archivo de estilos

function App() {
  return (
    <div className="app">
      {/* Fondo de la aplicación */}
      <div className="background-image"></div>

      {/* Contenido principal centrado */}
      <div className="content">
        <h1>APRENDE MÁS</h1>
        <button>VER DETALLES</button>
        <button>VER VIDEO</button>
      </div>
    </div>
  );
}

export default App;
