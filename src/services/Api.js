const apiUrl = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchPlanets = async () => {
  const response = await fetch(apiUrl);
  const planets = response.json();
  return planets;
};

export default fetchPlanets;
