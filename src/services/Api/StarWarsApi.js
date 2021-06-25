const fetchApi = async () => {
  const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = await fetch(endpoint);
  const { results } = await response.json();
  return results;
};

export default fetchApi;
