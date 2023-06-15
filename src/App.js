import './App.css';
import React, {useState} from 'react';
import Scoreboard from './components/Scoreboard';
import Display from './components/Display';

const App = () => {

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const scoreStats = {score, bestScore};
  const setStats = {setScore, setBestScore};

  return (
    <div className="App">
      <header className="App-header">Memory Game - Brasileirão 2023
        <div className='App-logo'></div>
      </header>
      <div className='App-main'>
        <Scoreboard scoreboard = {scoreStats} />
        <Display score = {scoreStats} setAll = {setStats} />
      </div>
      <footer className='App-footer'>Developed by RodrigoAPassos</footer>
    </div>
  );
}

export default App;
