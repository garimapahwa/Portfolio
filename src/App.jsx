import { useEffect } from "react";
import Nav from "./components/Nav.jsx";
import Home from "./components/Home.jsx";
import Page from "./components/Page.jsx";
import Footer from "./components/Footer.jsx";
import { SketchDefs } from "./components/Doodle.jsx";
import { sections, profile } from "./data/content.js";
import { useRoute } from "./hooks/useRoute.js";
import { useRevealObserver } from "./hooks/useRevealObserver.js";

const SECTION_IDS = sections.map((s) => s.id);
const HOME_TITLE = `${profile.firstName} ${profile.lastName} — ${profile.role}`;

export default function App() {
  const route = useRoute(SECTION_IDS);
  useRevealObserver(route);

  useEffect(() => {
    const section = sections.find((s) => s.id === route);
    document.title = section ? `${section.label} — ${profile.firstName} ${profile.lastName}` : HOME_TITLE;
  }, [route]);

  return (
    <>
      <span id="top" aria-hidden="true" />
      <SketchDefs />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav route={route} />
      <main id="main">{route === "home" ? <Home /> : <Page key={route} id={route} />}</main>
      <Footer />
    </>
  );
}
