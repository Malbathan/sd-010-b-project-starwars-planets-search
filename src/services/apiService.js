async function requestApi() {
  const fetchApi = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const { results } = await fetchApi.json();
  return results.filter((item) => delete item.residents);
}

export default requestApi;
