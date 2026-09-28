import { experience } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import "./Experience.css";

export default function Experience() {
  return (
    <div className="page-body">
      <div className="container">
        <ol className="exp">
          {experience.map((job, i) => (
            <Reveal as="li" key={`${job.org}-${job.role}`} className="exp__item" delay={i}>
              <div className="exp__when meta">
                <span className="exp__index">E/{String(i + 1).padStart(2, "0")}</span>
                <span>
                  {job.start} — {job.end}
                </span>
                {job.current && (
                  <span className="exp__now">
                    <span className="exp__now-dot" aria-hidden="true" />
                    Current
                  </span>
                )}
              </div>

              <div className="exp__head">
                <h2 className="exp__role">{job.role}</h2>
                <p className="exp__org">{job.org}</p>
                <ul className="exp__stack meta" aria-label="Focus">
                  {job.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>

              <ul className="exp__points">
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </div>
  );
}
