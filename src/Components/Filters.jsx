// Pro requisito 3 eu mudei MUITA COISA com a ajuda do meu colega Fernando Maia
// O requisito 2 e o requisito 3 eu tive a ENORME ajuda Fernando Maia. Link do PR dele: https://github.com/tryber/sd-010-b-project-starwars-planets-search/pull/27/commits/e88e84e581b359026b68a18da7cf098e66207987

import React, { useState, useContext } from 'react';
import issContent from '../Content/ISSContent';

function CriaFiltro() {
  const { filterGeral, setFilterGeral } = useContext(issContent);

  const filterByNumericValues = {
    filterByNumericValues: {
      column: 'population',
      comparison: 'maior que',
      value: '',
    },
  };
  // o README me pede pra usar o nome filters.
  const [filters, setFiltro] = useState(filterByNumericValues);// Diferente do que fiz no fetchProvedor, aqui não começa um useState([]). Aqui coloco o filterByName nos (). Ao usar esse useState, o primeiro nome(aqui é filters) já é naturalmente  um objeto. O que eu coloco dentro do () ao lado de useState vai ser o VALOR PADRÃO DENTRO desse objeto. Por isso que eu usar useState(filterByName) IMPLICA EM DIZER QUE filterByName está DENTRO de filters.

  // setFiltersGlobal({ ...filtersGlobal, filterByName: target.value })
  const handleChange = ({ target }) => { // atualizo o geral
    setFilterGeral({ filters: { ...filterGeral.filters, filterByName: target.value } });
  }; // o que eu quero mesmo aqui é atualizar esse filterByName(começou vazio). Enquanto vou digitando no input, eu vou atualizando esse filterByName.

  // pro req 2 não precisa do spread no filters, mas é pra evitar que, caso precise criar novas chaves dentro desse filters, aí o spread evita que novas informações sobreponham as informações antigas. E os próximos requisitos vão pedir novas chaves sim.
  const changeInputs = ({ target }, tipo) => {
    let valor = target.value;
    if (tipo === 'value') { valor = target.value.replace(/[^0-9]/, ''); }
    return setFiltro({
      filterByNumericValues: {
        ...filters.filterByNumericValues, [tipo]: valor,
      },
    });
  };
  const handleClick = () => {
    console.log(filters.filterByNumericValues);
    setFilterGeral({ filters: {
      ...filterGeral.filters,
      filterByNumericValues:
      [...filterGeral.filters.filterByNumericValues, filters.filterByNumericValues],
    } });
  };
  // OBS: essa função vai ter um retorno com o Input. É DIFERENTE do que foi feito no fetchProvedor. O provider vai por cima deste input. E também boto o children logo abaixo do input.
  return ( // vou pegar as informações deste filters e levar pro Table por meio do provider. Acho que não tem necessidade de colocar um : filterByName. Lá no table eu faço isso.
    <form>
      <label htmlFor="filtro">
        <input
          id="filtro"
          onChange={ handleChange }
          type="text"
          data-testid="name-filter"
          placeholder="Digite um nome de planeta"
        />
      </label>
      <label htmlFor="filtro2">
        <select data-testid="column-filter" onChange={ (x) => changeInputs(x, 'column') }>
          <option>population</option>
          <option>orbital_period</option>
          <option>diameter</option>
          <option>rotation_period</option>
          <option>surface_water</option>
        </select>
      </label>
      <label htmlFor="filtro3">
        <select
          data-testid="comparison-filter"
          onChange={ (x) => changeInputs(x, 'comparison') }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <label htmlFor="filtro4">
        <input
          data-testid="value-filter"
          type="text"
          onChange={ (x) => changeInputs(x, 'value') }
        />
      </label>
      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleClick }
        disabled={ filters.filterByNumericValues.value === '' }
      >
        Filtragem
      </button>
    </form>

  );
}

export default CriaFiltro;
