import React, { useContext } from 'react';
// import RenderTable from './table';

import { Context } from './Provider/Provider';

const Home = () => {
  const { filterInput } = useContext(Context);
  //  initialState === null || ini
  // console.log(Context);
  // console.log(planetName);
  // const { data } = initialState;
  return (
    <div>
      <span>Hello, App!</span>
      <input type="text" onChange={ filterInput } data-testid="name-filter" />
      <label htmlFor="batata">
        <select id="batata">
          <option>batata</option>
          <option>batata</option>
          <option>batata</option>
        </select>
      </label>
      {/* <RenderTable /> */}
      {/* {data.length === 0 ? <p>carregando</p> : <RenderTable />} */}
    </div>
  );
};
export default Home;
