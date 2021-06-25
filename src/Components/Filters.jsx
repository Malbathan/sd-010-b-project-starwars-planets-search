// O requisito pede pra usar o nome Filters.
import React, { useState } from 'react';
import issContent from '../Content/ISSContent';

const { Provider } = issContent; // é porque quero usar o provider e importar a informação de FILTRO pra outro lugar(quero usar na tabela).

function CriaFiltro({ children }) { // não sei se lá no APP.JS vai ser pai do GetDataPlanets ou do CriarTabela.
  const [filtro, setFiltro] = useState('');// filtro começa vazio,porque o input(e o estado) começa vazio, mas depois que digitar algo no input, o filtro( e o estado) será atualizado graças ao onChange.

  const handleChange = ({ target }) => {
    setFiltro(target.value);
  }; // essa é uma forma diferente de usar o HandleOnChange do que era antes(observar o value e o OnChange que fiz no input abaixo).

  // OBS: essa função vai ter um retorno com o Input. É diferente do que foi feito no fetchProvedor. O provider vai por cima deste input. E também boto o children logo abaixo do input.
  return ( // talvez o htmlfor precise ser NAME por causa do README.
    <Provider value={ { filtro } }>
      <label htmlFor="filtro">
        <input
          value={ setFiltro }
          onChange={ handleChange }
          type="text"
          placeholder="Digite um nome de planeta"
        />
      </label>
      { children }
    </Provider>
  );
}
CriaFiltro.propTypes = {
  children: PropTypes.shape({
    type: PropTypes.func,
  }).isRequired,
};
export default CriaFiltro;
