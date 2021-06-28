// import response from '../testData';

const PLANETS_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanetsApi = () => fetch(PLANETS_API)
  .then((resposta) => resposta.json());

// console.log(getPlanetsApi());

// const getPlanetsApiTEST = response.results;

export default getPlanetsApi;
