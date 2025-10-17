# 🌘 react-tailwind-dark-toggle

A simple, SSR-safe dark mode toggle button component for React + Tailwind apps.

---

## Installation

```bash
npm install react-tailwind-dark-toggle
```

---

## Setup

This component works by toggling a `dark` class on the `<html>` element. For it to work, you must enable Tailwind's class-based dark mode in your React Application.

## `DarkToggle` Props

| Prop          | Type                             | Default    | Description                                                                                                                                     |
| ------------- | -------------------------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `lightIcon`   | `ReactNode`                      | `SVG sun`  | Icon to display when the theme is **dark**, prompting a switch to light mode.                                                                   |
| `darkIcon`    | `ReactNode`                      | `SVG moon` | Icon to display when the theme is **light**, prompting a switch to dark mode.                                                                   |
| `className`   | `string`                         | `""`       | Custom Tailwind or CSS classes to style the button.                                                                                             |
| `storage`     | `"local" \| "session" \| "none"` | `"local"`  | Where to store preference:<br> - `"local"`: uses `localStorage`<br> - `"session"`: uses `sessionStorage`<br> - `"none"`: resets on refresh      |
| `defaultMode` | `"light" \| "dark" \| "system"`  | `"system"` | The initial theme if no preference is stored:<br> - `"light"`: starts light<br> - `"dark"`: starts dark<br> - `"system"`: follows OS preference |

---

## Example Usage

```jsx
import DarkToggle from "react-tailwind-dark-toggle";
import { FiMoon, FiSun } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="flex justify-end p-4 bg-white dark:bg-black">
      <DarkToggle
        lightIcon={<FiSun className="text-yellow-400" size={20} />}
        darkIcon={<FiMoon className="text-blue-900" size={20} />}
        className="p-2 bg-slate-200 dark:bg-gray-800 rounded-lg cursor-pointer"
        storage="session"
        defaultMode="dark"
      />
    </nav>
  );
}
```
