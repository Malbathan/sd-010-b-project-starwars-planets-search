import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Planets() {
  const { planetsList } = useContext(StarWarsContext);
  // const [planetsList, setPlanetsList] = useState([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     const planets = await fetchPlanets();
  //     setPlanetsList(planets);
  //   }
  //   fetchData();
  // }, []);

  return (
    <div>
      <h1>olá star war</h1>
      {console.log(planetsList)}
    </div>
  );
}

export default Planets;
