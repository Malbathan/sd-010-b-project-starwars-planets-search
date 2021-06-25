export function setPlanets(planets) {
  localStorage.setItem('planets', JSON.stringify(planets));
}

export function getPlanets() {
  const planets = localStorage.getItem('planets');
  return JSON.parse(planets);
}
