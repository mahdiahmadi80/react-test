
import Axios from 'axios'
import { useState } from 'react'
function Fetchdatasend() {
  
  const [name, setName] = useState('')
  const [database, setData] = useState({})

  const downage = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
      console.log(res.data)
     setData(res.data)
    })
  }
  return (


        <div>
        <input type="text" onChange={(event) => setName(event.target.value)} placeholder='nimport name' />
        <button onClick={downage}>ok</button>
        <h1>name is: {database?.name} </h1>
        <h1>age is: {database?.age} </h1>
      </div>


  )
}

export default Fetchdatasend
