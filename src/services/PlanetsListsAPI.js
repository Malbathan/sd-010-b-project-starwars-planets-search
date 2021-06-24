const API_URL_BASE = 'https://swapi-trybe.herokuapp.com/api/planets/?format=json';

export default async function getAPIPlanetsInfo() {
  const { results } = await fetch(API_URL_BASE).then((resp) => (resp.json()));
  return results;
}
