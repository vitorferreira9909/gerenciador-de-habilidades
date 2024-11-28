import React, { useState } from 'react';
import axios from '../axiosConfig';

const FormularioHabilidade = ({ onRequestClose }) => {
  const [nome, setNome] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/habilidades', { habilidade: nome, status: false })
      .then(() => {
        onRequestClose();
        window.location.reload();
      })
      .catch(error => console.error('Erro ao adicionar habilidade:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome da Habilidade:
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
      </label>
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default FormularioHabilidade;