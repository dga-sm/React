import React from 'react'
import Datas from './data'
// import Card from "./components/card"
// import State from './components/state'
import Joke from './components/jokes'

function App() {

  // const dats = Datas.map(data => {
  //   return (
  //     <div>
  //       <Card 
  //         key={data.id}
  //         data={data}
  //         />
  //     </div>
  //     )
  // })

  const dats2 = Datas.map(data => {
    return (
      <Joke
        key={data.id} 
        setup={data.setup}
        punchline={data.punchline}
      />
    )
  })

  return (
    <div>
      {/* {dats} */}
      {/* <State /> */}.

      {dats2}

    </div>
  )
}

export default App
