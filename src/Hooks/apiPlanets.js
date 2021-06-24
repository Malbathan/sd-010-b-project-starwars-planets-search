import { useState, useEffect } from 'react';

const useFetchApiPlanets = () => {
  const API_STAR_WARS_PLANETS = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [planetList, setPlanetList] = useState({});

  const fetchApiPlanets = () => {
    fetch(API_STAR_WARS_PLANETS)
      .then((response) => response.json())
      .then((response) => setPlanetList(response));
  };
  useEffect(fetchApiPlanets, []);

  return planetList;
};

export default useFetchApiPlanets;
