import { useState, useEffect } from 'react';

const FetchPlanetAPI = () => {
  const API = 'https://swapi-trybe.herokuapp.com/api/planets/';

  const [listPlanet, setListPlanet] = useState({});

  const searchAPI = () => {
    fetch(API)
      .then((response) => response.json())
      .then((response) => setListPlanet(response));
  };

  useEffect(searchAPI, []);

  return listPlanet;
};

export default FetchPlanetAPI;