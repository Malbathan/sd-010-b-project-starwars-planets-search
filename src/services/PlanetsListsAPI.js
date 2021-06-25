const API_URL_BASE = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default async function getAPIPlanetsInfo() {
  const { results } = await fetch(API_URL_BASE).then((resp) => (resp.json()));
  results.forEach((obj) => delete obj.residents);
  return results;
}
