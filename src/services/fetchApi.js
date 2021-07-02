const fetchApi = async () => {
  const url = 'https://swapi-trybe.herokuapp.com/api';
  const response = await fetch(`${url}/planets`);
  const result = await response.json();
  return result;
};

export default fetchApi;
