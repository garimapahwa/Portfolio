import { useState } from "react";
import { log, socials } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import "./Log.css";

const FILTERS = { Demo: "Demos", Post: "Posts", Writing: "Writing" };
const dateLabel = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
const cta = (type) => (type === "Demo" ? "Watch" : "Read");

export default function Log() {
  const [filter, setFilter] = useState("All");
  const types = Object.keys(FILTERS).filter((t) => log.some((e) => e.type === t));
  const entries = filter === "All" ? log : log.filter((e) => e.type === filter);

  return (
    <div className="page-body">
      <div className="container">
        {/* Filters only appear once there's more than one kind of entry */}
        {types.length > 1 && (
          <div className="log__filters" role="group" aria-label="Filter the log">
            {["All", ...types].map((t) => (
              <button
                key={t}
                type="button"
                className="log__filter meta"
                aria-pressed={filter === t}
                onClick={() => setFilter(t)}
              >
                {FILTERS[t] ?? t}
              </button>
            ))}
          </div>
        )}

        <ul className="log">
          {entries.map((e, i) => (
            <Reveal as="li" key={e.href} className="log__cell" delay={i % 3}>
              <a className="entry" href={e.href} target="_blank" rel="noreferrer">
                <span className="entry__meta meta">
                  <span className="entry__type">{e.type}</span>
                  <span>{e.where}</span>
                  {e.date && <time dateTime={e.date}>{dateLabel.format(new Date(e.date))}</time>}
                </span>
                <span className="entry__text">{e.text}</span>
                <span className="entry__cta meta">
                  {cta(e.type)} <span aria-hidden="true">↗︎</span>
                </span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </Reveal>
          ))}
        </ul>

        <a className="log__more" href={socials.twitter.href} target="_blank" rel="noreferrer">
          More demos & posts on X <span aria-hidden="true">↗︎</span>
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </div>
  );
}
