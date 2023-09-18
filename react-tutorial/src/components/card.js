import React from 'react'

function card(props) {

  return (
    <div>
      <img src={`images/${props.data.coverImg}`} alt="img" className='card--img'></img>
      <p>Ratings: {props.data.stats.rating}</p>
      <p>Review Count: {props.data.stats.reviewCount}</p>
      <p>Location: {props.data.location}</p>
      <p>Title: {props.data.title}</p>
      <p>Price: {props.data.price}</p>
      {props.data.openSpots === 0 && <p>SOLD OUT</p>}
    </div>
  )
}

export default card
