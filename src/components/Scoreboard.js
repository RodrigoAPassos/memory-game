import React from 'react'

const Scoreboard = (props) => {

    const {score, bestScore} = props.scoreboard;

  return (
    <div className='scoreboard-comp'>
        <div className="best-area">
            <div className='bestScore-title'>Best Score</div>
            <div className='bestScore-value'>{bestScore}</div>
        </div>
        <div className="score-area">
            <div className='score-title'>Score</div>
            <div className='score-value'>{score}</div>
        </div>
    </div>
  )
}

export default Scoreboard