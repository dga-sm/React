import React from "react"

function MiniChal() {

    const [isGoingOut, setIsGoingOut] = React.useState(true)

    function goingOut(){
        setIsGoingOut(prevState => !prevState);
    }

  return (
    <div>
        <h1 onClick={goingOut}>{isGoingOut ? "Yes" : "No"}</h1>
    </div>
  )
}

export default MiniChal
