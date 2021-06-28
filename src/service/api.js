async function fetchAPI() {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((data) => data.json())
    .then(({ results }) => results);
  return response;
}

export default fetchAPI;
