import React from 'react';

import DropdownColumns from './DropdownColumns';
import InputName from './InputName';
import Comparison from './Comparison';
import InputValue from './InputValue';
import ButtonFilter from './ButtonFilter';

function Inputs() {
  return (
    <div>
      <form>
        <InputName />
        <DropdownColumns />
        <Comparison />
        <InputValue />
      </form>
      <ButtonFilter />
    </div>
  );
}

export default Inputs;
