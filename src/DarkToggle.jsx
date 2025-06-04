import useDarkMode from "./useDarkMode";

export default function DarkToggle({
  lightIcon,
  darkIcon,
  className = "",
  storage = "local",
  defaultMode = "system",
}) {
  const [dark, setDark] = useDarkMode(defaultMode, storage);

  const defaultLight = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-blue-800"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
    </svg>
  );

  const defaultDark = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-yellow-500"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2" />
      <path d="M12 21v2" />
      <path d="M4.22 4.22l1.42 1.42" />
      <path d="M18.36 18.36l1.42 1.42" />
      <path d="M1 12h2" />
      <path d="M21 12h2" />
      <path d="M4.22 19.78l1.42-1.42" />
      <path d="M18.36 5.64l1.42-1.42" />
    </svg>
  );

  return (
    <button
      onClick={() => setDark(!dark)}
      className={`transition p-2 rounded ${className}`}
      aria-label="Toggle dark mode"
    >
      {dark ? lightIcon || defaultLight : darkIcon || defaultDark}
    </button>
  );
}
