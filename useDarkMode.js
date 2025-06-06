import { useState, useEffect } from "react";

export default function useDarkMode(defaultMode = "system", storage = "local") {
  const getInitial = () => {
    if (storage === "none") return defaultMode === "dark";
    const stored = window[storage + "Storage"]?.getItem("darkMode");
    if (stored) return stored === "dark";
    if (defaultMode === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return defaultMode === "dark";
  };

  const [dark, setDark] = useState(getInitial);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    if (storage !== "none") {
      window[storage + "Storage"].setItem("darkMode", dark ? "dark" : "light");
    }
  }, [dark]);

  return [dark, setDark];
}
