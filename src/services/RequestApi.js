const fetchApia = async () => {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const promise = await response.json();
  return promise;
};

export default fetchApia;
