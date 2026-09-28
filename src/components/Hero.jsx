import { heroLinks, profile, socials } from "../data/content.js";
import { useLocalTime } from "../hooks/useLocalTime.js";
import Reveal from "./Reveal.jsx";
import "./Hero.css";

function SplitWord({ text }) {
  return [...text].map((ch, i) => (
    <span key={i} className="hero__char" style={{ "--i": i }}>
      {ch === " " ? " " : ch}
    </span>
  ));
}

export default function Hero() {
  const time = useLocalTime(profile.timeZone);

  return (
    <div className="hero">
      <div className="hero__text">
        <Reveal as="p" className="hero__hello script">
          {profile.greeting}
        </Reveal>

        <h1 id="hero-title" className="hero__name">
          <span className="sr-only">
            {profile.firstName} {profile.lastName}
          </span>
          <span aria-hidden="true">
            <SplitWord text={`${profile.firstName} ${profile.lastName}`} />
          </span>
        </h1>

        <Reveal as="p" className="hero__role meta" delay={3}>
          <span>{profile.role}</span>
          <span aria-hidden="true">·</span>
          <span>{profile.company}</span>
          <span aria-hidden="true">·</span>
          <span>
            {profile.location}, <time>{time}</time> IST
          </span>
        </Reveal>

        <Reveal as="ul" className="hero__links" delay={4} aria-label="Find me elsewhere">
          {heroLinks.map((key) => {
            const s = socials[key];
            const external = !s.href.startsWith("mailto:");
            return (
              <li key={key}>
                <a href={s.href} {...(external && { target: "_blank", rel: "noreferrer" })}>
                  {s.label}
                  <span className="hero__arrow" aria-hidden="true">
                    ↗
                  </span>
                  {external && <span className="sr-only"> (opens in a new tab)</span>}
                </a>
              </li>
            );
          })}
        </Reveal>
      </div>
    </div>
  );
}
