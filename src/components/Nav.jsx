import { profile } from "../data/content.js";
import ThemeToggle from "./ThemeToggle.jsx";
import "./Nav.css";

// Sections live on the board, so the bar only carries the name (home) and the theme toggle.
export default function Nav({ route }) {
  return (
    <header className="nav">
      <div className="nav__inner container">
        <a className="nav__brand" href="#/" aria-current={route === "home" ? "page" : undefined}>
          <span className="nav__mark" aria-hidden="true">
            gp
          </span>
          <span className="nav__name">
            {profile.firstName} {profile.lastName}
          </span>
        </a>
        <ThemeToggle />
      </div>
      <div className="nav__progress" aria-hidden="true" />
    </header>
  );
}
