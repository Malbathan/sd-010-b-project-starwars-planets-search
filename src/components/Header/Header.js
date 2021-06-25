import React, { useContext } from 'react';
import TableContext from '../../context/TableContext';

function Header() {
  const { setNamePlanet, namePlanet } = useContext(TableContext);
  const filterName = ({ target: { value } }) => {
    setNamePlanet(value);
    console.log(namePlanet);
  };

  return (
    <input data-testid="name-filter" type="text" onChange={ filterName } />
  );
}

export default Header;
