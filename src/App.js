import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cabecalho from './componentes/Cabecalho';
import ListaHabilidades from './componentes/ListaHabilidades';
import HabilidadesSalvas from './componentes/HabilidadesSalvas';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
      <Cabecalho />
      <Routes>
        <Route exact path="/" element={<ListaHabilidades />} />
        <Route path="/habilidades-salvas" element={<HabilidadesSalvas />} />
      </Routes>
    </div>
  </Router>
);

export default App;