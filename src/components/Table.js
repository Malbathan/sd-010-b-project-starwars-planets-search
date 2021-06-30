import React, { useContext } from 'react';
import Context from '../context/context';

function Table() {
  const {
    data,
    filterByName,
    filterName, filterNumericValues, filterByNumeric } = useContext(Context);
  // console.log(data.length, filterByNumericValues);
  let newData = data;

  // useEffect(() => {
  //   const something = () => {
  //     for (let i = 0; i < data.length; i += 1) {
  //       if (filterByName.name) {
  //         const getNewData = data
  //           .filter((planets) => planets.name.includes(filterByName.name));
  //         setData(getNewData);
  //       }
  //     }
  //   };
  //   something();
  // }, [data, filterByName, setData]);

  for (let i = 0; i < data.length; i += 1) {
    if (filterByName.name) {
      const getNewData = data
        .filter((planets) => planets.name.includes(filterByName.name));
      newData = getNewData;
    }
  }

  // const comparisons = ['maior que', 'menor que', 'igual a'];

  // if (filterByNumericValues[0].column === 'population'
  //     && filterByNumericValues[0].comparison === 'maior que'
  //       && filterByNumericValues[0].value) {
  //   const getData = data
  //     .filter((d) => parseInt(d.population, 10)
  //       > parseInt(filterByNumericValues[0].value, 10));
  //   setData(getData);
  //   // console.log(newData);
  // }
  // return newData;
  // };

  // const filterByNumeric = () => {
  //   if (filterByNumericValues[0].column === 'population'
  //       && filterByNumericValues[0].comparison === 'maior que'
  //         && filterByNumericValues[0].value) {
  //     const getData = data
  //       .filter((d) => parseInt(d.population, 10)
  //         > parseInt(filterByNumericValues[0].value, 10));
  //     setData(getData);
  //   }
  // };

  // const filterByNumeric = () => {
  //   if (filterByNumericValues[0].column === 'population'
  //     && filterByNumericValues[0].comparison === 'maior que') {
  //     const getData = data
  //       .filter((d) => parseInt(d.population, 10)
  //       > parseInt(filterByNumericValues[0].value, 10));
  //     newData = getData;
  //     console.log(newData);
  //   }
  //   // return newData;
  // };
  // console.log(newData);

  // for (let i = 0; i < data.length; i += 1) {
  //   if (filterByName.name) {
  //     const getNewData = data
  //       .filter((planets) => planets.name.includes(filterByName.name));
  //     newData = getNewData;
  //   }
  // }

  const renderTable = () => (
    <table border="1" width="500px">
      <tr>
        <th>name</th>
        <th>rotation_period</th>
        <th>orbital_period</th>
        <th>diameter</th>
        <th>climate</th>
        <th>gravity</th>
        <th>terrain</th>
        <th>surface_water</th>
        <th>population</th>
        <th>films</th>
        <th>created</th>
        <th>edited</th>
        <th>url</th>
      </tr>
      {newData.map((planet, i) => (
        <tr key={ i }>
          <td>{ planet.name }</td>
          <td>{ planet.rotation_period }</td>
          <td>{ planet.orbital_period }</td>
          <td>{ planet.diameter }</td>
          <td>{ planet.climate }</td>
          <td>{ planet.gravity }</td>
          <td>{ planet.terrain }</td>
          <td>{ planet.surface_water }</td>
          <td>{ planet.population }</td>
          <td>{ planet.films.map((film, id) => <ul key={ id }><li>{film}</li></ul>) }</td>
          <td>{ planet.created }</td>
          <td>{ planet.edited }</td>
          <td>{ planet.url }</td>
        </tr>))}
    </table>
  );
  return (
    <div>
      <form onSubmit={ (e) => e.preventDefault() }>
        <label htmlFor="filter-name">
          Filtrar por nome
          <input
            type="text"
            id="filter-name"
            name="name"
            data-testid="name-filter"
            onChange={ filterName }
          />
        </label>
        <br />
        <label htmlFor="dropdown-one">
          Filtrar por valores
          <select
            id="dropdown-one"
            name="column"
            data-testid="column-filter"
            onChange={ filterNumericValues }
          >
            <option>population</option>
            <option>orbital_period</option>
            <option>diameter</option>
            <option>rotation_period</option>
            <option>surface_water</option>
          </select>
        </label>
        <label htmlFor="dropdown-two">
          <select
            id="dropdown-two"
            name="comparison"
            data-testid="comparison-filter"
            onChange={ filterNumericValues }
          >
            <option>maior que</option>
            <option>menor que</option>
            <option>igual a</option>
          </select>
        </label>
        <label htmlFor="value">
          <input
            type="number"
            name="value"
            id="value"
            data-testid="value-filter"
            onChange={ filterNumericValues }
          />
        </label>
        <button
          type="submit"
          data-testid="button-filter"
          onClick={ () => filterByNumeric() }
        >
          Filtrar
        </button>
      </form>
      { data && renderTable() }
    </div>
  );
}

export default Table;
