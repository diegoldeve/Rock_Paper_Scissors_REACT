import React, { useState } from 'react'
import '../Components/player.css'
import scissors from '../assets/sci.png';
import rock from '../assets/rock.png';
import paper from '../assets/paper.png';
import { Loader } from './Loader';
export const Player = () => {

  const [playerOne, setPlayerOne] = useState(true);
  const [playerSecond, setPlayerSecond] = useState(false);
  const [selectOne,setSelectOne] = useState('')
  const [selectTwo,setSelectTwo] = useState('')
  const [isFinished, setIsFinished] = useState(false);

    //player 1
  function handleRock1(){
    setPlayerOne(false)
    setPlayerSecond(true)
    setSelectOne('Rock')
  }
  function handlePaper1(){
    setPlayerOne(false)
    setPlayerSecond(true)
    setSelectOne('Paper')

  }
  function handleScissors1(){
    setPlayerOne(false)
    setPlayerSecond(true)
    setSelectOne('Scissors')

  }
  //player 2
  function handleRock2(){
    setPlayerOne(true)
    setPlayerSecond(false)
    setSelectTwo('Rock')
    setIsFinished(true);
  }
  function handlePaper2(){
    setPlayerOne(true)
    setPlayerSecond(false)
    setSelectTwo('Paper')
    setIsFinished(true)
  }
  function handleScissors2(){
    setPlayerOne(true)
    setPlayerSecond(false)
    setSelectTwo('Scissors')
    setIsFinished(true)
  }
  //game finished
  (()=>{
    if(isFinished){
      console.log(`Player 1: ${selectOne}\nPlayer 2: ${selectTwo}`)
      setTimeout(()=>{
        setIsFinished(false);
      },2000)
    }
  })()

  return (
    <div>
      {/* <h2>Player 1 select an option</h2>
      <section className="options">
          <button className='btn-option' onClick={handleRock} >
            <div className="options-container">
              <img src={rock} alt="rock" />
              <p>Rock</p>
            </div>
          </button>
          <button className='btn-option' >
            <div className="options-container">
            <img src={paper} alt="paper" />
              <p>Paper</p>
            </div>
          </button>
          <button className='btn-option' >
            <div className="options-container">
            <img src={scissors} alt="scissors" />
            <p>Scissors</p>
            </div>
          </button>
        </section> */}
          {isFinished?
            <>
              <Loader
                player = {selectOne}
                player2= {selectTwo}
                rock = {rock}
                paper = {paper}
                scissors = {scissors}
              />
            </>:
            <>
              {
          playerOne?
          <>
            <h2>Player 1 select an option</h2>
      <section className="options">
          {/* poner input type button */}
          <button className='btn-option' onClick={handleRock1} >
            <div className="options-container">
              <img src={rock} alt="rock" />
              <p>Rock</p>
            </div>
          </button>
          <button className='btn-option' onClick={handlePaper1} >
            <div className="options-container">
            <img src={paper} alt="paper" />
              <p>Paper</p>
            </div>
          </button>
          <button className='btn-option' onClick={handleScissors1} >
            <div className="options-container">
            <img src={scissors} alt="scissors" />
            <p>Scissors</p>
            </div>
          </button>
        </section>
          </>:
          <>
          <h2>Player 2 select an option</h2>
      <section className="options">
          {/* poner input type button */}
          <button className='btn-option2' onClick={handleRock2} >
            <div className="options-container">
              <img src={rock} alt="rock" />
              <p>Rock</p>
            </div>
          </button>
          <button className='btn-option2' onClick={handlePaper2}>
            <div className="options-container">
            <img src={paper} alt="paper" />
              <p>Paper</p>
            </div>
          </button>
          <button className='btn-option2' onClick={handleScissors2}>
            <div className="options-container">
            <img src={scissors} alt="scissors" />
            <p>Scissors</p>
            </div>
          </button>
        </section>
          </>        
        }
            </>
          }
        
    </div>
  )
}
