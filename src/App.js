import React from 'react';
import Table from './components/Table';
// import StarForm from './components/StarForm';
import StarContextProvider from './context/myContext';

const App = () => (
  <div>
    <StarContextProvider>
      {/* <StarForm /> */}
      <Table />
    </StarContextProvider>
  </div>

);

export default App;
