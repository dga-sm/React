import boxes from '../data'
import { useState } from 'react'
import Box from './Box'

function BoxChallenge() {

    const [squares, setSquares] = useState(boxes)

    function toggle(id){
      setSquares(prevSquares => {
        return prevSquares.map((square) => {
          return square.id === id ? {...square, on: !square.on} : square
        })
      })
    }
    
    const box = squares.map(square => (
        <Box 
          key={square.id}
          id={square.id}
          on={square.on}
          onClick = {toggle}
        />
    ))

  return (
    <div>
      {box}
    </div>
  )
}

export default BoxChallenge
