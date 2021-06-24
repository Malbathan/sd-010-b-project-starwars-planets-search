export const SW_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

export const getPlanets = async () => {
  try {
    const res = await (await fetch(SW_URL)).json();
    return res.results;
  } catch (error) {
    console.error(error);
  }
};
