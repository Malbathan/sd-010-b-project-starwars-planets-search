import React from 'react';

import InputColumns from './InputColumns';
import InputName from './InputName';
import InputComparison from './InputComparison';
import InputValue from './InputValue';
import Button from './Button';

function Inputs() {
  return (
    <div>
      <form>
        <InputName />
        <InputColumns />
        <InputComparison />
        <InputValue />
      </form>
      <Button />
    </div>
  );
}

export default Inputs;
