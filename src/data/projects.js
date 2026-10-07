const projects = [
  {
    id: 'assembler',
    title: 'Custom ISA Toolchain and CPU Simulator',
    subtitle: 'Compiler, assembler, and cycle-accurate pipeline model in C',
    years: '2026',
    tags: ['C', 'Computer Architecture', 'Compilers', 'Branch Prediction', 'Caches'],
    highlights: [
      'C toolchain with no dependencies: a C-subset compiler, two-pass assembler, emulator, disassembler, and step debugger',
      '5-stage pipeline with hazard detection and forwarding. Forwarding gives a 1.34x to 1.71x speedup',
      'Four branch predictors, an L1/L2 cache hierarchy, 1 to 4 wide superscalar issue, and an out-of-order model with a reorder buffer',
      'Checked against a reference CPU on every benchmark, with 37 timing assertions'
    ],
    mediaAlt: 'Assembler pipeline diagram',
    image: '/assembly-process.png',
    repo: 'https://github.com/Abagel-coder/assembler_cpu_emulator'
  },
  {
    id: 'synergyplus',
    title: 'SynergyPlus',
    subtitle: 'Student Grade Portal Wrapper',
    years: '2024–2026',
    tags: ['Node.js', 'Express', 'MongoDB', 'Tailwind', 'WebAuthn'],
    highlights: [
      'Full-stack StudentVUE wrapper for cleaner, faster grade access',
      'Grew to 3,000+ monthly users',
      'AES-128 encrypted sessions, WebAuthn login, no stored credentials',
      'Installable PWA with offline support and dark mode'
    ],
    mediaAlt: 'SynergyPlus screenshot',
    image: '/grade.png',
    repo: 'https://github.com/Abagel-coder/synergyplus'
  },
  {
    id: 'orate',
    title: 'Orate',
    subtitle: 'Speaking practice app with AI feedback',
    years: '2026',
    tags: ['React', 'Flask', 'Gemini API', 'Docker'],
    highlights: [
      'Gives you a random Wikipedia topic, records a 1 to 2 minute talk, and grades clarity, pacing, structure, and confidence',
      'Counts words per minute and filler words live in the browser with the Web Speech API',
      'Saves your history and goals on your device, so there are no accounts',
      'Frontend and backend unit tests run in GitHub Actions, and the app ships as one Docker image'
    ],
    mediaAlt: 'Orate results screen',
    image: '/orate.png',
    repo: 'https://github.com/Abagel-coder/orate'
  }
]

export default projects
