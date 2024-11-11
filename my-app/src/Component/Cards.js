import React, { useState } from 'react'
import '../App.css';
import Photo from './1card';
function Cards() {
    const [cards, setCards] = useState([
      {id : 0, name : 'apple', status : '' ,img:'./assets/img3.png'},
      {id : 0, name : 'apple', status : '' ,img:'./assets/img3.png'},
      {id : 1, name : 'Pineapple', status : '' ,img:'./assets/img4.png'},
      {id : 1, name : 'pineapple', status : '' ,img:'./assets/img4.png'},
      {id : 2, name : 'orange', status : '' ,img:'./assets/img3.jpj.jpg'},
      {id : 2, name : 'orange', status : '' ,img:'./assets/img3.jpj.jpg'},
      {id : 3, name : 'strawbery', status : '' ,img:'./assets/img10.png'},
      {id : 3, name : 'strawbery', status : '' ,img:'./assets/img10.png'},
      {id : 4, name : 'kiwi', status : '' ,img:'./assets/img5.png'},
      {id : 4, name : 'kiwi', status : '' ,img:'./assets/img5.png'},
      {id : 5, name : 'mango', status : '' ,img:'./assets/img7.png'},
      {id : 5, name : 'mango', status : '' ,img:'./assets/img7.png'},
      {id : 6, name : 'grapes', status : '' ,img:'./assets/img8.png'},
      {id : 6, name : 'grapes', status : '' ,img:'./assets/img8.png'},
      {id : 7, name : 'watermellon', status : '' ,img:'./assets/img9.png'},
      {id : 7, name : 'watermellon', status : '' ,img:'./assets/img9.png'}

       
    ])
  return (
    <div className='container'>
      {
        cards.map((card,index)=>{
          return <Photo  card={card}/>
           
        }

        )
      }
    </div>
  )
}

export default Cards
