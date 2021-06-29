import { useState, useEffect } from 'react';

function FetchAPI() {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

  const [planetsList, setPlanetsList] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((p) => setPlanetsList(p));
  }, []);

  return planetsList;
}

export default FetchAPI;
