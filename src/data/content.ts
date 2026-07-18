/** All easily-editable copy lives here.
 *  Case studies are in components/Cases.tsx (they contain rich markup). */

export const CONTACT = {
  email: 'showurdaze@gmail.com',
  linkedin: 'https://www.linkedin.com/in/valeria-litvinova-a7221b149/',
  location: 'Kyiv, UA · UTC+2',
}

export const NAV_LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#how', label: 'How I build' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#faq', label: 'FAQ' },
]

export const STATS = [
  { num: '1 day → 15 min', label: 'real client outcome', gradient: true },
  { num: '0 APIs', label: 'needed — I build around it' },
  { num: '2–4 weeks', label: 'to a working pipeline' },
  { num: '100%', label: 'human-reviewed output' },
]

export const CLIENTS = ['ROIBOY Agency', 'Inventor Miguel', 'Meest Group']

export type Service = {
  kind: string
  title: string
  time: string
  items: string[] // supports **bold** markers
  cta: string
  featured?: boolean
  badge?: string
}

export const SERVICES: Service[] = [
  {
    kind: 'Start here',
    title: 'Automation audit',
    time: '≈ 1 week',
    items: [
      "Deep-dive call into your team's **repetitive processes**",
      '2–3 automation candidates, ranked by **ROI and feasibility**',
      'Pipeline design for the top candidate',
      'Written roadmap with time-saved estimates',
      '**Credited in full** toward a pipeline build',
    ],
    cta: 'Book an audit',
  },
  {
    kind: 'The main event',
    title: 'Pipeline build',
    time: '2–4 weeks',
    badge: 'Core offer',
    featured: true,
    items: [
      'One **end-to-end automation** — like the case studies above',
      'Real code: Node.js / Python, Playwright, LLM APIs — **no no-code glue**',
      'JSON-schema contracts, error handling, tests',
      'Output styled to **match your brand and voice**',
      'Staged delivery — real output in week one',
      'Handover docs your team can maintain',
    ],
    cta: 'Discuss your process',
  },
  {
    kind: 'For teams',
    title: 'AI enablement',
    time: '1–2 weeks',
    items: [
      'Audit of how your team **currently uses AI tools**',
      'Custom **AI Playbook**: which tool for which task, prompt patterns, guardrails',
      'Live workshop with your engineers',
      'Becomes part of your **onboarding**, like at Meest',
    ],
    cta: 'Level up the team',
  },
]

export const FACTS = [
  { to: 7, suffix: '+ yrs', label: 'Software engineering' },
  { to: 3, suffix: '', label: 'Products architected end-to-end' },
  { to: 5, suffix: '+', label: 'Engineers led & hired' },
  { to: 2, suffix: '', label: 'Active automation clients' },
]

export const FAQ = [
  {
    q: 'What kind of processes can you automate?',
    a: "Anything repetitive with a clear input and output: research and reporting, content production and localization, data collection from sites with no API, document and presentation generation, internal ops. If your team does it weekly by hand, it's a candidate.",
  },
  {
    q: 'How long does a build take?',
    a: 'A working first version of a focused pipeline typically takes 2–4 weeks. I ship in stages — you see real output early, not a demo at the end.',
  },
  {
    q: 'Is this no-code / Zapier work?',
    a: 'No. I write real code — Node.js, Python, Playwright, LLM APIs — with error handling, JSON-schema contracts between stages, and tests. It keeps working after handover, and your team can maintain or extend it.',
  },
  {
    q: 'Will the AI output actually sound like us?',
    a: "Yes — that's a core part of the build. I train the LLM layer on your real documents and tone (few-shot from actual work), and validate output structure before it reaches the final artifact.",
  },
  {
    q: 'How does pricing work?',
    a: "Fixed scope, fixed quote — agreed before I write a line of code, based on what we discuss on the intro call. You're buying an outcome, not hours, so there are no surprise invoices. If the scope grows mid-project, we agree on the change before I build it.",
  },
  {
    q: 'What do you need from me to start?',
    a: "One call to walk through the process you want automated, plus examples of the current manual output (a report, a deck, a doc). From that I'll propose a pipeline design and a fixed scope for the first version.",
  },
]
