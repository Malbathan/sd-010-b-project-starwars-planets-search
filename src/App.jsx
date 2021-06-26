import React from 'react';
import StarWarsProvider from './context/StarWarsProvider';
import './App.css';
import TableHeader from './components/TableHeader';
import TableData from './components/TableData';

function App() {
  return (
    <StarWarsProvider>
      <table>
        <thead>
          <tr>
            <TableHeader />
          </tr>
        </thead>
        <tbody>
          <tr>
            <TableData />
          </tr>
        </tbody>
      </table>
    </StarWarsProvider>
  );
}

export default App;
