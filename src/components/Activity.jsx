import Reveal from "./Reveal.jsx";
import GitHubActivity from "./GitHubActivity.jsx";
import LeetCodeStats from "./LeetCodeStats.jsx";
import "./Widgets.css";

// GitHub + LeetCode, shown as a small strip at the end of the Projects page.
export default function Activity() {
  return (
    <section className="activity" aria-labelledby="activity-title">
      <h2 id="activity-title" className="activity__title script">
        code activity
      </h2>
      <Reveal className="activity__grid">
        <GitHubActivity />
        <LeetCodeStats />
      </Reveal>
    </section>
  );
}
