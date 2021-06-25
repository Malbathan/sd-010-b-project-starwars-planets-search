import { useState, useEffect } from 'react';

function RequisitionAPI() {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [list, setList] = useState({});

  const fetchUrl = () => {
    fetch(url)
      .then((response) => response.json())
      .then((response) => setList(response))
      .catch((error) => error);
  };

  useEffect(fetchUrl, []);

  return list;
}

export default RequisitionAPI;
