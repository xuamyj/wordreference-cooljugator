export default function HomeButton() {
  return (
    <a
      className="py-2 px-3 flex rounded-md no-underline hover:bg-btn-background-hover border"
      href="/protected"
      // target="_blank"
      rel="noreferrer"
    >
      Home
    </a>
  );
}
