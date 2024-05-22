"use client"

import { useState } from "react"

export function LookupWordsInner() {
  const [randomBool, setRandomBool] = useState(true);
  return (<div onClick={()=>{
    console.log('where is this happening? ')
    setRandomBool(!randomBool)
  }}>{String(randomBool)}</div>)
}