import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import context from '../Context/Context';
import generateKey from '../services/generateIndex';

function Table({ state, clicked, dropItem, dropCondition, number }) {
  const { data: apiContext } = useContext(context);
  const [keys, setKeys] = useState([]);
  useEffect(() => {
    if (apiContext.length) {
      setKeys(Object.keys(apiContext[0]));
    }
  }, [apiContext]);

  const filterArr = (population, condition, number, name) => {
    if (population !== '') {
      return (
        apiContext
          .filter((i) => i.name.includes(state))
          .map((item) => (
            <tr key={ generateKey() }>
              <td>{item.name}</td>
              <td>{item.rotation_period}</td>
              <td>{item.orbital_period}</td>
              <td>{item.diameter}</td>
              <td>{item.climate}</td>
              <td>{item.gravity}</td>
              <td>{item.terrain}</td>
              <td>{item.surface_water}</td>
              <td>{item.population}</td>
              <td>{item.films}</td>
              <td>{item.created}</td>
              <td>{item.edited}</td>
              <td>{item.url}</td>
            </tr>
          ))
      );
      // return (
      //   apiContext
      //     .filter((i) => i.name.includes(state))
      //     .map((item) => (
      //       <tr key={ generateKey() }>
      //         <td>{item.name}</td>
      //         <td>{item.rotation_period}</td>
      //         <td>{item.orbital_period}</td>
      //         <td>{item.diameter}</td>
      //         <td>{item.climate}</td>
      //         <td>{item.gravity}</td>
      //         <td>{item.terrain}</td>
      //         <td>{item.surface_water}</td>
      //         <td>{item.population}</td>
      //         <td>{item.films}</td>
      //         <td>{item.created}</td>
      //         <td>{item.edited}</td>
      //         <td>{item.url}</td>
      //       </tr>
      //     ))
      // );
    }
  };

  return (
    <table>
      <thead>
        <tr>
          {keys.map((item) => <th key={ generateKey() }>{item}</th>) }
        </tr>
      </thead>
      <tbody>
        {filterArr(dropItem)}
        {/* {apiContext
          .filter((i) => i.name.includes(state))
          .map((item) => (
            <tr key={ generateKey() }>
              <td>{item.name}</td>
              <td>{item.rotation_period}</td>
              <td>{item.orbital_period}</td>
              <td>{item.diameter}</td>
              <td>{item.climate}</td>
              <td>{item.gravity}</td>
              <td>{item.terrain}</td>
              <td>{item.surface_water}</td>
              <td>{item.population}</td>
              <td>{item.films}</td>
              <td>{item.created}</td>
              <td>{item.edited}</td>
              <td>{item.url}</td>
            </tr>
          ))} */}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  state: PropTypes.string.isRequired,
};

export default Table;
