import React from 'react';
import ProviderTabela from './provider/ProviderTabela';
import Table from './components/Table';
import SearchBar from './components/SearchBar';
import FilterSelects from './components/Selects';

function App() {
  // const [planets, setPlanets] = useState([]);

  // useEffect(() => {
  //   const getPlanets = async () => {
  //     const urlApi = 'https://swapi-trybe.herokuapp.com/api/planets/';
  //     const { results } = await fetch(urlApi).then((data) => data.json());
  //     setPlanets(results);
  //   };
  //   getPlanets();
  // }, []);

  return (
    <ProviderTabela>
      <div>
        <h1>Star Wars Planets Search</h1>
        <SearchBar />
        <FilterSelects />
        <Table />
      </div>
    </ProviderTabela>
  );
}

export default App;
