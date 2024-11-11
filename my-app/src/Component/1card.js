import React from 'react'

function Photo({card}) {
  return (
    <div>
      <img src={card.img} alt={card.id}/>
    </div>
  )
}

export default Photo
