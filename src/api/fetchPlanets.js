async function fetchPlanets() {
  try {
    const endPoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const response = await fetch(endPoint);
    const { results } = await response.json();
    // console.log(results); // Teste retorno API
    return results;
  } catch (err) {
    console.log(err);
  }
}

export default fetchPlanets;
