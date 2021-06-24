const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanets = async () => {
  const fetchAPI = await fetch(url);
  const response = await fetchAPI.json();
  return response.results;
};

export default getPlanets;
