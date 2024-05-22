import React, { useState } from 'react'

export default function home() {
    const[Counter,setCounter]=useState<number>(0);
    const Inc=()=>{
        setCounter(Counter+1)
    }
    const Dec=()=>{
        setCounter(Counter-1)
       
    }
  return (
    <div>
        <button onClick={Inc}>+</button>
        {Counter}
        <button onClick={Dec}>-</button>
    </div>
  )
}
