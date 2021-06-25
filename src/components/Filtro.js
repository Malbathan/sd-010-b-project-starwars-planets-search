import React, { Component } from 'react';
import starWarsContext from '../context/startWarsContext';

class Filtro extends Component {
  constructor() {
    super();

    this.state = {
      select1: '',
      select2: '',
      input: '',
    };
  }

  render() {
    const { func } = this.context;
    const { input, select1, select2 } = this.state;
    return (
      <div>
        <input
          onChange={ (e) => func({
            filters: {
              filterByName: {
                name: e.target.value,
              },
              filterByNumericValues: [{ column: '', comparison: '', value: '' }],
            },
          }) }
          type="text"
          data-testid="name-filter"
        />
        <select
          onChange={ (e) => this.setState({
            select1: e.target.value,
          }) }
          data-testid="column-filter"
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <select
          onChange={ (e) => this.setState({
            select2: e.target.value,
          }) }
          data-testid="comparison-filter"
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          onChange={ (e) => this.setState({
            input: e.target.value,
          }) }
          type="number"
          data-testid="value-filter"
        />
        <button
          onClick={ () => func({
            filters: {
              filterByName: {
                name: '',
              },
              filterByNumericValues: [{
                column: select1, comparison: select2, value: input }],
            },
          }) }
          type="button"
          data-testid="button-filter"
        >
          Aplicar Filtro

        </button>
      </div>
    );
  }
}

Filtro.contextType = starWarsContext;

export default Filtro;
