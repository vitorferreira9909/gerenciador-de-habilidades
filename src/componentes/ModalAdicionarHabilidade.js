import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const ModalAdicionarHabilidade = ({ isOpen, onRequestClose, onAddHabilidade, habilidadeAtual }) => {
  const [nome, setNome] = useState('');

  useEffect(() => {
    if (habilidadeAtual) {
      setNome(habilidadeAtual.habilidade);
    } else {
      setNome('');
    }
  }, [habilidadeAtual]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const habilidade = { ...habilidadeAtual, habilidade: nome, id: habilidadeAtual ? habilidadeAtual.id : Date.now() };
    onAddHabilidade(habilidade);
    setNome('');
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} className="modal">
      <h2>{habilidadeAtual ? 'Editar Habilidade' : 'Adicionar Nova Habilidade'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nome da Habilidade:
          <input 
            type="text" 
            value={nome} 
            onChange={(e) => setNome(e.target.value)} 
            className="input-habilidade"
          />
        </label>
        <button type="submit" className="botao-submit">
          {habilidadeAtual ? 'Atualizar' : 'Adicionar'}
        </button>
      </form>
    </Modal>
  );
};

export default ModalAdicionarHabilidade;