// O requisito 2 eu tive a enorme ajuda do meu colega Fernando Maia. Link do PR dele: https://github.com/tryber/sd-010-b-project-starwars-planets-search/pull/27/commits/e88e84e581b359026b68a18da7cf098e66207987

import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const contextoDoFiltro = createContext();// Não usa o ISSContent de novo. Aí usa esse novo createContext e import aqui em cima e lá em baixo coloca contextoDoFiltro.Provider.

function CriaFiltro({ children }) {
  const filterByName = { // criei esse filterByName e coloquei uma chave nele. O README pede esse objeto com o nome de filterByName.Esse vai estar dentro do filters
    filterByName: '',
  };

  // o README me pede pra usar o nome filters.
  const [filters, setFiltro] = useState(filterByName);// Diferente do que fiz no fetchProvedor, aqui não começa um useState([]). Aqui coloco o filterByName nos (). Ao usar esse useState, o primeiro nome(aqui é filters) já é naturalmente  um objeto. O que eu coloco dentro do () ao lado de useState vai ser o VALOR PADRÃO DENTRO desse objeto. Por isso que eu usar useState(filterByName) IMPLICA EM DIZER QUE filterByName está DENTRO de filters.

  const handleChange = ({ target }) => {
    setFiltro({ ...filters, filterByName: target.value });
  }; // o que eu quero mesmo aqui é atualizar esse filterByName(começou vazio). Enquanto vou digitando no input, eu vou atualizando esse filterByName.

  // pro req 2 não precisa do spread no filters, mas é pra evitar que, caso precise criar novas chaves dentro desse filters, aí o spread evita que novas informações sobreponham as informações antigas. E os próximos requisitos vão pedir novas chaves sim.

  // OBS: essa função vai ter um retorno com o Input. É DIFERENTE do que foi feito no fetchProvedor. O provider vai por cima deste input. E também boto o children logo abaixo do input.
  return ( // vou pegar as informações deste filters e levar pro Table por meio do provider. Acho que não tem necessidade de colocar um : filterByName. Lá no table eu faço isso.
    <contextoDoFiltro.Provider value={ { filters } }>
      <label htmlFor="filtro">
        <input
          id="filtro"
          onChange={ handleChange }
          type="text"
          data-testid="name-filter"
          placeholder="Digite um nome de planeta"
        />
      </label>
      { children }
    </contextoDoFiltro.Provider>
  );
}
CriaFiltro.propTypes = {
  children: PropTypes.shape({
    type: PropTypes.func,
  }).isRequired,
};
export default CriaFiltro;
