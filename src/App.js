import React from 'react';
import './App.css';
import Home from './components/Home';
import { Provider } from './components/Provider/Provider';

function App() {
  return (
    <div>
      <Provider>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
