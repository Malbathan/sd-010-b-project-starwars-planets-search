async function fetchPlanets() {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets';
  const data = await fetch(URL)
    .then((response) => response.json())
    .catch((error) => console.log(error));
  return data;
}

export default fetchPlanets;
