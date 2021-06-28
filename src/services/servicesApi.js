const reqPlanets = async () => {
  const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const api = await fetch(endPoint);
  const response = await api.json();
  const result = response.results;
  result.forEach((element) => delete element.residents);
  return result;
};

export default reqPlanets;
