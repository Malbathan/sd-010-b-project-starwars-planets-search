function ByName(planets, text) {
  return planets.filter((planet) => (planet.name.toLowerCase().includes(text)));
}

export default ByName;
