// import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import StarWarsContext from "../context/StarWarsContext";
// import getAPI from "../service/api";

// function StarWarsProvider({ children }) {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [filters, setFilters] = useState({
//     filterByName: { name: "" },
//     filterByNumericValues: [
//       {
//         column: "population",
//         comparison: "maior que",
//         value: "0",
//       },
//     ],
//   });

//   // const batatinha = {
//   //   ...filters,
//   //   type: "azul",
//   //   filterByName: { ...filters.filterByName, lingua: "pt" },
//   //   filterByNumericValues: [
//   //     ...filters.filterByNumericValues,
//   //     { column: "diametro", comparison: "igual a", value: "10" },
//   //   ],
//   // };

//   // const batatinha2 = {
//   //   ...filters,
//   //   type: "azul",
//   //   filterByName: { ...filters.filterByName, lingua: "pt" },
//   //   filterByNumericValues: [
//   //     { ...filters.filterByNumericValues[0], value: "0" },
//   //   ],
//   // };

//   // {
//   //   filterByName: {
//   //     name: '',
//   //     lingua: 'pt',
//   //   },
//   //   filterByNumericValues: [{
//   //     column: 'population',
//   //     comparison: 'maior que',
//   //     value: '0'
//   //   },
//   //   {
//   //   column: 'diametro',
//   //   comparison: 'igual a',
//   //   value: '10',
//   //   }
//   // ],
//   //   type: 'azul'
//   // }

//   const context = { data, setData, loading, setLoading, filters, setFilters };

//   // async function fetchApi() {
//   //   const planets = await getAPI();
//   //   planets.map((planet) => delete planet.residents);
//   //   setData(planets);
//   //   setLoading(true);
//   // }

//   // useEffect(() => { fetchApi(); }, []);

//   useEffect(() => {
//     async function fetchApi() {
//       const planets = await getAPI();
//       planets.map((planet) => delete planet.residents);
//       setData(planets);
//       setLoading(true);
//     }
//     fetchApi();
//   }, []);

//   return (
//     <StarWarsContext.Provider value={context}>
//       {children}
//     </StarWarsContext.Provider>
//   );
// }

// StarWarsProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default StarWarsProvider;
