const APIStarWars = async () => {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/?format=api';
  const result = await fetch(url);
  return result;
};

export default APIStarWars;
