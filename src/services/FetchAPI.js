import { useState, useEffect } from 'react';

export default function FetchAPI() {
  const ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [listPlanet, setListPlanet] = useState({});
  const searchAPI = () => {
    fetch(ENDPOINT)
      .then((response) => response.json())
      .then(setListPlanet);
  };
  useEffect(searchAPI, []);

  return listPlanet;
}
