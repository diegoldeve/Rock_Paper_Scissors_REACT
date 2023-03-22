import '../Components/computer.css';
// import { App } from '../App';
import { useState } from 'react';
import scissors from '../assets/sci.png';
import rock from '../assets/rock.png';
import paper from '../assets/paper.png';
import { Loader } from './Loader';

export const Computer = () => {
    const [isSelected, setIsSelected] = useState(false)
    const [player, setPlayer] = useState('');
    const [computer, setComputer] = useState('');
    const [isPlayerWin, setIsPlayerWin] = useState();
    const [isFinished, setIsFinished] = useState(false);

    function handleSelectRock(){
      setPlayer('Rock')
      setIsSelected(true);
      selectComputer();
      setTimeout(()=>{
        setIsSelected(false)
        chooseWinner();
      },2500)
    }
    function handleSelectPaper(){
      setPlayer('Paper')
      setIsSelected(true);
      selectComputer();
      setTimeout(()=>{
        setIsSelected(false)
        chooseWinner();
      },2500)
    }
    function handleSelectScissors(){
      setPlayer('Scissors')
      setIsSelected(true);
      selectComputer();
      setTimeout(()=>{
        setIsSelected(false)
        chooseWinner();
      },2500)
    }

    

    function selectComputer(){
      let select = Math.floor(Math.random()*3);
      if(select === 0) setComputer('Rock')
      if(select === 1) setComputer('Paper')
      if(select === 2) setComputer('Scissors')

    }
    
    function chooseWinner(){
     // setIsFinished(true);
      
    }
    
    
  return (

    <div>
        {!isSelected&&(
        <>
        <h3>Player, choose an option</h3>
        <section className="options">
          {/* poner input type button */}
          <button className='btn-option' onClick={handleSelectRock}>
            <div className="options-container">
              <img src={rock} alt="rock" />
              <p>Rock</p>
            </div>
          </button>
          <button className='btn-option' onClick={handleSelectPaper}>
            <div className="options-container">
            <img src={paper} alt="paper" />
              <p>Paper</p>
            </div>
          </button>
          <button className='btn-option' onClick={handleSelectScissors}>
            <div className="options-container">
            <img src={scissors} alt="scissors" />
            <p>Scissors</p>
            </div>
          </button>
        </section>
        </>)}
        {isSelected&&(
          <>           
            <Loader
              player = {player}
              computer = {computer}
              scissors = {scissors}
              rock = {rock}
              paper = {paper}
            />
          </>
        )}
        
        
    </div>
  )
}
