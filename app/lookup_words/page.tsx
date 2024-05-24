import HomeButton from "@/components/HomeButton";
import LookupWordsButton from "@/components/LookupWordsButton";
import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import FetchDataSteps from "@/components/tutorial/FetchDataSteps";
import Header from "@/components/Header";
import { redirect } from "next/navigation";
import Cooljugator from "@/components/lookup_words/Cooljugator";
import Wordreference from "@/components/lookup_words/Wordreference";
import Gtranslate from "@/components/lookup_words/Gtranslate";
import { LookupWordsInner } from "./client";

import Dictionary from "en-dictionary";
import fs from 'fs';
import path from 'path';

let i = 0;

// (async () => {console.log(wordnet.get("3.0"))
//   const dictionary = new Dictionary(wordnet.get("3.0"));
//     await dictionary.init();
// })()

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  const testFunction = async () => {
    "use server"
    console.log('start');
    await new Promise<void>((resolve)=> setTimeout(()=> resolve(), 1000)) // ignore this line, it is just a sleep (replace this with whatever async call you need to do )
    const wordnet_str = "./en-wordnet-3_0";
    const dictionary = new Dictionary(wordnet_str);
    await dictionary.init();
    // try {
    //   const files = await fs.promises.readdir(wordnet_str);
    //   console.log("Files in directory:", files);
    // } catch (error) {
    //   console.error("Error reading directory:", error);
    // }
    let result = dictionary.searchFor(["yet"]);
    console.log(result);

    console.log('end');
    return String(i++)
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <div className="w-full">
        <div className="py-6 font-bold bg-violet-300 text-violet-900 text-center">
          This is a protected page that you can only see as an authenticated
          user
        </div>
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
            <div className="flex">
              <HomeButton />
              <LookupWordsButton />
            </div>
            <AuthButton />
          </div>
        </nav>
      </div>

      <LookupWordsInner someFunction={testFunction}/>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Powered by{" "}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Supabase
          </a>
        </p>
      </footer>
    </div>
  );
}
