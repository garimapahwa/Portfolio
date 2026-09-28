# Garima Pahwa — Portfolio

React + Vite, plain CSS. The home page is a board of hand-drawn windows — Projects, Log, Experience,
Moments, Research, Contact — and each window opens its own page (`#/projects`, …).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static output in dist/
```

Vercel auto-detects Vite. Pages use hash routes, so no rewrite config is needed.

## Editing content

All copy, links, projects, papers and reel photos live in [`src/data/content.js`](src/data/content.js).
Components only handle presentation.

- **Log (demos, X posts, writing):** add one entry at the top of `log` —
  `{ type: "Demo" | "Post" | "Writing", text, where, href, date }`. Filters appear automatically
  once there's more than one type.
- **Moments reel:** drop a photo in `public/images/reel/` and add `{ src, w, h, title, tag }` to `moments`.
- **LeetCode:** the numbers are a hand-updated snapshot in `leetcode` (LeetCode has no CORS-friendly API).
- **Windows:** each entry in `sections` becomes a window and a page. Its doodle lives in
  `components/Doodle.jsx` and its page body is mapped in `components/Page.jsx`.
- **GitHub:** the contribution grid is fetched live from `github-contributions-api.jogruber.de` and falls back to a link if it's unavailable.

## Structure

```
src/
  data/content.js      all portfolio content
  hooks/               hash routing, theme, scroll reveal, local clock
  components/          Home (Hero + Board), Page, Doodle, and one body per section
  styles/tokens.css    colour, type and spacing tokens (light + dark)
  styles/base.css      reset, focus states, reveal animation
```

The previous static site is kept in `legacy/` for reference.
