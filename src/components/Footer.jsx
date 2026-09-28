import { profile } from "../data/content.js";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__sign" aria-hidden="true">
          {profile.firstName} {profile.lastName}
          <svg className="footer__heart" viewBox="0 0 24 24">
            <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />
          </svg>
        </p>
        <div className="footer__row meta">
          <p>
            © {new Date().getFullYear()} {profile.firstName} {profile.lastName} · {profile.location}
          </p>
          <p>Built with React</p>
          <a className="footer__top" href="#top">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
