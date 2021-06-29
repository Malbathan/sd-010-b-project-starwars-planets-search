const API_PLANETS = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchPlanets = () => fetch(API_PLANETS)
  .then((response) => response.json());

export default fetchPlanets;
