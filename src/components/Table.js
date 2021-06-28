import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data } = useContext(PlanetsContext);
  return (
    <section>
      <table>
        <thead />
      </table>
    </section>
  );
}

export default Table;
