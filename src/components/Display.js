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

  const AllTeams = [
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

  const getTeams = (teams = [], turn = 0) => {
    let cardsLength = [5, 10, 15, 20];
    let randomIndex;
    // eslint-disable-next-line default-case
    switch (turn) {
      case 0:
        while(teams.length !== cardsLength[turn]) {
          randomIndex = Math.floor(Math.random() * AllTeams.length);
          // eslint-disable-next-line no-loop-func
          if (teams.every(team => team.name !== AllTeams[randomIndex].name)) teams.push(AllTeams[randomIndex]);
          else continue;
        }
      break;
      case 1:
        while(teams.length !== cardsLength[turn]) {
          randomIndex = Math.floor(Math.random() * AllTeams.length);
          // eslint-disable-next-line no-loop-func
          if (teams.every(team => team.name !== AllTeams[randomIndex].name)) teams.push(AllTeams[randomIndex]);
          else continue;
        }
      break;
      case 2:
        while(teams.length !== cardsLength[turn]) {
          randomIndex = Math.floor(Math.random() * AllTeams.length);
          // eslint-disable-next-line no-loop-func
          if (teams.every(team => team.name !== AllTeams[randomIndex].name)) teams.push(AllTeams[randomIndex]);
          else continue;
        }
      break;
      case 3:
        while(teams.length !== cardsLength[turn]) {
          randomIndex = Math.floor(Math.random() * AllTeams.length);
          // eslint-disable-next-line no-loop-func
          if (teams.every(team => team.name !== AllTeams[randomIndex].name)) teams.push(AllTeams[randomIndex]);
          else continue;
        }
      break;
    }return teams;
  }

  const [cards, setCards] = useState(getTeams);

  const {setScore, setBestScore} = props.set;
  const {score, bestScore} = props.score;

  useEffect(() => {
    document.querySelectorAll(".teams").forEach((team) => {
      team.addEventListener("click", handleClick);
    })

    if (bestScore < score) setBestScore(score);
    if (cards.every(team => team.clicked === true) && cards.length === 5) setCards(getTeams(setAllUnclicked(), 1));
    if (cards.every(team => team.clicked === true) && cards.length === 10) setCards(getTeams(setAllUnclicked(), 2));
    if (cards.every(team => team.clicked === true) && cards.length === 15) setCards(getTeams(setAllUnclicked(), 3));
    if (cards.every(team => team.clicked === true) && cards.length === 20) console.log("Winner!");;
    
    return () => {
      document.querySelectorAll(".teams").forEach((team) => {
        team.removeEventListener("click", handleClick);
      })
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score, bestScore, cards]);

  const shuffle = (arr) => {
    let currentIndex = arr.length
    let randomIndex;

    while(currentIndex !== 0) {
    
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [arr[currentIndex], arr[randomIndex]] = [
        arr[randomIndex], arr[currentIndex]];
    }
    return arr;
  }

  let miss = false;


  const handleClick = function clickedTeam(e) {    
    const teamName = e.target.getAttribute("data-name");
    let newCards = cards.map(team => {
      if(team.name === teamName && team.clicked === false){
        setScore(score + 1);
        return {
          ...team,
          clicked: true
        };
      }else if (team.name === teamName && team.clicked === true) {
        setScore(0);
        miss = true;
        return team;
      }else return team;
    })
    if (miss === true) {
      newCards = setAllUnclicked();
      newCards = getTeams();
    };
    
    setCards(shuffle(newCards));
    }

  const setAllUnclicked = () => {
    let newCards = cards.map(team => {
      if (team.clicked === true){
        return {...team, clicked: false}
      }else return team;
    })
    miss = false;
    return newCards;
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