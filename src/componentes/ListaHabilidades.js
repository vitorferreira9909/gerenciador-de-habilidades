import React, { useState } from 'react';
import ModalAdicionarHabilidade from './ModalAdicionarHabilidade';

const ListaHabilidades = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const abrirModal = () => setModalIsOpen(true);
  const fecharModal = () => setModalIsOpen(false);

  const adicionarHabilidade = (novaHabilidade) => {
    const habilidadesSalvas = JSON.parse(localStorage.getItem('habilidades')) || [];
    const novasHabilidades = [...habilidadesSalvas, novaHabilidade];
    localStorage.setItem('habilidades', JSON.stringify(novasHabilidades));
    fecharModal();
  };

  return (
    <div className="App">
      <h2>Lista de Habilidades</h2>
      <button className="botao-adicionar" onClick={abrirModal}>+</button>
      <ModalAdicionarHabilidade 
        isOpen={modalIsOpen} 
        onRequestClose={fecharModal} 
        onAddHabilidade={adicionarHabilidade} 
      />
    </div>
  );
};

export default ListaHabilidades;