# 🌘 react-tailwind-dark-toggle

A simple dark mode toggle button component for React + Tailwind apps.



Here's a list of all props that can be passed to the `DarkToggle` React component:

---

## `DarkToggle` Props

| Prop          | Type                             | Default    | Description                                                                                                                                                           |
| ------------- | -------------------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `lightIcon`   | `ReactNode`                      | `SVG sun`  | Custom icon for light mode. Can be a React Icon or any JSX element.                                                                                                   |
| `darkIcon`    | `ReactNode`                      | `SVG moon` | Custom icon for dark mode. Can be a React Icon or any JSX element.                                                                                                    |
| `className`   | `string`                         | `""`       | Custom Tailwind or CSS classes to style the button.                                                                                                                   |
| `storage`     | `"local" \| "session" \| "none"` | `"local"`  | Where to store dark mode preference:<br> - `"local"`: uses `localStorage`<br> - `"session"`: uses `sessionStorage`<br> - `"none"`: doesn't persist; resets on refresh |
| `defaultMode` | `"light" \| "dark" \| "system"`  | `"system"` | The default theme when no stored preference exists:<br> - `"light"`: always light<br> - `"dark"`: always dark<br> - `"system"`: follows user's OS preference          |

---

## Example Usage

```jsx
import DarkToggle from "react-tailwind-dark-toggle";
import { FiMoon, FiSun } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="flex justify-end p-4">
      <DarkToggle
        lightIcon={<FiSun className="text-yellow-400" size={20} />}
        darkIcon={<FiMoon className="text-blue-900" size={20} />}
        className="p-2 bg-slate-200 dark:bg-gray-800 rounded-lg"
        storage="local"
        defaultMode="system"
      />
    </nav>
  );
}
```
