import { useState, useEffect } from 'react';

function RequisitionAPI() {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [planetsList, setPlanetsList] = useState({});

  const fetchUrl = () => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => setPlanetsList(response))
      .catch((error) => error);
  };

  useEffect(() => {
    fetchUrl();
  }, []);

  return planetsList;
}

export default RequisitionAPI;
