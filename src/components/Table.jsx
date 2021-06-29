import React, { useContext, useEffect, useState } from 'react';
// import Filters from './Filters';
import PlanetsContext from '../context/PlanetsContext';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

function Table() {
  const { data } = useContext(PlanetsContext);
  const [renderPlanetList, setRenderPlanetList] = useState(false);

  useEffect(() => {
    setRenderPlanetList(data.length !== 0);
  }, [data]);

  return (
    <div>
      { renderPlanetList && (
        <table>
          <TableHeader />
          <TableBody />
        </table>
      ) }
    </div>
  );
}

// Para entender um pouco do raciocínio do requisito 1, dei uma olhada na PR do meu colega Fabio Marturano, e entendi a forma com que ele pensou para criar a tabela. Com isso quebrei um pouco a cabeça para tentar resolver de uma forma diferente da dele e mais condizente com meu raciocínio. Não foi tão fácil mas consegui :) Link da PR do Fabio: https://github.com/tryber/sd-010-b-project-starwars-planets-search/pull/51

export default Table;
