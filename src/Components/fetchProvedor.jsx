import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import issContent from '../Content/ISSContent';

const { Provider } = issContent; // tive que fazer nessa destruturação pro lint não incomodar. Desse jeito eu aciono o PROVIDER que veio do createContext.

function GetDataPlanets({ children }) { // NECESSÁRIO colocar CHILDREN nos ()
  const [data, setData] = useState([]); // começa como uma lista vazia. OBS: O requisito pede pra usar o nome data. O DATA vai ser a informação que vou passar pro TABLE.JSX

  //   useEffect(() => {
  //     const getPlanets = async () => {
  //       const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';
  //       const resultados = await fetch(endpoint).then((result) => result.json());
  //       setData(resultados);
  //     };
  //     getPlanets();
  //   }, []);

  // Essa forma aqui de cima estava dando algum erro. Então usei uma forma parecida com a do meu colega Fernando Maia. Link do PR dele: https://github.com/tryber/sd-010-b-project-starwars-planets-search/pull/27/commits/264f4bc3558d4b7d558a0cdf9b972adb03d4deb7#diff-3d74dddefb6e35fbffe3c76ec0712d5c416352d9449e2fcc8210a9dee57dff67L10

  useEffect(() => { // faz aqui a requisição e desse jeito.
    function getPlanets() {
      return fetch('https://swapi-trybe.herokuapp.com/api/planets/')
        .then((response) => response.json());
    }
    getPlanets().then(({ results }) => setData(results));
  }, []); // esse useEffect e um array vazio no final é como fazer o componentDidmount, ou seja, faz a requisição pra API logo no comecinho.

  return ( // esse enfim é o Retorno da função GetDataPlanets.
    <Provider value={ { data } }>
      { children }
    </Provider>
  ); // aqui é FUNDAMENTAL. Assim eu posso passar o data(que tá carregando a requisição dos planetas vindas da API).  PRECISO COLOCAR ESSE CHILDREN. Ele vai fazer com que qualquer componente que for FILHO do Provider(na verdade, filho da função GetDataPlanets) receba o que está dentro do Value={}.
  // RESUMINDO: Lá em APP.JS eu coloco Table como filha de GetDataPlanets. Isso vai fazer com que TABLE receba esse value ={ { data }}, ou seja, vai receber a requisição da API.
  // Abaixo é a forma de fazer as props deste children.
}

GetDataPlanets.propTypes = {
  children: PropTypes.shape({
    type: PropTypes.func,
  }).isRequired,
};
export default GetDataPlanets;
