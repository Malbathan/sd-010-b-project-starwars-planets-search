async function getPlanets() {
  return fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((fetchReturn) => fetchReturn.json())
    .catch((error) => error);
}

export default getPlanets;
