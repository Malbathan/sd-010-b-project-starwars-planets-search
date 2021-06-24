const url1 = 'https://swapi-trybe.herokuapp.com/api/planets/?page=1';
const url2 = 'https://swapi-trybe.herokuapp.com/api/planets/?page=2';
const url3 = 'https://swapi-trybe.herokuapp.com/api/planets/?page=3';
const url4 = 'https://swapi-trybe.herokuapp.com/api/planets/?page=4';
const url5 = 'https://swapi-trybe.herokuapp.com/api/planets/?page=5';
const url6 = 'https://swapi-trybe.herokuapp.com/api/planets/?page=6';

export const urlArray = [url1, url2, url3, url4, url5, url6];

const fetchPlanets = async (url) => {
  const response = await fetch(url);
  const planets = response.json();
  return planets;
};

export default fetchPlanets;
