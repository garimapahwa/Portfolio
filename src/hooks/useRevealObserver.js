import { useEffect } from "react";

// Marks every [data-reveal] element with data-revealed once it scrolls into view.
// The `js-reveal` class (set in index.html) is what makes elements start hidden,
// so without JS, IntersectionObserver or with reduced motion everything is simply visible.
// Pass the current route so newly rendered pages get observed too.
export function useRevealObserver(route) {
  useEffect(() => {
    if (!document.documentElement.classList.contains("js-reveal")) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.setAttribute("data-revealed", "");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    document.querySelectorAll("[data-reveal]:not([data-revealed])").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [route]);
}
