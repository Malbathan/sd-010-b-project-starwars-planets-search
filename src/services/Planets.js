const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

export const getPlanets = () => fetch(URL)
  .then((res) => res.json())
  .then((data) => {
    const { results } = data;
    return results.map(({ residents, ...newPlanet }) => newPlanet);
  });

export const theader = async () => {
  const data = await getPlanets();
  return Object.keys(data[0]);
};

export const columns = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

export const conditionals = ['maior que', 'igual a', 'menor que'];
