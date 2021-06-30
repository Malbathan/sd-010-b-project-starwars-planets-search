export default async function GetPlanets() {
  try {
    const planetsFetch = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const planets = await planetsFetch.json();
    console.log(planets);
    return planets.results;
  } catch (error) {
    console.log(error);
  }
}
