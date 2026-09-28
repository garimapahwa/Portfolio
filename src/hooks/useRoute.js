import { useEffect, useState } from "react";
import { flushSync } from "react-dom";

// "#/" or "" → home, "#/<id>" → that page. Any other hash (#main, #top) is an in-page
// anchor, not a route, so it returns null and the current page stays put.
function parse(hash, ids) {
  if (hash === "" || hash === "#" || hash === "#/") return "home";
  if (!hash.startsWith("#/")) return null;
  const id = hash.slice(2);
  return ids.includes(id) ? id : "home";
}

// Hash routing keeps the site a plain static build (no server rewrites needed).
// `ids` must be a stable (module-level) array.
export function useRoute(ids) {
  const [route, setRoute] = useState(() => parse(window.location.hash, ids) ?? "home");

  useEffect(() => {
    const onChange = () => {
      const next = parse(window.location.hash, ids);
      if (next === null) return;

      const apply = () => {
        setRoute(next);
        window.scrollTo(0, 0);
      };

      // Cross-fade pages and morph the clicked window into the page header where supported.
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (document.startViewTransition && !reduce) {
        document.startViewTransition(() => flushSync(apply));
      } else {
        apply();
      }
    };

    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, [ids]);

  return route;
}
