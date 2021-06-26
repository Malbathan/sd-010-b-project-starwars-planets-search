import React from 'react';
import GetDataPlanets from './Components/fetchProvedor';
import CriaFiltro from './Components/Filters';
import CriarTabela from './Components/Table';

// Table é filha de GetDataPlanets e por isso recebe a requisição API por meio do Provider(lá no return do GetDataPlanets)
function App() {
  return (
    <CriaFiltro>
      <GetDataPlanets>
        <CriarTabela />
      </GetDataPlanets>
    </CriaFiltro>
  );
}
export default App;
