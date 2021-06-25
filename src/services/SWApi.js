const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

const starwarsAPI = async () => {
  const StarWars = await fetch(url);
  const response = StarWars.json();
  return response;
};

export default starwarsAPI;
