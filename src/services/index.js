export default async function fetchAPI() {
  const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = await fetch(endpoint).then((data) => data.JSON());
  return response;
}
