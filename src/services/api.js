export const planetsAPI = () => fetch('https://swapi-trybe.herokuapp.com/api/planets/')
  .then((response) => response.json());

export const coringa = 0;
