const API_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getPlanetsFromAPI = async () => {
  const result = await fetch(API_URL).then((data) => data.json());
  return result;
};

export default getPlanetsFromAPI;
