const projects = [
  {
    id: 'defendly',
    title: 'Defendly',
    subtitle: 'AI Taekwondo Trainer — ML pose-detection',
    years: '2024–2026',
    tags: ['Python', 'TensorFlow', 'MediaPipe'],
    highlights: [
      'Real-time pose detection and feedback',
      '90%+ classification accuracy on test set',
      'Interactive session visualizations and drill tracking'
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
    tags: ['React', 'FastAPI'],
    highlights: [
      'Full-stack wrapper to simplify viewing grades',
      'Grew to 3,000+ users',
      'Fully secured with encrypted data storage',
      'Responsive UI with quick filtering'
    ],
    mediaAlt: 'SynergyPlus screenshot',
    image: '/grade.png',
    repo: 'https://github.com/Abagel-coder/synergyplus'
  }
  ,
  {
    id: 'assembler',
    title: 'Custom Assembler and CPU Emulator',
    subtitle: 'Custom ISA & CPU Emulator — C',
    years: '2026–current',
    tags: ['C', 'Systems'],
    highlights: [
      'Designed and implemented a custom instruction set architecture (ISA) and assembler in C',
      'Built a virtual CPU capable of executing arithmetic, memory, and control-flow instructions',
      'Implemented instruction parsing, opcode encoding, register management, and memory simulation'
    ],
    mediaAlt: 'Assembler demo',
    image: '/assembly-process.png',
    repo: 'https://github.com/Abagel-coder/assembler_cpu_emulator'
  }
]

export default projects
