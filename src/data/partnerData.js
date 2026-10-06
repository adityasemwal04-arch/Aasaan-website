// ─── Aasaan ERP Partner Program Data ───────────────────────────────────────

export const partnerTiers = [
  {
    id: 'reseller',
    name: 'Reseller Partner',
    icon: '🤝',
    color: '#1D4ED8',
    colorLight: '#EFF6FF',
    colorBorder: '#BFDBFE',
    badge: 'Entry',
    description: 'Sell Aasaan ERP to your clients and earn competitive commissions on every deal you close.',
    benefits: [
      'Up to 20% revenue share on all closed deals',
      'Co-branded sales collateral & pitch decks',
      'Access to partner demo environment',
      'Dedicated partner support channel',
      'Lead registration protection',
    ],
    requirements: [
      'Active business registration',
      'Minimum 2 sales personnel',
      'Complete partner onboarding training',
    ],
    cta: 'Become a Reseller',
  },
  {
    id: 'implementation',
    name: 'Implementation Partner',
    icon: '⚙️',
    color: '#7C3AED',
    colorLight: '#F5F3FF',
    colorBorder: '#DDD6FE',
    badge: 'Technical',
    description: 'Deliver Aasaan ERP deployments for clients and build a recurring services revenue stream.',
    benefits: [
      'Full implementation training & certification',
      'Up to 30% margin on implementation projects',
      'Access to sandbox environment & dev tools',
      'Priority technical support with SLA',
      'Listed in Aasaan Partner Directory',
      'Joint go-to-market opportunities',
    ],
    requirements: [
      'Minimum 1 certified Aasaan consultant',
      'Proven ERP/software implementation experience',
      'NDA & partnership agreement signing',
    ],
    cta: 'Apply as Implementer',
  },
  {
    id: 'strategic',
    name: 'Strategic Alliance',
    icon: '🌐',
    color: '#EA580C',
    colorLight: '#FFF7ED',
    colorBorder: '#FED7AA',
    badge: 'Enterprise',
    description: 'Deep co-sell and co-build relationships for large-scale enterprise deployments and vertical-specific solutions.',
    benefits: [
      'Custom commercial arrangement & co-investment',
      'Joint product roadmap influence',
      'Dedicated Alliance Manager at Aasaan',
      'Co-branded case studies & PR opportunities',
      'Early access to new features & betas',
      'Executive business reviews (QBR)',
      'API & white-label options available',
    ],
    requirements: [
      'Established market presence in target segment',
      'Executive sponsor commitment from both sides',
      'Minimum 3 joint customer opportunities identified',
    ],
    cta: 'Contact Alliance Team',
  },
];

export const partnerBenefitPillars = [
  {
    icon: '💰',
    title: 'Competitive Revenue Share',
    description: 'Earn industry-leading margins on software licenses, implementation services, and annual renewals.',
  },
  {
    icon: '🎓',
    title: 'Training & Certification',
    description: 'Free access to the Aasaan Partner Academy — product training, sales enablement, and technical certification courses.',
  },
  {
    icon: '📣',
    title: 'Co-Marketing Support',
    description: 'Co-branded campaigns, event sponsorships, digital ads, and case study development at no cost to partners.',
  },
  {
    icon: '🛡️',
    title: 'Lead Protection',
    description: 'All registered leads are fully protected. You own the deal from introduction to close — and through renewal.',
  },
  {
    icon: '🧰',
    title: 'Sales Toolkits',
    description: 'Ready-to-use pitch decks, ROI calculators, demo scripts, brochures, and proposal templates for every vertical.',
  },
  {
    icon: '📊',
    title: 'Partner Portal Access',
    description: 'Real-time pipeline tracking, deal registration, commission statements, and support tickets — all in one dashboard.',
  },
];

export const partnerJourneySteps = [
  { step: '01', title: 'Apply Online', description: 'Fill out the partner application form with your company and business focus details.' },
  { step: '02', title: 'Evaluation Call', description: 'Our partner team schedules a 30-min discovery call to understand your market and goals.' },
  { step: '03', title: 'Agreement & Onboarding', description: 'Sign the partner agreement and get access to the Aasaan Partner Portal on Day 1.' },
  { step: '04', title: 'Training & Certification', description: 'Complete product training at the Aasaan Partner Academy and get your team certified.' },
  { step: '05', title: 'Go-to-Market Together', description: 'Register your first lead, access co-marketing funds, and start earning from Day 30.' },
];

export const currentPartners = [
  {
    name: 'Tadweeer',
    country: 'UAE 🇦🇪',
    type: 'AWM Client & Channel Partner',
    industry: 'Recycling & Waste Management',
    description: 'Tadweeer leverages Aasaan AWM for complete waste collection operations across the UAE, including weighbridge integration and CPCB manifest compliance.',
  },
  {
    name: 'Resustainability',
    country: 'Global 🌍',
    type: 'Implementation Partner',
    industry: 'Environmental Services',
    description: 'Resustainability delivers Aasaan-powered sustainability tracking platforms to environmental businesses worldwide.',
  },
  {
    name: 'Galaxy Tools International',
    country: 'India 🇮🇳',
    type: 'ERP Global Client',
    industry: 'Industrial Tools Manufacturing',
    description: 'Galaxy Tools runs production, multi-warehouse inventory, and procurement on Aasaan ERP Global across their Indian manufacturing facilities.',
  },
  {
    name: 'WasteCarrier South Africa',
    country: 'South Africa 🇿🇦',
    type: 'AWM Partner',
    industry: 'Waste Logistics',
    description: 'WasteCarrier uses Aasaan AWM to manage fleet dispatch, manifest tracking, and regulatory compliance across South Africa.',
  },
  {
    name: 'FXScraps Argentina',
    country: 'Argentina 🇦🇷',
    type: 'Regional Partner',
    industry: 'Scrap Metal Recycling',
    description: 'FXScraps uses Aasaan to manage scrap procurement, weighbridge operations, and resale inventory in the Latin American market.',
  },
];

export const partnerStats = [
  { value: '20+', label: 'Active Partner Organisations', icon: '🤝' },
  { value: '10+', label: 'Countries Covered by Partner Network', icon: '🌍' },
  { value: '₹0', label: 'Partner Onboarding Cost', icon: '💸' },
  { value: '30 days', label: 'Average Time to First Commission', icon: '⚡' },
];

export const partnerFAQs = [
  {
    q: 'Is there any cost to join the Aasaan Partner Program?',
    a: 'No. Partner onboarding, training, and certification are completely free. Aasaan invests in its partners from Day 1.',
  },
  {
    q: 'Can I be both a Reseller and an Implementation Partner?',
    a: 'Yes. Many partners start as resellers and grow into implementation partners as they build their team capability. You can hold multiple tiers simultaneously.',
  },
  {
    q: 'How does lead protection work?',
    a: 'Once you register a lead in the Partner Portal, it is locked to you for 120 days. No other partner or Aasaan direct sales can engage that account during this period.',
  },
  {
    q: 'Do you offer white-label or OEM arrangements?',
    a: 'Yes, for Strategic Alliance partners with significant volume commitments. Please contact our alliance team to discuss OEM and white-label licensing terms.',
  },
  {
    q: 'What verticals are most in demand for partners right now?',
    a: 'Waste Management & Recycling (AWM), Manufacturing, and Distribution are currently our highest-demand verticals with the most open partner territories.',
  },
];
