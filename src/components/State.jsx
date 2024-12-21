import React from 'react'
import { useState } from 'react'

export default function Stateuse() {

    const [counters, setcounter] =useState(0)
    const [countermax, setcountermax] = useState(0)
    const [countermin, setcountermin] = useState(0)
  
    return (
      <div>
        <h1>{counters}</h1>
        <button onClick={()=>setcounter(counters+1)}>up</button>
        <button onClick={()=>setcounter(counters-1)}>down</button>
  
        <br />
        <br />
        <button onClick={()=> setcountermax(countermax+1)}>{countermax} up</button>
        <button onClick={()=> setcountermin(countermin-1)}>{countermin} down</button>
  
      </div>
  
    )
  }