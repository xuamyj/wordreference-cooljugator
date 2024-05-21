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

export default async function ProtectedPage() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  const doNothing = async () => {
    "use server";

    console.log("hi");
  };

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

      <div className="flex-1 w-full flex flex-col gap-20 max-w-4xl px-3">
        <main className="flex-1 flex flex-col gap-6">
          <h2 className="font-bold text-4xl mb-4">Lookup Words</h2>
          
          <div className="flex items-center gap-4">
            English -> Greek
            <form action={doNothing}>
              <button className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover">
                Swap (not implemented)
              </button>
            </form>
          </div>

          <div className="flex items-center gap-4">
            <input
              className="rounded-md px-4 py-2 bg-inherit border"
              name="email"
              placeholder="run"
              required
            />
            <form action={doNothing}>
              <button className="py-2 px-4 rounded-md no-underline bg-blue-100 hover:bg-blue-200">
                Search
              </button>
            </form>
          </div>
          
          <div className="flex gap-6">
            <Gtranslate />
            <Wordreference />
            <Cooljugator />
          </div> 
          
        </main>
      </div>

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
