// Small line illustrations for project cards. Stroke follows the card's text colour.
const motifs = {
  // AR viewfinder around an isometric wireframe cube — Ingrid
  cube: (
    <svg viewBox="0 0 120 120">
      <path className="motif__frame" d="M8 26V8h18M94 8h18v18M112 94v18H94M26 112H8V94" />
      <g className="motif__spin">
        <path d="M60 22 94 41v38L60 98 26 79V41Z" />
        <path d="M26 41 60 60 94 41M60 60v38" />
        <path className="motif__dash" d="M60 22v38M26 79l34-19M94 79 60 60" />
      </g>
    </svg>
  ),
  // Heartbeat trace with an incident blip — Distributed Incident War Room
  pulse: (
    <svg viewBox="0 0 160 80">
      <path className="motif__grid" d="M0 20h160M0 40h160M0 60h160" />
      <polyline
        className="motif__trace"
        pathLength="100"
        points="0,40 34,40 42,40 50,16 60,66 68,28 74,40 104,40 110,40 116,24 122,54 128,40 160,40"
      />
      <circle className="motif__blip" cx="116" cy="24" r="4" />
    </svg>
  ),
  // Chat bubble becomes a checked task — WhatsApp × Notion
  chat: (
    <svg viewBox="0 0 160 80">
      <path d="M8 12h52a6 6 0 0 1 6 6v26a6 6 0 0 1-6 6H26l-12 10v-10h-6a6 6 0 0 1-6-6V18a6 6 0 0 1 6-6Z" />
      <path d="M16 26h36M16 36h24" />
      <path className="motif__arrow" d="M76 34h22m-7-7 7 7-7 7" />
      <rect x="112" y="16" width="36" height="36" />
      <path className="motif__check" pathLength="100" d="m120 34 7 8 14-16" />
    </svg>
  ),
  // Chain blocks decoded into a narrated, plain-English bubble — Docent
  decode: (
    <svg viewBox="0 0 160 80">
      <rect x="6" y="26" width="22" height="22" />
      <rect x="36" y="26" width="22" height="22" />
      <path d="M28 37h8M12 33h10M12 40h6M42 33h10M42 40h6" />
      <path className="motif__arrow" d="M66 37h20m-7-7 7 7-7 7" />
      <path d="M100 14h50a6 6 0 0 1 6 6v28a6 6 0 0 1-6 6h-32l-12 10v-10h-6a6 6 0 0 1-6-6V20a6 6 0 0 1 6-6Z" />
      <path d="M106 28h22M106 38h14" />
      <path className="motif__core" d="M136 29l10 6-10 6Z" />
    </svg>
  ),
  // Broadcast rings — Pind Radio
  radio: (
    <svg viewBox="0 0 120 120">
      <circle className="motif__core" cx="60" cy="60" r="7" />
      <circle className="motif__wave" cx="60" cy="60" r="20" />
      <circle className="motif__wave" cx="60" cy="60" r="20" style={{ animationDelay: "-1s" }} />
      <circle className="motif__wave" cx="60" cy="60" r="20" style={{ animationDelay: "-2s" }} />
      <path d="M60 67v40M48 107h24" />
    </svg>
  ),
};

export default function Motif({ type }) {
  return (
    <div className={`motif motif--${type}`} aria-hidden="true">
      {motifs[type]}
    </div>
  );
}
