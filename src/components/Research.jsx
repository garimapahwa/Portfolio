import { research } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import "./Research.css";

export default function Research() {
  return (
    <div className="page-body">
      <div className="container">
        <ol className="papers">
          {research.map((paper, i) => (
            <Reveal as="li" key={paper.href} className="paper" delay={i}>
              <a className="paper__link" href={paper.href} target="_blank" rel="noreferrer">
                <span className="paper__num" aria-hidden="true">
                  [{i + 1}]
                </span>
                <div className="paper__body">
                  <h2 className="paper__title">{paper.title}</h2>
                  <p className="paper__summary">{paper.summary}</p>
                </div>
                <div className="paper__meta meta">
                  <span className="paper__type">{paper.type}</span>
                  {paper.venue && <span>{paper.venue}</span>}
                  <span>{paper.publisher}</span>
                </div>
                <span className="paper__arrow" aria-hidden="true">
                  ↗
                </span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </Reveal>
          ))}
        </ol>
      </div>
    </div>
  );
}
