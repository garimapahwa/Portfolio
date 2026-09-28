import { useEffect, useState } from "react";
import { contactLinks, profile, socials } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import "./Contact.css";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [user, domain] = profile.email.split("@");

  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 2400);
    return () => clearTimeout(id);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <div className="page-body">
      <div className="container">
        <div className="contact__grid">
          <div>
            <Reveal as="p" className="contact__lede">
              Open to interesting conversations, collaborations, and opportunities to build — or host — something
              together.
            </Reveal>

            <Reveal className="contact__email-wrap" delay={1}>
              <a className="contact__email" href={`mailto:${profile.email}`}>
                {user}
                <wbr />@{domain}
              </a>
              <button type="button" className="contact__copy meta" onClick={copy}>
                {copied ? "Copied ✓" : "Copy email"}
              </button>
              <span className="sr-only" role="status">
                {copied ? "Email address copied to clipboard" : ""}
              </span>
            </Reveal>
          </div>

          <Reveal as="ul" className="contact__list" delay={2} aria-label="Elsewhere">
            {contactLinks.map((key) => {
              const s = socials[key];
              return (
                <li key={key}>
                  <a href={s.href} target="_blank" rel="noreferrer">
                    <span className="contact__label">{s.label}</span>
                    <span className="contact__handle meta">{s.handle}</span>
                    <span className="contact__arrow" aria-hidden="true">
                      ↗︎
                    </span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              );
            })}
          </Reveal>
        </div>
      </div>
    </div>
  );
}
