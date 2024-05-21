export default function HomeButton() {
  return (
    <a
      className="py-2 px-3 flex rounded-md no-underline hover:bg-btn-background-hover border"
      href="/lookup_words"
      // target="_blank"
      rel="noreferrer"
    >
      Lookup Words
    </a>
  );
}
