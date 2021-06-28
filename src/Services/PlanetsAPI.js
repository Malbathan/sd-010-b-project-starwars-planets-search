// import response from '../testData';

const PLANETS_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanetsApi = async () => fetch(PLANETS_API)
  .then((response) => response.json());

// const getPlanetsApi = response.results;

export default getPlanetsApi;
