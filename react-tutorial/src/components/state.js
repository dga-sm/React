import React from 'react'

function State() {

    const [res, setRes] = React.useState(0)

    function countPlus(){
        setRes(res + 1)
    }
    
    function countMinus(){
        setRes(rizz => rizz - 1)
    }

  return (
    <div>
      <h1>{res}</h1>
      <button onClick={countPlus}>+</button>
      <button onClick={countMinus}>-</button>
    </div>
  )
}

export default State
