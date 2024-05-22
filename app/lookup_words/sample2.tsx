"use client"

import Cooljugator from "@/components/lookup_words/Cooljugator";
import {atom, useAtom} from "jotai"

const randomBoolAtom = atom(true);

export function LookupWordsInner() {
  const [randomBool, setRandomBool] = useAtom(randomBoolAtom);
  return (<div onClick={()=>{
    console.log('where is this happening? ')
    setRandomBool(!randomBool)
  }}><Cooljugator word={String(randomBool)}/></div>)
}