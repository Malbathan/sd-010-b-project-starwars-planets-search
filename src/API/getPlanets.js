async function getPlanets() {
  const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const fetchResponse = await fetch(endpoint);
  const response = await fetchResponse.json();
  const { results } = response;
  const data = results.map((eachResult) => {
    delete eachResult.residents;
    return eachResult;
  });
  console.log(data);
  return data;
}

export default getPlanets;
