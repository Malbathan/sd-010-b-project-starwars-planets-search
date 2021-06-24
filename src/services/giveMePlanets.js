const giveMePlanets = async () => {
  try {
    const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const request = await fetch(URL);
    const response = await request.json();
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default giveMePlanets;
