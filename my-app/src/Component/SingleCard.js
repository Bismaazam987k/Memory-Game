import React from 'react'
import '../App.css';

function SingleCard({card,handleChoice,flipped,disabled}) {

    const handleClick=()=>{
      if(!disabled){
        handleChoice(card)
      }

    }
  return (
    <div className={flipped?'flipped':''}>
       <div className='card' >
           <div> 
            <img className='front' src={card.src} alt='hi' />
              <img className='back' src='/img/cover.png' alt='hello'
              onClick={handleClick} />
           </div>
        </div>
   </div> 
  )
}

export default SingleCard
