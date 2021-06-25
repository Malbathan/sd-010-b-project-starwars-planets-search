const starWarsApi = async () => {
  const fetchAPI = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const response = fetchAPI.json();
  return response;
};

export default starWarsApi;
