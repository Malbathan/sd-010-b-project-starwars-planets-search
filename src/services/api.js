const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getApi = async () => {
  const fetchApi = await fetch(url);
  const response = fetchApi.json();
  const planetsApi = await response;
  return planetsApi;
};
export default getApi;
