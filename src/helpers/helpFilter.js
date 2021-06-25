export default function helperFilter(objFilter, objData) {
  const { column } = objFilter;
  const { comparison } = objFilter;
  const { value } = objFilter;

  switch (comparison) {
  case 'maior que':
    return Number(objData[column]) > Number(value);
  case 'menor que':
    return Number(objData[column]) < Number(value);
  case 'igual a':
    return Number(objData[column]) === Number(value);
  default:
    return true;
  }
}
