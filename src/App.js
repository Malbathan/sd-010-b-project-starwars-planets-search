import React from 'react';
import './App.css';
import Input from './components/Input';
import Table from './components/Table';

import Provider from './contexts';

function App() {
  return (
    <Provider>
      <section>
        <span>Hello, App!</span>
        <Input />
        <Table />
      </section>
    </Provider>
  );
}

export default App;
