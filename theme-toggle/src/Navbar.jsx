import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export function Navbar() {
  const { theme } = useContext(ThemeContext);

  return (
    <nav
      style={{
        padding: "1rem",
        background: theme === "light" ? "#eee" : "#333",
        color: theme === "light" ? "#333" : "#eee",
      }}
    >
      <h2>My App Navbar</h2>
    </nav>
  );
}
