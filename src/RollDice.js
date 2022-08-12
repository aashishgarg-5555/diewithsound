import React , {useState} from 'react'
import Die from './Die'
import "./RollDice.css"
import { Howl } from 'howler';
//http://cd.textfiles.com/itcontinues/WIN/YTB22/RATTLE2.WAV
function RollDice({sides}) {

    const [state,setState] = useState({
        die1:"one",
        die2: "three",
        rolling: false,
        totalScore: 4,
    });

    const {die1, die2, rolling, totalScore} = state;

    const roll = () => {
        const newDie1 = sides[Math.floor(Math.random() * sides.length)];
        const newDie2 = sides[Math.floor(Math.random() * sides.length)];
        const score1=Object.values(newDie1);
        const score2=Object.values(newDie2);
        setState({
            die1: Object.keys(newDie1),
            die2: Object.keys(newDie2),
            rolling: true,
            totalScore: score1[0]+score2[0],
        })
        const sound = new Howl ({
            src: ["http://cd.textfiles.com/itcontinues/WIN/YTB22/RATTLE2.WAV"],
            html5: true,
        });
        sound.play();
        setTimeout(() => {
            setState((prevState) => ({...prevState, rolling:false}))
        },1000)
    }
    
  return (
    <div className='roll-dice'>
        <div className='container'>
            <Die face={die1} rolling={rolling}></Die>
            <Die face={die2} rolling={rolling}></Die>
        </div>
        <button className='btn' onClick={roll} disabled={rolling}>
            {rolling ? "Rolling..." : "Roll Dice"}
        </button>
        <h2>Total Score: {totalScore}</h2>
    </div>
  )
}

RollDice.defaultProps = {
    sides: [
        {one: 1},
        {two: 2},
        {three: 3},
        {four: 4},
        {five: 5},
        {six: 6},
    ],
}

export default RollDice