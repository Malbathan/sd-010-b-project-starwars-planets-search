const getPlanets = async () => {
  const apiResult = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const { results } = await apiResult.json();
  return results;
};

export default getPlanets;
