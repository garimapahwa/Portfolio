import { leetcode, socials } from "../data/content.js";
import "./Widgets.css";

export default function LeetCodeStats() {
  return (
    <a className="widget lc" href={socials.leetcode.href} target="_blank" rel="noreferrer">
      <p className="widget__label meta">
        <span>LeetCode</span>
        <span aria-hidden="true">↗</span>
      </p>
      <p className="lc__total">
        {leetcode.solved}
        <span className="meta"> solved</span>
      </p>
      <div className="lc__bar" aria-hidden="true">
        {leetcode.breakdown.map((b) => (
          <span key={b.level} className={`lc__seg lc__seg--${b.tone}`} style={{ flexGrow: b.count }} />
        ))}
      </div>
      <ul className="lc__legend meta">
        {leetcode.breakdown.map((b) => (
          <li key={b.level}>
            <i className={`lc__seg--${b.tone}`} aria-hidden="true" />
            {b.count} {b.level}
          </li>
        ))}
      </ul>
      <span className="sr-only"> (opens LeetCode in a new tab)</span>
    </a>
  );
}
