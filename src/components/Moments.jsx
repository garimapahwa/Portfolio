import { useState } from "react";
import { moments } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import "./Moments.css";

const half = Math.ceil(moments.length / 2);
const rows = [
  { items: moments.slice(0, half), start: 0, reverse: false },
  { items: moments.slice(half), start: half, reverse: true },
];

function Frame({ moment, number, decorative }) {
  return (
    <figure className="frame">
      <img
        src={moment.src}
        width={moment.w}
        height={moment.h}
        alt={decorative ? "" : moment.title}
        decoding="async"
        draggable="false"
      />
      <figcaption>
        <span className="frame__meta meta">
          No.{String(number).padStart(2, "0")} — {moment.tag}
        </span>
        <span className="frame__title">{moment.title}</span>
      </figcaption>
    </figure>
  );
}

export default function Moments() {
  const [paused, setPaused] = useState(false);

  return (
    <div className="page-body">
      <div className="container">
        <Reveal className="moments__bar">
          <button
            type="button"
            className="moments__toggle meta"
            aria-pressed={paused}
            onClick={() => setPaused((p) => !p)}
          >
            <span className="moments__toggle-icon" data-paused={paused || undefined} aria-hidden="true" />
            {paused ? "Play reel" : "Pause reel"}
          </button>
        </Reveal>
      </div>

      <Reveal className="reel" data-paused={paused || undefined} delay={1}>
        {rows.map((row, r) => (
          <div key={r} className={`reel__row${row.reverse ? " reel__row--reverse" : ""}`}>
            <div className="reel__track">
              {[false, true].map((duplicate) => (
                <div key={String(duplicate)} className="reel__group" aria-hidden={duplicate || undefined}>
                  {row.items.map((m, i) => (
                    <Frame key={m.src} moment={m} number={row.start + i + 1} decorative={duplicate} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </Reveal>
    </div>
  );
}
