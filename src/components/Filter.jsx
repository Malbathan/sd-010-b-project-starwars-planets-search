import React, { useContext } from 'react'
import PlanetsContext from '../context/PlanetsContext';

function Filter() {
  const { handleChange } = useContext(PlanetsContext);
  return (
    <div>
      <input
        name="input-name"
        onChange={handleChange}
        placeholder="Nome do planeta"
      />
    </div>
  )
}

export default Filter
