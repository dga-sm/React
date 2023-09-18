import { useState } from "react"

function StateInObjects() {

    const [bioData, setBioData] = useState({
        firstName: "Dennis",
        lastName: "Sta. Maria",
        phone: "09123",
        email: "ds@a.com",
        isFavorite: false
    })

    function triggerFav(){
        setBioData(prevBioData => ({
                ...prevBioData,
                isFavorite: !prevBioData.isFavorite
        }))
    }

  return (
    <div>
      <h2>Name: {bioData.firstName} {bioData.lastName}</h2>
      <p>Phone No. : {bioData.phone}</p>
      <p>Email: {bioData.email}</p>
      <p className="fav" onClick={triggerFav}>Favorite? {bioData.isFavorite ? "Yes" : "No"}</p>
    </div>
  )
}

export default StateInObjects
