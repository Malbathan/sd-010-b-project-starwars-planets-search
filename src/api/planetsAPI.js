const URL_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

export const getPlanets = () => (
  fetch(URL_API)
    .then((response) => (
      response.json()
        .then(({ results }) => results)
    ))
);

export default getPlanets;
