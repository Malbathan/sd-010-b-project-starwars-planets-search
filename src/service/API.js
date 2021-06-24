async function API() {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

  const response = await fetch(url);
  const aux = await response.json();
  return aux;
}

export default API;
