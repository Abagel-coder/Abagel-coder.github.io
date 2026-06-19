const projects = [
  {
    id: 'defendly',
    title: 'Defendly',
    subtitle: 'AI Taekwondo Trainer — React Native pose-detection app',
    years: '2024–2026',
    tags: ['React Native', 'TypeScript', 'TensorFlow Lite', 'MediaPipe', 'Supabase'],
    highlights: [
      'Real-time on-device pose detection with TensorFlow Lite + MediaPipe',
      '90%+ movement-classification accuracy',
      'Offline-first with Supabase auth and cross-device progress sync'
    ],
    mediaAlt: 'Defendly demo',
    image: '/defend.png',
    repo: 'https://github.com/Abagel-coder/defendly'
  },
  {
    id: 'synergyplus',
    title: 'SynergyPlus',
    subtitle: 'Student Grade Portal Wrapper',
    years: '2024–2026',
    tags: ['Node.js', 'Express', 'MongoDB', 'Tailwind', 'WebAuthn'],
    highlights: [
      'Full-stack StudentVUE wrapper for cleaner, faster grade access',
      'Grew to 3,000+ users',
      'AES-128 encrypted sessions, WebAuthn login, no stored credentials',
      'Installable PWA with offline support and dark mode'
    ],
    mediaAlt: 'SynergyPlus screenshot',
    image: '/grade.png',
    repo: 'https://github.com/Abagel-coder/synergyplus'
  }
  ,
  {
    id: 'assembler',
    title: 'Custom ISA — Assembler, Emulator & CPU Simulator',
    subtitle: 'Cycle-accurate microarchitecture model — C11',
    years: '2026–current',
    tags: ['C', 'Pipelining', 'Branch Prediction', 'Caches'],
    highlights: [
      'Dependency-free C toolchain: two-pass assembler, functional emulator, and disassembler (round-trip verified)',
      'Cycle-accurate 5-stage pipeline with hazard detection and forwarding — 1.3–1.7× measured speedup',
      'Four branch predictors plus a tournament chooser and a configurable cache hierarchy (reports CPI, MPKI, AMAT)',
      'Validated by oracle-equality against a reference CPU and 37 timing assertions'
    ],
    mediaAlt: 'Assembler demo',
    image: '/assembly-process.png',
    repo: 'https://github.com/Abagel-coder/assembler_cpu_emulator'
  }
]

export default projects
