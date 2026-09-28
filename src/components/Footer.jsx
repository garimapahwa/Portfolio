import { profile } from "../data/content.js";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__sign" aria-hidden="true">
          {profile.firstName} {profile.lastName}
          <span className="footer__heart">&lt;3</span>
        </p>
        <div className="footer__row meta">
          <p>
            © {new Date().getFullYear()} {profile.firstName} {profile.lastName} · {profile.location}
          </p>
          <a className="footer__top" href="#top">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
