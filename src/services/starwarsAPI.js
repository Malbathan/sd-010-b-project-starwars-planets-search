const STAR_WARS_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchStarWars = () => (
  fetch(STAR_WARS_API)
    .then((object) => object.json())
    .then((json) => json.results)
    .catch((error) => console.log(error))
);

export default fetchStarWars;
