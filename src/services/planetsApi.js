export default async function fetchPlanets() {
  const data = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((res) => res.json())
    .then((res) => res.results);
  return data;
}
