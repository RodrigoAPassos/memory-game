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

  const teams = [
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
  ];

  const [cards, setCards] = useState(teams);
  const [miss, setMiss] = useState(false);

  const {setScore, setBestScore} = props.set;
  const {score, bestScore} = props.score;

  useEffect(() => {
    document.querySelectorAll(".teams").forEach((team) => {
      team.addEventListener("click", handleClick);
    })

    return () => {
      document.querySelectorAll(".teams").forEach((team) => {
        team.removeEventListener("click", handleClick);
      })
    }

  },[score]);

  const shuffle = (arr) => {
    let currentIndex = arr.length
    let randomIndex;

    while(currentIndex != 0) {
    
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex], arr[currentIndex]];
    }
    return arr;
  }


  const handleClick = function clickedTeam(e) {    
    const teamName = e.target.getAttribute("data-name");
    let newCards = cards.map(team => {
      if(team.name == teamName && team.clicked == false){
        setScore(score + 1);
        if (bestScore < score) setBestScore(score);
        return {
          ...team,
          clicked: true
        };
      }else if (team.name == teamName && team.clicked == true) {
        setMiss(true);
        return team;
      }else return team;
    });
    if (miss == true) setAllUnclicked();
    
    setCards(shuffle(newCards));
    //console.log(cards);
    }

  const setAllUnclicked = () => {
    setScore(0);
    let newCards = cards.map(team => {
      if (team.clicked == true){
      return {...team, clicked: false}
      }else return team;
    })
    setCards(shuffle(newCards));
    setMiss(false);
    console.log(cards);
  }
    
  const displayTeams = cards.map((team, index) => 
    <li className='teams' data-name={team.name} key={index} >
      <p className='team-name' data-name={team.name}>{team.name}</p>
      <img className='escudo' data-name={team.name} src={team.img} alt={team.name} />
    </li>
  );

  return (
    <div className='display-main'>
      <ul className='teams-list'>{displayTeams}</ul>
    </div>
  )
}

export default Display