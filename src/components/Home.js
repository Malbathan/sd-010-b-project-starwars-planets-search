import React, { useState } from 'react';
import Table from './Table';

function Home() {
  const [search, setSearch] = useState('');

  const onChange = ({ target: { value } }) => setSearch(value);

  return (
    <section>
      <header>
        <input
          data-testid="name-filter"
          placeholder="Digite o nome"
          type="text"
          onChange={ onChange }
        />
      </header>
      <Table state={ search } />
    </section>
  );
}

export default Home;
