import { useEffect, useState } from "react";

const STORAGE_KEY = "gp-theme";
const THEME_COLORS = { light: "#f5f5f3", dark: "#121212" };

const readTheme = () => (document.documentElement.dataset.theme === "dark" ? "dark" : "light");

export function useTheme() {
  const [theme, setTheme] = useState(readTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", THEME_COLORS[theme]);
  }, [theme]);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable (private mode); the toggle still works for this visit.
    }
  };

  return [theme, toggle];
}
