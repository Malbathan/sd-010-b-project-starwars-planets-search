const getPlanets = async () => {
  const fetchAPI = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const apiObj = await fetchAPI.json();
  const { results } = apiObj;
  // console.log(results);
  results.forEach((result) => delete result.residents);
  return results;
};

export default getPlanets;
