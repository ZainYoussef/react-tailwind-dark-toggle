import React from "react";
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
      className="h-5 w-5 text-yellow-400"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M10 2a1 1 0 011 1v1.25a1 1 0 11-2 0V3a1 1 0 011-1zm6.364 2.636a1 1 0 10-1.414-1.414L13.95 4.222a1 1 0 101.414 1.414l1.586-1.586zM17 9a1 1 0 100 2h1.25a1 1 0 100-2H17zm-2.05 6.778a1 1 0 10-1.414-1.414l-1.586 1.586a1 1 0 001.414 1.414l1.586-1.586zM10 17a1 1 0 011-1v-1.25a1 1 0 10-2 0V16a1 1 0 011 1zm-6.364-2.636a1 1 0 101.414 1.414l1.586-1.586a1 1 0 00-1.414-1.414l-1.586 1.586zM3 11a1 1 0 100-2H1.75a1 1 0 100 2H3zm2.05-6.778a1 1 0 001.414 1.414l1.586-1.586A1 1 0 006.05 3.636L4.464 5.222z" />
    </svg>
  );

  const defaultDark = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-gray-300"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M17.293 13.293a8 8 0 01-11.586 0 8 8 0 0111.586 0zm1.414-1.414a10 10 0 10-14.142 0 10 10 0 0014.142 0z"
        clipRule="evenodd"
      />
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
