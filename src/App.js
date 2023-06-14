import './App.css';
import React, {useState} from 'react';

function App() {

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className="App">
      <header className="App-header">Memory Game - Brasileirão 2023
      <div className='App-logo'></div>
      </header>
    </div>
  );
}

export default App;
