import React from 'react';

function InputSelectRange() {
  return (
    <div>
      <select name="faixa-de-busca" id="faixa-de-busca" data-testid="comparison-filter">
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
    </div>
  );
}

export default InputSelectRange;
