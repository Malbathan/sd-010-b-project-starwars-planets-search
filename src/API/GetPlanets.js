const getPlanets = async () => {
  const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const { results } = await fetch(endpoint).then((data) => data.json());
  console.log(results);
  return results;
};

export default getPlanets;
