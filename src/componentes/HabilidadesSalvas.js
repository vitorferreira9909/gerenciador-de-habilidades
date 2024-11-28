import React, { useEffect, useState } from 'react';
import ModalAdicionarHabilidade from './ModalAdicionarHabilidade';

const HabilidadesSalvas = () => {
  const [habilidades, setHabilidades] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [habilidadeAtual, setHabilidadeAtual] = useState(null);

  useEffect(() => {
    const habilidadesSalvas = JSON.parse(localStorage.getItem('habilidades')) || [];
    setHabilidades(habilidadesSalvas);
  }, []);

  const abrirModal = (habilidade) => {
    setHabilidadeAtual(habilidade);
    setModalIsOpen(true);
  };

  const fecharModal = () => {
    setHabilidadeAtual(null);
    setModalIsOpen(false);
  };

  const atualizarHabilidade = (habilidadeAtualizada) => {
    const novasHabilidades = habilidades.map(habilidade =>
      habilidade.id === habilidadeAtualizada.id ? habilidadeAtualizada : habilidade
    );
    setHabilidades(novasHabilidades);
    localStorage.setItem('habilidades', JSON.stringify(novasHabilidades));
    fecharModal();
  };

  const deletarHabilidade = (id) => {
    const novasHabilidades = habilidades.filter(habilidade => habilidade.id !== id);
    setHabilidades(novasHabilidades);
    localStorage.setItem('habilidades', JSON.stringify(novasHabilidades));
  };

  return (
    <div className="App">
      <h2>Habilidades Salvas</h2>
      <ul>
        {habilidades.map((habilidade) => (
          <li key={habilidade.id}>
            {habilidade.habilidade}
            <button className="editar" onClick={() => abrirModal(habilidade)}>Editar</button>
            <button className="deletar" onClick={() => deletarHabilidade(habilidade.id)}>Deletar</button>
          </li>
        ))}
      </ul>
      <ModalAdicionarHabilidade 
        isOpen={modalIsOpen} 
        onRequestClose={fecharModal} 
        onAddHabilidade={atualizarHabilidade} 
        habilidadeAtual={habilidadeAtual}
      />
    </div>
  );
};

export default HabilidadesSalvas;