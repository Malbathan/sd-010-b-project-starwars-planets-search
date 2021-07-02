async function fetchPlanets() {
  try {
    const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/?format=json';
    const result = await fetch(endpoint);
    return result;
  } catch (error) {
    console.log('ooops!!!');
  }
}

export default fetchPlanets;
