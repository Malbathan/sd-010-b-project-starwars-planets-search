import React from 'react';
import './App.css';
import PlanetsContext from './context/PlanetsContext';
import Home from './pages/Home';
/*
  Para este projeto usei como base o repositório do colega Rodrigo Farias Silva
  da turma 09. Todas as pastas e arquivos ficaram muito bem organizados e estruturados
  e me auxiliou bastante para resolver estes problemas.
  https://github.com/tryber/sd-09-project-starwars-planets-search/pull/110/commits
 */
function App() {
  return (
    <PlanetsContext>
      <Home />
    </PlanetsContext>
  );
}

export default App;
