// All portfolio copy lives here. Components only decide how it looks.

export const profile = {
  firstName: "Garima",
  lastName: "Pahwa",
  role: "Software Engineer",
  company: "Becton Dickinson",
  location: "Bangalore, India",
  coords: "12.97° N, 77.59° E",
  timeZone: "Asia/Kolkata",
  email: "pahwaginni96@gmail.com",
  greeting: "hi there, I'm",
};

export const socials = {
  linkedin: {
    label: "LinkedIn",
    handle: "garima-pahwa",
    href: "https://www.linkedin.com/in/garima-pahwa-68416a22a/",
  },
  github: { label: "GitHub", handle: "@garimapahwa", href: "https://github.com/garimapahwa" },
  twitter: { label: "Twitter / X", handle: "@pahwaginni", href: "https://x.com/pahwaginni" },
  leetcode: { label: "LeetCode", handle: "ginnipahwa05", href: "https://leetcode.com/u/ginnipahwa05/" },
  email: { label: "Email", handle: "pahwaginni96@gmail.com", href: "mailto:pahwaginni96@gmail.com" },
};

export const heroLinks = ["linkedin", "github", "twitter", "email"];
export const contactLinks = ["linkedin", "github", "leetcode", "twitter"];

export const githubUsername = "garimapahwa";

// LeetCode has no CORS-friendly public API, so this is a hand-updated snapshot.
export const leetcode = {
  solved: 218,
  breakdown: [
    { level: "Easy", count: 101, tone: "easy" },
    { level: "Medium", count: 92, tone: "medium" },
    { level: "Hard", count: 25, tone: "hard" },
  ],
};

// Each section is a window on the home board and its own page (#/<id>).
export const sections = [
  { id: "projects", label: "Projects", num: "01", kicker: "Built after hours, at hackathons & out of curiosity" },
  { id: "log", label: "Log", num: "02", kicker: "Demos, posts & writing — what I'm building and thinking" },
  { id: "experience", label: "Experience", num: "03", kicker: "Where I've shipped things, 2024 → now" },
  { id: "moments", label: "Moments", num: "04", kicker: "Hackathons, stages, graduations & the people in between" },
  { id: "research", label: "Research", num: "05", kicker: "Computer vision & multimodal ML, published with Springer Nature" },
  { id: "contact", label: "Contact", num: "06", kicker: "Say hello — the inbox is open" },
];

export const focusAreas = [
  ".NET Core",
  "Microservices",
  "Shared libraries",
  "Helm & DevOps",
  "Applied AI",
  "Computer vision",
  "Multimodal ML",
  "Hackathons",
  "Community",
];

export const experience = [
  {
    role: "Software Engineer",
    org: "Becton Dickinson",
    start: "Jan 2025",
    end: "Present",
    current: true,
    points: [
      "Design and build shared libraries reused across services in a .NET Core microservices architecture, improving scalability and integration efficiency.",
      "Standardise and optimise Helm charts across microservices for consistent, reliable deployments.",
      "Own bug resolution, refactoring and version upgrades — including breaking-change migrations.",
    ],
    stack: [".NET Core", "Microservices", "Helm", "Shared libraries"],
  },
  {
    role: "Research & Development Intern",
    org: "Becton Dickinson",
    start: "May 2024",
    end: "Jul 2024",
    points: ["Built an LSTM-based model that generates Cypress test scripts automatically, cutting manual QA effort."],
    stack: ["LSTM", "Cypress", "Test automation"],
  },
  {
    role: "Student Coordinator Handler",
    org: "Netflix × FICCI × Reskilll",
    start: "Oct 2024",
    end: "Dec 2024",
    points: ["Managed the WAVES Summit trailer-making competition, coordinating 10,000+ participants."],
    stack: ["Community", "Operations", "WAVES Summit"],
  },
];

export const moments = [
  { src: "push-to-prod-hackathon.jpg", w: 1000, h: 668, title: "Push to Prod Hackathon", tag: "Hackathon" },
  { src: "my-time-with-netflix.jpg", w: 902, h: 1000, title: "My time with Netflix", tag: "Netflix" },
  { src: "build-india-hackathon.jpg", w: 952, h: 1000, title: "Build India Hackathon", tag: "Hackathon" },
  { src: "solana-ctf-25.jpg", w: 1000, h: 666, title: "Solana CTF ’25", tag: "CTF" },
  { src: "waves-summit-organizer.jpg", w: 887, h: 1000, title: "Organiser, WAVES Summit", tag: "WAVES" },
  { src: "ideathons.jpg", w: 1000, h: 666, title: "Mentored hackathons — iDEATHONS", tag: "Mentoring" },
  { src: "solana-ctf-26.jpg", w: 1000, h: 562, title: "Solana CTF ’26", tag: "CTF" },
  { src: "graduated-igdtuw.jpg", w: 823, h: 1000, title: "Graduated from IGDTUW", tag: "Graduation" },
  { src: "podcast.jpg", w: 754, h: 1000, title: "Podcast production", tag: "Podcast" },
  { src: "agentic-ethereum-hackathon.jpg", w: 1000, h: 666, title: "Agentic Ethereum Hackathon", tag: "Hackathon" },
  { src: "met-satya-nadella.jpg", w: 1000, h: 962, title: "Met Satya Nadella", tag: "Tech event" },
  { src: "cricket-captain.jpg", w: 1000, h: 562, title: "Winning cricket team captain", tag: "Off duty" },
  { src: "bhangrathon.jpg", w: 1000, h: 666, title: "Hosted Bhangrathon — 60 participants", tag: "Community" },
  { src: "community-event.jpg", w: 1000, h: 627, title: "Community event — Arpit, Sunny & Ankush", tag: "Community" },
  { src: "got-my-degree.jpg", w: 1000, h: 971, title: "Received my degree", tag: "Graduation" },
  { src: "mentored-students.jpg", w: 750, h: 1000, title: "Mentored students", tag: "Mentoring" },
].map((m) => ({ ...m, src: `/images/reel/${m.src}` }));

