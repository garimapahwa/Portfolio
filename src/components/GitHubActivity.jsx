import { useEffect, useState } from "react";
import { githubUsername, socials } from "../data/content.js";
import "./Widgets.css";

// Public, CORS-enabled proxy of the GitHub contribution calendar.
const API = (user) => `https://github-contributions-api.jogruber.de/v4/${user}?y=last`;
const CELL = 11;
const GAP = 3;
const WEEKS_SHOWN = 30;

const dateLabel = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", timeZone: "UTC" });

// Groups days into Sunday-first week columns, padding the first week so rows line up with weekdays.
function toWeeks(days) {
  const padded = [...Array(new Date(days[0].date).getUTCDay()).fill(null), ...days];
  const weeks = [];
  for (let i = 0; i < padded.length; i += 7) weeks.push(padded.slice(i, i + 7));
  return weeks.slice(-WEEKS_SHOWN);
}

const placeholderWeeks = Array.from({ length: WEEKS_SHOWN }, () => Array(7).fill(null));

export default function GitHubActivity() {
  const [state, setState] = useState({ status: "loading" });

  useEffect(() => {
    const controller = new AbortController();
    fetch(API(githubUsername), { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        const days = [...(data.contributions ?? [])].sort((a, b) => a.date.localeCompare(b.date));
        if (!days.length) throw new Error("No contribution data");
        const weeks = toWeeks(days);
        const total = weeks.flat().reduce((sum, d) => sum + (d?.count ?? 0), 0);
        setState({ status: "ready", weeks, total });
      })
      .catch((err) => {
        if (err.name !== "AbortError") setState({ status: "error" });
      });
    return () => controller.abort();
  }, []);

  const weeks = state.status === "ready" ? state.weeks : placeholderWeeks;
  const width = weeks.length * (CELL + GAP) - GAP;
  const height = 7 * (CELL + GAP) - GAP;

  return (
    <a
      className="widget gh"
      href={socials.github.href}
      target="_blank"
      rel="noreferrer"
      aria-busy={state.status === "loading"}
    >
      <p className="widget__label meta">
        <span>GitHub · last {WEEKS_SHOWN} weeks</span>
        <span>
          {state.status === "ready" && (
            <>
              <strong>{state.total}</strong> contributions
            </>
          )}
          {state.status === "loading" && "Loading…"}
          {state.status === "error" && "View profile ↗︎"}
        </span>
      </p>

      <svg
        className="gh__grid"
        data-status={state.status}
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label={
          state.status === "ready"
            ? `GitHub contribution graph: ${state.total} contributions in the last ${WEEKS_SHOWN} weeks`
            : "GitHub contribution graph"
        }
      >
        {weeks.map((week, x) =>
          week.map((day, y) =>
            state.status === "ready" && !day ? null : (
              <rect
                key={`${x}-${y}`}
                x={x * (CELL + GAP)}
                y={y * (CELL + GAP)}
                width={CELL}
                height={CELL}
                rx="1.5"
                style={{ fill: `var(--heat-${day?.level ?? 0})`, "--d": `${(x + y) * 12}ms` }}
              >
                {day && (
                  <title>
                    {day.count} contribution{day.count === 1 ? "" : "s"} · {dateLabel.format(new Date(day.date))}
                  </title>
                )}
              </rect>
            )
          )
        )}
      </svg>

      <p className="gh__legend meta" aria-hidden="true">
        <span>@{githubUsername}</span>
        <span className="gh__scale">
          Less
          {[0, 1, 2, 3, 4].map((l) => (
            <i key={l} style={{ background: `var(--heat-${l})` }} />
          ))}
          More
        </span>
      </p>
      <span className="sr-only"> (opens GitHub in a new tab)</span>
    </a>
  );
}
