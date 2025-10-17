import { useState, useEffect, type Dispatch, type SetStateAction } from "react";

const getInitialState = (
  defaultMode: "light" | "dark" | "system",
  storage: "local" | "session" | "none"
): boolean => {
  if (typeof window === "undefined") {
    return defaultMode === "dark";
  }

  if (storage === "none") {
    if (defaultMode === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return defaultMode === "dark";
  }

  const storedValue =
    storage === "local"
      ? window.localStorage.getItem("darkMode")
      : window.sessionStorage.getItem("darkMode");

  if (storedValue) {
    return storedValue === "dark";
  }

  if (defaultMode === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  return defaultMode === "dark";
};

/**
 * @param {'light' | 'dark' | 'system'} [defaultMode="system"]
 * @param {'local' | 'session' | 'none'} [storage="local"]
 * @returns {[boolean, React.Dispatch<React.SetStateAction<boolean>>]}
 */
export default function useDarkMode(
  defaultMode: "light" | "dark" | "system" = "system",
  storage: "local" | "session" | "none" = "local"
): [boolean, Dispatch<SetStateAction<boolean>>] {
  const [dark, setDark] = useState(() => getInitialState(defaultMode, storage));

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    if (storage === "local") {
      window.localStorage.setItem("darkMode", dark ? "dark" : "light");
    } else if (storage === "session") {
      window.sessionStorage.setItem("darkMode", dark ? "dark" : "light");
    }
  }, [dark, storage]);

  return [dark, setDark];
}
