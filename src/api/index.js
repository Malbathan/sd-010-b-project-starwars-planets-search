const fetchPlanets = async () => {
  try {
    const data = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const { results } = await data.json();
    return results;
  } catch (error) {
    console.log(error);
  }
};

export default fetchPlanets;
