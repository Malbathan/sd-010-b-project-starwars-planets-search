export default function helperFilter({ column, comparison, value }, objData) {
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
