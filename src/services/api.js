const locationPlanets = 'https://swapi-trybe.herokuapp.com/api/planets/';

const givePlanets = async () => {
  const api = await fetch(locationPlanets);
  const response = await api.json();
  const result = response.results;
  result.forEach((element) => delete element.residents);
  return result;
};

export default givePlanets;
