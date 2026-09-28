import { projects } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import Motif from "./Motif.jsx";
import Activity from "./Activity.jsx";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="page-body">
      <div className="container">
        <ol className="projects">
          {projects.map((p, i) => (
            <Reveal as="li" key={p.title} className="projects__cell" delay={i % 3}>
              <article className={`project project--${p.tone}`}>
                <div className="project__top">
                  <Motif type={p.motif} />
                  <span className="meta">
                    {String(i + 1).padStart(2, "0")} · {p.kicker}
                  </span>
                </div>

                <h2 className="project__title">{p.title}</h2>
                <p className="project__desc">{p.desc}</p>

                <div className="project__foot">
                  <ul className="project__tags meta" aria-label="Built with">
                    {p.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <span className="project__links">
                    {p.source && (
                      <a className="project__source meta" href={p.source.href} target="_blank" rel="noreferrer">
                        {p.source.label}
                        <span className="sr-only">: {p.title} (opens in a new tab)</span>
                      </a>
                    )}
                    <a className="project__link meta" href={p.link.href} target="_blank" rel="noreferrer">
                      {p.link.label}
                      <span className="sr-only">: {p.title} (opens in a new tab)</span>
                      <span className="project__arrow" aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </ol>

        <Activity />
      </div>
    </div>
  );
}
