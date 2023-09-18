import {useState, useEffect} from 'react'

function Effect() {

    const [starWarsData, setStarWarsData] = useState({})
    const [count, setCount] = useState(1)

    useEffect(() => {
        console.log('the count changes')
        fetch (`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [count])

    function addCount(){
        setCount(prevCount => prevCount + 1)
    }

    console.log(starWarsData)

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addCount}>Add</button>
    </div>
  )
}

export default Effect