// `source` is optional: a secondary link (e.g. GitHub) shown next to the main one.
export const projects = [
  {
    title: "Docent",
    kicker: "Solana · Explainers",
    desc: "Paste any Solana transaction signature and get a plain-English explanation of what happened — transfers, balance changes, even failures — plus a narrated video walkthrough.",
    tags: ["Next.js", "Solana web3.js", "Remotion", "ElevenLabs"],
    link: { label: "Try it live", href: "https://docent-kohl.vercel.app/" },
    source: { label: "Source", href: "https://github.com/garimapahwa/docent" },
    tone: "lined",
    motif: "decode",
  },
  {
    title: "Ingrid",
    kicker: "AR / VR · Proptech",
    desc: "A 3D rental platform that stitches a chatbot, a backend and a Unity AR/VR app together so renters can tour a property without being there.",
    tags: ["Unity", "AR/VR", "Chatbot"],
    link: { label: "Source on GitHub", href: "https://github.com/singhalshreya/Polaroid_Ingrid" },
    tone: "gray",
    motif: "cube",
  },
  {
    title: "Pind Radio",
    kicker: "Web audio · Realtime",
    desc: "A browser-based Punjabi music radio — one page, one play button, a live listener count and a continuous stream of the songs that sound like home.",
    tags: ["Web Audio", "Realtime", "Radio"],
    link: { label: "Tune in live", href: "https://punjabiagyeoye.vercel.app/" },
    tone: "dark",
    motif: "radio",
  },
];

export const research = [
  {
    title: "Multimodal Sentiment Analysis of English and Hinglish Memes",
    summary:
      "Reading the image and the caption together to classify meme sentiment — in English and in code-mixed Hinglish.",
    venue: "Multimedia Tools and Applications",
    publisher: "Springer Nature",
    type: "Journal article",
    href: "https://link.springer.com/epdf/10.1007/s11042-024-19640-8?sharing_token=X76bNQ6UCC7nHA6534WwWPe4RwlQNchNByi7wbcMAY7gV31p6hZESq2vBVR6m8Hs9lvtUC1Xr5lFcl4seIIDUX5ktS6hCzRQpn5JzZM7j4sxmEIyQ_u66Wwz6kMmmm7V1MWjq2eMGgsZIWiWyG9EJzhrZco13Ga5bvNu-ZEBYPw%3D",
  },
  {
    title: "A Systematic Review: Object Detection",
    summary: "A structured survey of object-detection methods — architectures, benchmarks and where the field is heading.",
    venue: "AI & Society",
    publisher: "Springer Nature",
    type: "Journal article",
    href: "https://link.springer.com/article/10.1007/s00146-025-02372-0",
  },
  {
    title: "Object Detection on Pascal VOC: A Comprehensive Evaluation of Cutting-Edge YOLO Models",
    summary: "YOLOv8, YOLOv9 and YOLOv10 benchmarked head-to-head on Pascal VOC.",
    publisher: "Springer Nature",
    type: "Book chapter",
    href: "https://link.springer.com/chapter/10.1007/978-3-032-03072-6_30",
  },
  {
    title: "Advancing Indian Vehicle Detection Using YOLO11 and YOLO12 with SAHI Optimization",
    summary:
      "Detecting vehicles in dense, chaotic Indian traffic with YOLO11 and YOLO12, sharpened by SAHI slicing for small objects.",
    publisher: "Springer Nature",
    type: "Book chapter",
    href: "https://link.springer.com/chapter/10.1007/978-3-032-08638-9_3",
  },
];

// The Log: demos, X posts and writing, newest first — add new entries at the TOP.
//   type:  "Demo" | "Post" | "Writing"
//   text:  one line — the post's gist or the article title
//   where: "X", "Medium", "LinkedIn", …
//   date:  optional, "YYYY-MM-DD"
// Example X demo:
//   { type: "Demo", text: "Docent narrating a failed swap, end to end", where: "X",
//     href: "https://x.com/pahwaginni/status/…", date: "2026-09-28" },
export const log = [
  {
    type: "Demo",
    text: "Tripwire — live cost & token logging for coding agents, with a switch to stop one that's stuck looping",
    where: "X",
    href: "https://x.com/pahwaginni/status/2087961198717514206",
    date: "2026-08-13",
  },
  {
    type: "Writing",
    text: "I Replaced a Forgotten Cron Script With a Kestra + DuckDB Pipeline — Here's What Actually Happened",
    where: "Kestra Engineering · Medium",
    href: "https://medium.com/kestra-engineering/i-replaced-a-forgotten-cron-script-with-a-kestra-duckdb-pipeline-heres-what-actually-happened-f69e8529ee4b?sharedUserId=pahwaginni96",
  },
  {
    type: "Writing",
    text: "Made Bangalore Extra Crazy",
    where: "Medium",
    href: "https://medium.com/@pahwaginni96/made-bangalore-extra-crazy-01b71454c568?sharedUserId=pahwaginni96",
  },
];
