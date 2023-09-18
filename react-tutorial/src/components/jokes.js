import React, {useState} from 'react'


function Jokes(props) {

const [isShown, SetIsShown] = useState(false)

function balikLoob(){
  console.log(isShown)
  SetIsShown(prevState => !prevState)
}

  return (
    <div className='jokes'>
      {props.setup && <p>Setup: {props.setup}</p>}
      {isShown && <p>Punchline: {props.punchline}</p>}
      <button onClick={balikLoob}>Balik Loob</button>
    </div>
  )
}

export default Jokes
