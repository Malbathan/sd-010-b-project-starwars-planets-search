import React, { useContext } from 'react';
import MyContext from '../../context/myContext';

function TextFilter() {
  const { setText } = useContext(MyContext);
  return (
    <section>
      <input
        data-testid="name-filter"
        onChange={ (e) => setText(e.target.value) }
        type="text"
      />
    </section>
  );
}

export default TextFilter;
