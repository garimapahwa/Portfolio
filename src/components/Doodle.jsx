import "./Doodle.css";

// One shared SVG filter gives every ink line a slightly wobbly, hand-inked edge.
export function SketchDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
      {/* Black & white "colour": diagonal hatching and a dot screen, like pen shading */}
      <pattern id="hatch" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
        <line className="pattern-ink" x1="0" y1="0" x2="0" y2="5" />
      </pattern>
      <pattern id="dots" width="5" height="5" patternUnits="userSpaceOnUse">
        <circle className="pattern-dot" cx="2.5" cy="2.5" r="0.9" />
      </pattern>
      <filter id="sketchy" x="-5%" y="-5%" width="110%" height="110%">
        <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="7" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.4" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>
  );
}

const HEART = "s-9-5.5-9-11a4.5 4.5 0 0 1 9-2 4.5 4.5 0 0 1 9 2c0 5.5-9 11-9 11Z";

// Each doodle: a viewBox, shading "spots" printed slightly off-register, and the ink drawing.
// Elements with className="bob" wiggle when the window is hovered.
const doodles = {
  // A laptop showing </>, a sticky note and a steaming mug
  projects: {
    w: 200,
    h: 160,
    spots: (
      <>
        <rect className="spot--dots" x="66" y="46" width="78" height="56" rx="3" />
        <rect className="spot--hatch" x="135" y="31" width="18" height="18" transform="rotate(8 144 40)" />
        <rect className="spot--tone" x="161" y="104" width="14" height="17" rx="2" />
      </>
    ),
    ink: (
      <>
        <rect x="60" y="42" width="80" height="60" rx="4" />
        <path d="M48 104H152L164 120H36Z" />
        <path d="M90 112H110" />
        <path d="M88 60 78 70l10 10M104 56l-8 28M112 60l10 10-10 10" />
        <g transform="rotate(8 141 37)">
          <rect x="132" y="28" width="18" height="18" />
          <path d="M136 34h9M136 39h6" />
        </g>
        <path d="M158 102h16v14a4 4 0 0 1-4 4h-8a4 4 0 0 1-4-4ZM174 106a5 5 0 0 1 0 9" />
        <path className="bob" d="M163 96q-3-5 0-9t0-8M169 96q-3-5 0-9t0-8" />
        <path d="M20 120H184" />
      </>
    ),
  },

  // Stairs up to a flag, one small figure mid-climb, and a sun
  experience: {
    w: 160,
    h: 200,
    spots: (
      <>
        <circle className="spot--dots" cx="43" cy="53" r="14" />
        <path className="spot--hatch" d="M129 55l21 8-21 8Z" />
        <ellipse className="spot--tone" cx="90" cy="115" rx="5" ry="7" />
      </>
    ),
    ink: (
      <>
        <circle cx="40" cy="50" r="12" />
        <path d="M40 31v-6M59 50h6M53 37l4-4M27 37l-4-4" />
        <path d="M16 176H48V150H76V124H104V98H140" />
        <path d="M126 98V50" />
        <path className="bob" d="M126 52l20 8-20 8" />
        <circle cx="88" cy="100" r="7" />
        <path d="M88 107q1 5 0 10M88 116l-5 8M88 116l6 8M88 110l10-7" />
        <path d="M16 176H146" />
      </>
    ),
  },

  // A camera mid-flash, with a polaroid tucked beside it
  moments: {
    w: 200,
    h: 150,
    spots: (
      <>
        <circle className="spot--hatch" cx="104" cy="90" r="20" />
        <circle className="spot--dots" cx="140" cy="66" r="10" />
        <rect className="spot--tone" x="28" y="74" width="24" height="21" transform="rotate(-12 40 84)" />
      </>
    ),
    ink: (
      <>
        <rect x="56" y="56" width="96" height="62" rx="8" />
        <path d="M80 56v-8h30v8" />
        <circle cx="100" cy="87" r="21" />
        <circle cx="100" cy="87" r="11" />
        <rect x="132" y="64" width="12" height="8" rx="1" />
        <rect x="62" y="50" width="12" height="6" rx="1" />
        <path className="bob" d="M151 59l9-7M153 68h11M146 54l3-10" />
        <g transform="rotate(-12 39 88)">
          <rect x="24" y="70" width="30" height="37" />
          <rect x="27" y="73" width="24" height="23" />
        </g>
      </>
    ),
  },

  // A paper with a car caught in a detection box, under a magnifying glass
  research: {
    w: 160,
    h: 200,
    spots: (
      <>
        <rect className="spot--hatch" x="46" y="70" width="28" height="11" />
        <circle className="spot--tone" cx="119" cy="151" r="14" />
        <rect className="spot--dots" x="45" y="140" width="52" height="7" />
      </>
    ),
    ink: (
      <>
        <path d="M30 28H112L132 48V172H30Z" />
        <path d="M112 28V48H132" />
        <rect className="dashed" x="44" y="81" width="74" height="40" />
        <path d="M50 75h14" />
        <path d="M52 112H110V104L102 102 94 92H68L60 102 52 104Z" />
        <path d="M81 93v9" />
        <circle cx="66" cy="113" r="5" />
        <circle cx="98" cy="113" r="5" />
        <path d="M44 134H104M44 144H90M44 154H98" />
        <g className="bob">
          <circle cx="116" cy="148" r="15" />
          <path className="thick" d="M127 159l15 17" />
        </g>
      </>
    ),
  },

  // Someone mid-thought, their thought cloud holding a play button (demos, posts, notes)
  log: {
    w: 200,
    h: 150,
    spots: (
      <>
        <path
          className="spot--dots"
          d="M125 61a11 11 0 0 1 6-20 15 15 0 0 1 27-6 13 13 0 0 1 21 10 11 11 0 0 1-2 21Z"
        />
        <circle className="spot--hatch" cx="79" cy="104" r="4.5" />
        <path className="spot--tone" d="M36 142Q66 122 96 142Z" />
      </>
    ),
    ink: (
      <>
        <circle cx="64" cy="96" r="24" />
        <path className="ink-fill" d="M40 92C38 70 58 60 72 66 84 70 90 80 88 90 80 82 66 80 56 86 50 90 44 94 40 92Z" />
        <circle className="ink-fill" cx="74" cy="95" r="2" />
        <path d="M70 106q5 4 10 0" />
        <path d="M30 142Q64 116 98 142" />
        <circle cx="98" cy="76" r="3" />
        <circle cx="110" cy="64" r="5" />
        <g className="bob">
          <path d="M122 58a11 11 0 0 1 6-20 15 15 0 0 1 27-6 13 13 0 0 1 21 10 11 11 0 0 1-2 21Z" />
          <path className="ink-fill" d="M143 40 156 47.5 143 55Z" />
        </g>
      </>
    ),
  },

  // An envelope sealed with a heart, and a paper plane escaping the frame
  contact: {
    w: 200,
    h: 150,
    spots: (
      <>
        <rect className="spot--tone" x="52" y="64" width="104" height="66" rx="3" />
        <path className="spot--hatch" d={`M98 104${HEART}`} />
        <path className="spot--dots" d="M153 36 193 26 165 54Z" />
      </>
    ),
    ink: (
      <>
        <rect x="46" y="58" width="104" height="66" rx="3" />
        <path d="M46 60 98 96 150 60M46 122 84 90M150 122 112 90" />
        <path d={`M98 104${HEART}`} />
        <path className="dashed" d="M40 40C70 14 110 16 146 34" />
        <g className="bob">
          <path d="M150 32 190 22 162 50 159 39Z" />
          <path d="M159 39 190 22" />
        </g>
      </>
    ),
  },
};

// Frame inset as a percentage of the doodle, so overlays can sit exactly inside the drawn frame.
export const FRAME_INSET = 8;
export function frameInset(id) {
  const d = doodles[id];
  return { x: `${(FRAME_INSET / d.w) * 100}%`, y: `${(FRAME_INSET / d.h) * 100}%` };
}

export default function Doodle({ id }) {
  const d = doodles[id];
  if (!d) return null;
  const inset = FRAME_INSET;

  return (
    <svg className={`doodle doodle--${id}`} viewBox={`0 0 ${d.w} ${d.h}`} aria-hidden="true" focusable="false">
      <rect className="doodle__paper" x={inset} y={inset} width={d.w - inset * 2} height={d.h - inset * 2} />
      <g className="doodle__spots">{d.spots}</g>
      <g className="doodle__ink" filter="url(#sketchy)">
        <rect className="doodle__frame" x={inset} y={inset} width={d.w - inset * 2} height={d.h - inset * 2} />
        <rect
          className="doodle__frame doodle__frame--echo"
          x={inset + 1.5}
          y={inset - 1.5}
          width={d.w - inset * 2 - 1}
          height={d.h - inset * 2 + 1}
        />
        {d.ink}
      </g>
    </svg>
  );
}
