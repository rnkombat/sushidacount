import React from 'react';
import MultiCounter from './MultiCounter'; // MultiCounter.js と同じフォルダにある場合

const App = () => {
  return (
    <div className="App">
      <h1>寿司打カウント</h1>
      <MultiCounter />
    </div>
  );
};

export default App;