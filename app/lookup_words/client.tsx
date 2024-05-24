"use client"

import Cooljugator from "@/components/lookup_words/Cooljugator";
import Gtranslate from "@/components/lookup_words/Gtranslate";
import Wordreference from "@/components/lookup_words/Wordreference";
import {atom, useAtom} from "jotai"

const isEngToGreekAtom = atom(true);
const searchInputAtom = atom("");

export function LookupWordsInner() {
  const [isEngToGreek, setIsEngToGreek] = useAtom(isEngToGreekAtom);
  const [searchInput, setSearchInput] = useAtom(searchInputAtom);

  return (
    <div className="flex-1 w-full flex flex-col gap-20 max-w-4xl px-3">
    <main className="flex-1 flex flex-col gap-6">
      <h2 className="font-bold text-4xl mb-4">Lookup Words</h2>
      
      <div className="flex items-center gap-4">
        {isEngToGreek ? "English -> Greek" : "Greek -> English"}
        <button 
          className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
          onClick={() => setIsEngToGreek(isEngToGreek => !isEngToGreek)}
        >
          {isEngToGreek ? "Swap (not implemented)" : "Swap"} 
        </button>
      </div>

      <div className="flex items-center gap-4">
        <input
          className={`rounded-md px-4 py-2 border ${!isEngToGreek ? 'bg-gray-200 text-gray-300' : 'bg-inherit'}`}
          name="word"
          placeholder={isEngToGreek ? 'ex. "walk" or "road"' : 'ex. "τρέχω" or "έξοδος"'}
          disabled={!isEngToGreek}  // Disable input when isEngToGreek is false
          required
          value={searchInput}
          onChange={(e)=>setSearchInput(e.currentTarget.value)}
        />
        <button className="py-2 px-4 rounded-md no-underline bg-blue-100 hover:bg-blue-200">
          Search
        </button>
      </div>
      
      <div className="flex gap-6">
        <Gtranslate word={searchInput} />
        <Wordreference word={searchInput} />
        <Cooljugator word={searchInput} />
      </div> 
    </main>
  </div>
  )

}