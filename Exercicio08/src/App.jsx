import React from 'react';
import Saudações from './components/Saudacoes';

function App() {
  const isDia = true;

  return (
    <div>
      <Saudações isDia={isDia} />
    </div>
  );
}

export default App;
