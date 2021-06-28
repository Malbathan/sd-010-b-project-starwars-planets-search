function RenderRowTable(results = [], filterByName, filterByNumericValues, numberFilter) {
  const UM_NEGATIVE = -1;

  let resultsFilter = results.filter((planeta) => planeta
    .name.indexOf(filterByName.name) !== UM_NEGATIVE);

  if (numberFilter) {
    const operador = (filterByNumericValues[0]
      .comparison);
    resultsFilter = results
      .filter((column) => {
        switch (operador) {
        case 'maior que':
          return Number(column[filterByNumericValues[0]
            .column]) > Number(filterByNumericValues[0].value);
        case 'menor que':
          return Number(column[filterByNumericValues[0]
            .column]) < Number(filterByNumericValues[0].value);
        case 'igual a':
          return column[filterByNumericValues[0]
            .column] === filterByNumericValues[0].value;
        default:
          return results;
        }
      });
  }

  return resultsFilter;
}

export default RenderRowTable;
