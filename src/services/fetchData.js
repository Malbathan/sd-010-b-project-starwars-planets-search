export default async function fetchData() {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const data = await fetch(url).then((response) => response.json());
  return data;
}
