import reviews from '@/data/Data'
import { Ireviews } from '@/interface/Interface'
import React from 'react'

export default function Review() {
  return (
    <div>{reviews.map((datadisplay:Ireviews)=>{
    return (<div>{datadisplay.name}{datadisplay.job}<img src={datadisplay.image}></img></div>)
    })}</div>
  )
}

