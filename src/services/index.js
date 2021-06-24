const fetchApi = async () => {
  const result = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const { results } = await result.json();
  return results;
};

export default fetchApi;
