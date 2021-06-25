import React from 'react';

import Filtered from './components/Filtered';
import Table from './components/Table';
import ProviderPlan from './provider/providerPlaneta';

function App() {
  return (
    <div>
      <ProviderPlan>
        <Filtered />
        <Table />
      </ProviderPlan>
    </div>
  );
}

export default App;
