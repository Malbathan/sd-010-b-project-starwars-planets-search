import React, { useContext } from 'react';
import { StarWarsContext } from '../context/StarWarsProvider';

const columnFixed = ['name'];
const columnsDefault = [
  'rotation_period', 'orbital_period',
  'diameter', 'climate',
  'gravity', 'terrain',
  'population', 'surface_water',
  'films', 'created',
  'edited', 'url'];

function TableHeaderContent() {
  const { columnFiltered } = useContext(StarWarsContext);

  const newColumns = columnFiltered ? columnsDefault
    .filter((columnName) => columnName === columnFiltered.column) : columnsDefault;

  return (
    <thead>
      <tr>
        <th>{columnFixed[0]}</th>
        {
          newColumns.map((item, index) => (
            <th key={ index }>{item}</th>
          ))
        }
      </tr>
    </thead>
  );
}

export default TableHeaderContent;
