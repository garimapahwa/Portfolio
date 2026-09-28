import { sections } from "../data/content.js";
import Doodle, { frameInset } from "./Doodle.jsx";
import Reveal from "./Reveal.jsx";
import "./Board.css";

// The home page: an intro row (`children`) above the wall of windows — each window opens a section's page.
export default function Board({ children }) {
  return (
    <section className="board" aria-labelledby="board-title">
      <div className="container">
        {children}

        <div className="board__wall">
          <div className="board__head">
            <h2 id="board-title" className="board__title script">
              peek through a window
            </h2>
            <svg className="board__arrow" viewBox="0 0 60 40" aria-hidden="true">
              <path d="M4 8C18 4 34 10 40 30M40 30l-9-4M40 30l3-9" />
            </svg>
          </div>

          <ul className="board__grid">
            {sections.map((s, i) => {
              const inset = frameInset(s.id);
              return (
                <Reveal as="li" key={s.id} className="board__item" delay={i}>
                  <a className="card" href={`#/${s.id}`}>
                    <span className="sr-only">{s.label}</span>
                    <span
                      className="card__frame"
                      style={{ viewTransitionName: `window-${s.id}`, "--inset-x": inset.x, "--inset-y": inset.y }}
                    >
                      <Doodle id={s.id} />
                      {/* On hover a see-through veil fills the window and the name types itself out */}
                      <span className="card__veil" aria-hidden="true">
                        <span className="card__type">
                          {[...s.label].map((ch, k) => (
                            <span key={k} className="card__ch" style={{ "--i": k }}>
                              {ch === " " ? "\u00a0" : ch}
                            </span>
                          ))}
                          <span className="card__caret" />
                        </span>
                      </span>
                    </span>
                    <span className="card__caption" aria-hidden="true">
                      <span className="card__lines">
                        <i />
                        <i />
                      </span>
                      <span className="card__touch-label">{s.label}</span>
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </ul>

          {/* A little paper plane drifting over the board, like a doodle in the margin */}
          <svg className="board__plane" viewBox="0 0 80 50" aria-hidden="true">
            <g filter="url(#sketchy)">
              <path d="M4 22 76 4 34 44 30 28Z" />
              <path d="M30 28 76 4M30 28l-4 12 8-6" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
