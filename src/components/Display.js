import React, {useEffect, useState} from 'react';
import santos from '../iconSrc/santos.png';
import saoPaulo from '../iconSrc/saopaulo.png';
import botafogo from '../iconSrc/botafogo.png';
import corinthians from '../iconSrc/corinthians.png';
import palmeiras from '../iconSrc/palmeiras.png';
import flamengo from '../iconSrc/fla.png';
import vasco from '../iconSrc/vasco.png';
import fluminense from '../iconSrc/fluminense.png';
import bahia from '../iconSrc/bahia.png';
import fortaleza from '../iconSrc/fortaleza.png';
import america from '../iconSrc/ammg.png';
import cruzeiro from '../iconSrc/cruzeiro.png';
import cuiaba from '../iconSrc/cuiaba_mt.png';
import goias from '../iconSrc/goias.png';
import gremio from '../iconSrc/gremio.png';
import internacional from '../iconSrc/interrs.png';
import bragantino from '../iconSrc/bragantino.png';
import coritiba from '../iconSrc/coritiba.png';
import atletico from '../iconSrc/atletico.png';
import athletico from '../iconSrc/atlpr.png';

const Display = (props) => {

  const [teams, setClicked] = useState([
    {name: "Santos", img: santos, clicked: false},
    {name: "São Paulo", img: saoPaulo, clicked: false},
    {name: "Corinthians", img: corinthians, clicked: false},
    {name: "Palmeiras", img: palmeiras, clicked: false},
    {name: "Botafogo", img: botafogo, clicked: false},
    {name: "Flamengo", img: flamengo, clicked: false},
    {name: "Vasco", img: vasco, clicked: false},
    {name: "Fluminense", img: fluminense, clicked: false},
    {name: "Bahia", img: bahia, clicked: false},
    {name: "Fortaleza", img: fortaleza, clicked: false},
    {name: "America-MG", img: america, clicked: false},
    {name: "Cruzeiro", img: cruzeiro, clicked: false},
    {name: "Cuiaba", img: cuiaba, clicked: false},
    {name: "Goias", img: goias, clicked: false},
    {name: "Grêmio", img: gremio, clicked: false},
    {name: "Internacional", img: internacional, clicked: false},
    {name: "RB-Bragantino", img: bragantino, clicked: false},
    {name: "Coritiba", img: coritiba, clicked: false},
    {name: "Athletico-PR", img: athletico, clicked: false},
    {name: "Atlético-MG", img: atletico, clicked: false},
  ])

  const {setScore, setBestScore} = props.set;
  const {score, bestScore} = props.score;

  const clickedTeam = Event => {
    let teamName = Event.currentTarget.id;
    setClicked(teams.map(team => {
      if(team.name == teamName && team.clicked == false){
        setScore(score + 1);
        if (bestScore < score) setBestScore(score);
        return {...team,clicked: true};
      }else if (team.name == teamName && team.clicked == true) {
        setScore(0);
        return team;
      }
    }))
  }
    
  const displayTeams = teams.map((team, index) => 
    <li className='teams' id={team.name} key={index} onClick={()=>clickedTeam(Event)} >
      <p className='team-name'>{team.name}</p>
      <img className='escudo' src={team.img} alt={team.name} />
    </li>);

  return (
    <div className='display-main'>
      <ul className='teams-list'>{displayTeams}</ul>
    </div>
  )
}

export default Display