import React, { useEffect, useState } from 'react'
import './App.css';
import SingleCard from './Component/SingleCard';
// import Cards from './Component/Cards';
const cardImages = [
  {'src': './img/helmet-1.png',matched:false },
  {'src' : './img/scroll-1.png',matched:false },
  {'src' : './img/sword-1.png',matched:false },
  {'src' : './img/ring-1.png',matched:false },
  {'src' : './img/potion-1.png',matched:false },
  {'src' : './img/shield-1.png',matched:false },
 
 
];
function App() {
const [ cards,setCards] = useState([]);
const [turn,setTurn] = useState(0);
const [choiceOne, setChoiceOne]= useState(null);
const [choicetwo, setChoicetwo]= useState(null);

 const shuffleCard = () =>{
  const shuffledddCard = [...cardImages, ...cardImages]
  .sort(()=>Math.random() - 0.5)
  .map((card)=>({...card,id:Math.random()}))
  setCards(shuffledddCard);
  setTurn(0);
 }

 const handleChoice =(card)=>{
  choiceOne? setChoicetwo(card):setChoiceOne(card)
}

const resetTurn=()=>{
  setChoiceOne(null)
  setChoicetwo(null)
  setTurn(prevTurns => prevTurns + 1)
}

useEffect(()=>{
if(choiceOne&&choicetwo){
  if(choiceOne.src === choicetwo.src){
      setCards(prevCards=>{return prevCards.map(card=>{
       if(card.src === choiceOne.src){
        return {...card, matched:true}
       }else{
        return card
      }
      })})
    resetTurn()
  }else{

    setTimeout(() =>resetTurn(),1000)
  }
}

},[choiceOne,choicetwo])
 console.log(cards)

  return (
<>
    <div className="App">
   <h1>Magic Match</h1>
   <button className='button' onClick={shuffleCard}>New Game</button>
    {/* <Cards /> */}
    <div className='container'> 
        {
          cards.map( card =>(
            <SingleCard card = {card}
             key={card.id}
             handleChoice={handleChoice}
             flipped={card===choiceOne || card === choicetwo || card.matched}/>
            )
          )
        }
    
     </div>
     <p>Turns:{turn}</p>
    </div>
    </>
  );
}

export default App;
// #|~¬`?