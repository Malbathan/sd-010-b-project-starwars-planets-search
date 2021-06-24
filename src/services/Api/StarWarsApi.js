const fetchApi = async () => {
  const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = await fetch(endpoint);
  const results = await response.json();
  console.log(results);
  return results.results;
};

export default fetchApi;
