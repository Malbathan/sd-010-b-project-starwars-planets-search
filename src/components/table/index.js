import React, { useContext } from 'react';
import MyContext from '../../context/myContext';
import TableBody from './table';
import Header from './header';

function Table() {
  const { data, isFetching } = useContext(MyContext);
  return !isFetching ? (
    <table>
      <thead>
        <Header data={ data } />
      </thead>
      <tbody>
        <TableBody data={ data } />
      </tbody>
    </table>
  ) : <p>Carregando ...</p>;
}

export default Table;
