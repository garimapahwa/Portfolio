import { useTheme } from "../hooks/useTheme.js";

export default function ThemeToggle() {
  const [theme, toggle] = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle meta"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <span className="theme-toggle__orb" aria-hidden="true" />
      <span className="theme-toggle__label" aria-hidden="true">
        {isDark ? "Dark" : "Light"}
      </span>
    </button>
  );
}
