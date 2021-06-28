import { useState, useEffect } from 'react';

const FetchAPI = () => {
  const [urlPlanets, setUrlPlanets] = useState('https://swapi-trybe.herokuapp.com/api/planets/');
  const [planets, setPlanets] = useState([]);
  useEffect(() => {
    const getPlanets = async () => {
      const { results } = await fetch(urlPlanets)
        .then((response) => response.json());
      setPlanets(results);
    };
    getPlanets();
  }, [urlPlanets]);

  return [planets, setUrlPlanets];
};

export default FetchAPI;
