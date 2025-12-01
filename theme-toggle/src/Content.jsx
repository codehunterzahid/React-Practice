import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export function Content() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: "2rem",
        background: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        minHeight: "200px",
      }}
    >
      <p>This is the content area.</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
