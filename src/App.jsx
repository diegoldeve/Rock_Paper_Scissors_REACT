import { useState } from 'react'
import './App.css'
import { Computer } from './Components/Computer'
import { Player } from './Components/Player'
function App() {
  const [count, setCount] = useState(0)
  const [player, setPlayer] = useState(false)
  const [computer, setComputer] = useState(false)
  const [isSelected, setIsSelected] = useState(false)
  const [game, setGame] = useState(false);
  
  const handlePlayer = () => {
    setIsSelected(true)
    setPlayer(true)
    setComputer(false)
    setGame(true)
  }
  const handleComputer = () => {
    setIsSelected(true)
    setComputer(true)
    setPlayer(false)
    setGame(true)
  }
  const handleMenu = () => {
    setGame(false)
    setPlayer(false)
    setComputer(false)
    setIsSelected(false)
  }
  
  const buttonPlayer = <button onClick={handlePlayer} className='options-select'>PLAYER VS PLAYER</button>
  const buttonComputer = <button onClick={handleComputer} className='options-select'>PLAYER VS COMPUTER</button>
  return (
    <div className="App">
      <h2>Rock Paper Scissors</h2>      
      {!isSelected?buttonPlayer:null}
      {!isSelected?buttonComputer:null}
      {player&&<Player/>}
      {computer&&<Computer/>}
      {game&&(
        <>
          <button onClick={handleMenu} className='back'>Back to menu</button>
        </>
      )}
      
      

    </div>
  )
}

export default App;
