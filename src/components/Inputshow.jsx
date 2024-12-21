import { useState } from 'react'

function Inputshow() {
  const [inputvar, setInput] = useState("")



  return (
 
      <div>
        <input type="text" onChange={()=>setInput(event.target.value)}/>
        <h2>{inputvar}</h2>
      </div>
    
  )
}

export default Inputshow
