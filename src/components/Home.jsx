import Hero from "./Hero.jsx";
import Board from "./Board.jsx";

// One page: name, role, links and photo sit right above the windows.
export default function Home() {
  return (
    <Board>
      <Hero />
    </Board>
  );
}
