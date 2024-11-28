import React from 'react';
import { Link } from 'react-router-dom';

const Cabecalho = () => (
  <header className="App-header">
    <h1>Gestor de Habilidades</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/habilidades-salvas">Habilidades Salvas</Link>
    </nav>
  </header>
);

export default Cabecalho;