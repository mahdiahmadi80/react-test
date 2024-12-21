import Axios from 'axios'
import { useEffect, useState } from 'react'


function Fetchdata() {
  const [catFact, setCat] = useState("")

  useEffect(() => {

    fetchFact( )
  
}, [])


const fetchFact=()=>{
  Axios.get("https://catfact.ninja/fact").then((res) => {
    console.log(res.data)
    setCat(res.data.fact)
  })
}

  return (

    <div>
      <button onClick={fetchFact}>Fetch data</button>
      <p>{catFact}</p>
    </div>

  )
}

export default Fetchdata
