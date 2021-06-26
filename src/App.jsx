import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import StarWarsProvider from './context/StarWarsProvider';
import './App.css';
import TableHeader from './components/TableHeader';
import Name from './components/Name';

function App() {
  return (
    <StarWarsProvider>
      <ReactBootStrap.Table>
        <thead>
          <tr>
            <TableHeader />
          </tr>
        </thead>
        <tbody>
          <Name />
        </tbody>
      </ReactBootStrap.Table>
    </StarWarsProvider>
  );
}

export default App;
