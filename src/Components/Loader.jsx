import React, { useState } from 'react'
import '../Components/loader.css'
export const Loader = ({player, player2, computer, rock, paper, scissors}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [isWinner, setIsWinner] = useState('');
    const [imageWinner, setImageWinner] = useState();
    const [imageLosser, setImageLosser] = useState();

    function getWinner(){
        if(player==='Rock' && computer === 'Scissors' || player==='Paper'&&
            computer==='Rock' || player==='Scissors' && computer === 'Paper') {
            setIsWinner('Player')
            if(player==='Rock'){
                setImageWinner(rock)
                setImageLosser(scissors)
            }
            if(player==='Paper'){
                setImageWinner(paper)
                setImageLosser(rock)
            }
            if(player==='Scissors'){
                setImageWinner(scissors)
                setImageLosser(paper)
            }
        }else if(computer==='Rock' && player === 'Scissors' || computer==='Paper'&&
            player==='Rock' || computer==='Scissors' && player === 'Paper'){
            setIsWinner('Computer')
            if(computer==='Rock'){
                setImageWinner(rock)
                setImageLosser(scissors)
            }
            if(computer==='Paper'){
                setImageWinner(paper)
                setImageLosser(rock)
            }
            if(computer==='Scissors'){
                setImageWinner(scissors)
                setImageLosser(paper)
            }
        }else{
            setIsWinner('Nobody, there is a draw')
            if(player==='Rock'){
                setImageWinner(rock)
                setImageLosser(rock)
            }
            if(player==='Paper'){
                setImageWinner(paper)
                setImageLosser(paper)
            }
            if(player==='Scissors'){
                setImageWinner(scissors)
                setImageLosser(scissors)
            }
        }

    }

    function getWinnerPlayer(){
        if(player==='Rock' && player2 === 'Scissors' || player==='Paper'&&
            player2==='Rock' || player==='Scissors' && player2 === 'Paper') {
            setIsWinner('Player 1')
            if(player==='Rock'){
                setImageWinner(rock)
                setImageLosser(scissors)
            }
            if(player==='Paper'){
                setImageWinner(paper)
                setImageLosser(rock)
            }
            if(player==='Scissors'){
                setImageWinner(scissors)
                setImageLosser(paper)
            }
        }else if(player2==='Rock' && player === 'Scissors' || player2==='Paper'&&
            player==='Rock' || player2==='Scissors' && player === 'Paper'){
            setIsWinner('Player 2')
            if(player2==='Rock'){
                setImageWinner(rock)
                setImageLosser(scissors)
            }
            if(player2==='Paper'){
                setImageWinner(paper)
                setImageLosser(rock)
            }
            if(player2==='Scissors'){
                setImageWinner(scissors)
                setImageLosser(paper)
            }
        }else{
            setIsWinner('Nobody, there is a draw')
            if(player==='Rock'){
                setImageWinner(rock)
                setImageLosser(rock)
            }
            if(player==='Paper'){
                setImageWinner(paper)
                setImageLosser(paper)
            }
            if(player==='Scissors'){
                setImageWinner(scissors)
                setImageLosser(scissors)
            }
        }
    }
    
    (()=>{
        setTimeout(()=>{
            setIsLoading(false)
            if(computer){
                getWinner();
            }else{
                getWinnerPlayer();
            }
        },1000)
    })();
  return (
    <div>
        {isLoading?(
            <span class="loader"></span>
        ):<>
            <h2 className='winner'>Winner: {isWinner}</h2>
            <img src={imageWinner} alt="" />
            <h2>VS</h2>
            <img src={imageLosser}/>
        </>
        }
    </div>
  )
}
