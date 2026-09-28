import ThemeToggle from "./ThemeToggle.jsx";
import "./Nav.css";

// Sections live on the board and the name is on the page, so the bar only carries the theme toggle.
export default function Nav() {
  return (
    <header className="nav">
      <div className="nav__inner container">
        <ThemeToggle />
      </div>
      <div className="nav__progress" aria-hidden="true" />
    </header>
  );
}
