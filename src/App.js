import React from 'react';
import './App.css';
import Table from './components/Table';
import ProviderPlan from './provider/providerPlaneta';

function App() {
  return (
    <div>
      <span>Hello, ola App!</span>
      <ProviderPlan>
        <Table />
      </ProviderPlan>
    </div>
  );
}

export default App;
