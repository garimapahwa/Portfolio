import { useEffect, useRef } from "react";
import { sections } from "../data/content.js";
import Doodle from "./Doodle.jsx";
import Projects from "./Projects.jsx";
import Experience from "./Experience.jsx";
import Moments from "./Moments.jsx";
import Research from "./Research.jsx";
import Log from "./Log.jsx";
import Contact from "./Contact.jsx";
import "./Page.css";

const bodies = {
  projects: Projects,
  experience: Experience,
  moments: Moments,
  research: Research,
  log: Log,
  contact: Contact,
};

// A section's own page, opened from its window on the board.
export default function Page({ id }) {
  const titleRef = useRef(null);
  const section = sections.find((s) => s.id === id);
  const Body = bodies[id];

  // Move focus to the new page's title so keyboard and screen-reader users land in the right place.
  useEffect(() => {
    titleRef.current?.focus({ preventScroll: true });
  }, []);

  return (
    <article className="page" aria-labelledby="page-title">
      <div className="container">
        <a className="page__back" href="#/">
          <span aria-hidden="true">←</span> Back to the board
        </a>

        <header className="page__head">
          <div className="page__doodle" style={{ viewTransitionName: `window-${id}` }}>
            <Doodle id={id} />
          </div>
          <div className="page__intro">
            <p className="page__num script" aria-hidden="true">
              {section.num}.
            </p>
            <h1 id="page-title" ref={titleRef} tabIndex={-1} className="page__title">
              {section.label}
            </h1>
            <p className="page__kicker script">{section.kicker}</p>
          </div>
        </header>
      </div>

      <Body />
    </article>
  );
}
