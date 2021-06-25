const END_POINT = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchAPI = async () => {
  const planetList = await fetch(END_POINT)
    .then((response) => response.json())
    .then((response) => response.results);
  return planetList;
};

export default fetchAPI;
