function fetchApiStarwars() {
  // const [setData] = useContext(MyContext)
  return fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((response) => response.json())
    .then(({ results }) => results);
}

export default fetchApiStarwars;
