import type { ReactNode } from "react";
import useDarkMode from "./useDarkMode";

type DarkToggleProps = {
  lightIcon?: ReactNode;
  darkIcon?: ReactNode;
  className?: string;
  storage?: "local" | "session" | "none";
  defaultMode?: "light" | "dark" | "system";
};

const moonIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="#1e40af"
  >
    <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
);

const sunIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#eab308"
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

export default function DarkToggle({
  lightIcon,
  darkIcon,
  className = "",
  storage = "local",
  defaultMode = "system",
}: DarkToggleProps) {
  const [dark, setDark] = useDarkMode(defaultMode, storage);

  return (
    <button
      onClick={() => setDark(!dark)}
      className={`transition p-2 ${className}`}
      aria-label="Toggle dark mode"
    >
      {dark ? lightIcon || sunIcon : darkIcon || moonIcon}
    </button>
  );
}
