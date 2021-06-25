import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  // useState([]) - pega os setPlanets e coloca dentro de planets
  const [data, setData] = useState([]);

  // didMount -
  useEffect(() => { // função a ser execultada
    const getPlanets = async () => {
      const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/'; // variável que guardará o link da api
      // fetch() - fornece uma maneira fácil e lógica para buscar recursos de forma assíncrona através da rede.
      // .then() - pega a informação e transforma para json()
      const { results } = await fetch(endpoint).then((value) => value.json());
      setData(results);
    };

    getPlanets(); //
  }, []); // [] - array vazio para receber os componentes renderizados

  return (
    // data - componentes que terão acesso aos states
    // children - tudo que fica dentro desse provider será repassado no children (filhos)
    <PlanetContext.Provider value={ { data } }>
      {children}
    </PlanetContext.Provider>
  );
}

// https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html
// element - você pode especificar que apenas um único filho pode ser passado para um componente como children.
PlanetProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PlanetProvider;
