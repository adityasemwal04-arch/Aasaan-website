// Hybrid Data Service for Aasaan ERP
// Communicates with the Express Backend API (http://localhost:5000) when online,
// and provides instant local persistence (localStorage) when running on GitHub Pages.

let BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8080/api';
let serverBackendType = 'Java Spring Boot (Port 8080)';

// Initial pre-seeded industry articles (used as defaults if server or storage is fresh)
export const INITIAL_INDUSTRY_BLOGS = [
  {
    slug: 'manufacturing-engineering',
    title: 'Manufacturing & Engineering ERP: Mastering Multi-Level BOM & Shop Floor Routing',
    tag: 'BOM & Routing',
    industry: 'Manufacturing & Engineering',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    readTime: '6 min read',
    author: 'Aasaan Manufacturing Practice Lead',
    date: 'October 2026',
    excerpt: 'Discrete and process manufacturing with multi-level bill of materials, automated work centers, digital job cards, and scrap accounting.',
    content: `## The Modern Manufacturing Imperative

In discrete and precision engineering, production delays rarely stem from machine breakdowns alone—they stem from decoupled Bill of Materials (BOM), disconnected inventory reservations, and manual job-card routing across disparate plant shifts.

Aasaan ERP unifies your production floor directly with live procurement and financial ledgers.

### Critical Challenges Solved

1. **Complex Multi-Level BOMs**: Sub-assemblies, phantom assemblies, and revision tracking often lead to inaccurate material staging. Aasaan provides multi-tiered explosion with automated component reservation down to the child item level.
2. **Work Center Capacity Bottlenecks**: Gain clear visibility into active machine spindle hours, planned preventive maintenance windows, and operator allocations across multiple shifts.
3. **Scrap & Rework Tracking**: Capture yield variances directly at QA check points before issuing finished goods into warehouse inventory.

### Key Capabilities in Aasaan ERP
- **Visual Production Kanban**: Live drag-and-drop routing from raw material cutting to CNC machining, surface finishing, and assembly.
- **Job Card Barcode/QR Scanning**: Floor operators scan batch tokens at terminal workstations to log time taken, scrap produced, and tool wear.
- **Automated Reorder Planning (MRP)**: Generate purchase requisitions dynamically based on active sales commitments and safety thresholds.
- **Sub-Contractor Work Order Lifecycle**: Issue job-work challans, monitor off-site WIP inventory, and reconcile subcontractor invoices with gate passes.`
  },
  {
    slug: 'dairy-industry',
    title: 'Dairy Industry ERP: End-to-End Cold Chain, Fat/SNF Testing & Farmer Payouts',
    tag: 'Fat/SNF & Chilling',
    industry: 'Dairy Industry',
    img: 'https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?auto=format&fit=crop&w=1200&q=80',
    readTime: '7 min read',
    author: 'Aasaan Agri-Food Solutions Team',
    date: 'October 2026',
    excerpt: 'Farmer collection center integration, automated milk testing telemetry, chilling depot tracking, and perishable batch distribution.',
    content: `## Transforming Perishable Milk Procurement & Distribution

The dairy sector faces unique logistical and quality challenges: highly perishable raw milk, volatile seasonal yields, twice-daily collection cycles, and strict regulatory standards on fat and SNF (Solids-Not-Fat) metrics.

Aasaan Dairy ERP bridges rural village collection centers (VCC), bulk milk cooling depots (BMC), processing plants, and cold-chain retail distribution into one synchronized nervous system.

### Core Modules Tailored for Dairy Operations

1. **Village Collection & Milk Analyzer Integration**:
   - Direct serial/Bluetooth integration with ultrasonic milk analyzers and digital weighing scales.
   - Automatic deduction of tare weight and instant calculation of Fat%, SNF%, and CLR.
   - Real-time farmer slip printing and instant SMS notification of quantity and earned credit.

2. **Automated Farmer Ledger & Payment Cycles**:
   - Transparent weekly or ten-day billing based on differential rate matrices (two-axis pricing on Fat & SNF).
   - Automated deductions for cattle feed, veterinary medicine loans, and advances directly from milk proceeds.

3. **Bulk Milk Chilling (BMC) & Tanker Dispatch**:
   - Temperature telemetry loggers tracking milk temperature from collection (4°C) to plant reception.
   - Transit loss reconciliation comparing dispatch volume vs reception dock weighbridge.

4. **Batch Processing, By-Products & FEFO Inventory**:
   - Standardized batch recipes for pasteurized pouch milk, curd, paneer, butter, ghee, and flavored drinks.
   - First-Expired-First-Out (FEFO) automated lot picking to eliminate inventory spoilage.
   - Route-wise crate tracking and returnable packaging accounting.`
  },
  {
    slug: 'car-rental-fleet',
    title: 'Fleet & Vehicle Rental ERP: Real-Time Telematics, Maintenance & Digital Contracts',
    tag: 'Fleet & Telematics',
    industry: 'Car Rental & Fleet Industry',
    img: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
    readTime: '5 min read',
    author: 'Aasaan Mobility Tech Team',
    date: 'October 2026',
    excerpt: 'Vehicle telemetry, scheduled preventive maintenance, parts catalog, and automated rental agreements.',
    content: `## Scaling Modern Commercial Fleets & Rental Operations

Managing large rental fleets demands razor-sharp oversight of asset utilization, routine maintenance schedules, toll/traffic challan reconciliations, and instant customer check-in/check-out.

### Why Aasaan ERP for Fleet Operators?
- **Digital Vehicle Onboarding**: Document expiry triggers for vehicle fitness, commercial permits, national road tax, and insurance renewals.
- **Telematics & GPS Odometer Sync**: Automatic odometer and fuel gauge logging via OBD-II device APIs, automatically calculating service intervals and excess mileage surcharges.
- **Preventive Maintenance Management**: Automatic job-order issuance for oil changes, brake pads, and tire rotations based on cumulative mileage.
- **Dynamic Lease & Hourly Billing**: Instant generation of digital agreements with e-signature and fast security deposit refund workflows.`
  },
  {
    slug: 'chemical-process',
    title: 'Chemical & Process Industry ERP: Strict Batch Potency, MSDS & Hazard Compliance',
    tag: 'Batch & Formula',
    industry: 'Chemical & Process Industry',
    img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
    readTime: '6 min read',
    author: 'Aasaan Compliance & Chemical Lead',
    date: 'October 2026',
    excerpt: 'Formula management, dangerous goods compliance, MSDS tracking, and strict potency batch controls.',
    content: `## Safety, Precision & Formula Control in Process Manufacturing

Chemical and formulation manufacturers cannot tolerate variance in active ingredient potency, solvent mixing ratios, or environmental safety compliance.

### What Aasaan Chemical ERP Delivers
- **Confidential Formula Management**: Versioned recipe formulas with granular role-based access to safeguard intellectual property.
- **Potency & Active Ingredient Normalization**: Dynamic raw material quantity adjustment based on assay purity percentages of incoming solvent lots.
- **MSDS & Dangerous Goods Labeling**: Automatic generation of Material Safety Data Sheets and GHS hazmat shipping documentation.
- **Yield Variance & Solvent Recovery**: Track distillation efficiency and recovered solvent recycling directly within the general ledger.`
  },
  {
    slug: 'construction-epc',
    title: 'Construction & EPC ERP: Milestone Billing, Subcontractor Ledger & Equipment Logs',
    tag: 'Project WBS & Billing',
    industry: 'Construction & EPC Building',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    readTime: '6 min read',
    author: 'Aasaan Infrastructure Advisory',
    date: 'October 2026',
    excerpt: 'Material consumption against milestones, subcontractor certified billing, and heavy equipment logs.',
    content: `## Project Profitability from Foundation to Handover

Infrastructure projects frequently suffer from cost overruns due to delayed client measurement certificates, untracked site material pilferage, and idle heavy equipment.

### Key Capabilities in Aasaan EPC ERP
- **Work Breakdown Structure (WBS)**: Hierarchical project task trees with milestone percentage completion linked directly to progress billing.
- **Site Material Indenting & Consumption**: Strict site store requisition controls matching engineering estimates to prevent over-allocation.
- **Subcontractor RA Billing**: Automated retention money withholding, TDS compliance, and mobilization advance amortizations.
- **Equipment & Fuel Logging**: Real-time tracking of excavator and crane working hours, idle time, and diesel consumption per cubic meter excavated.`
  },
  {
    slug: 'gems-jewelry',
    title: 'Gems & Jewelry ERP: Purity Weighing, Casting Wastage & Hallmarking Control',
    tag: 'Purity & Carat Weighing',
    industry: 'Gems & Jewelry Manufacturing',
    img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1200&q=80',
    readTime: '5 min read',
    author: 'Aasaan Luxury & Precious Metals Team',
    date: 'October 2026',
    excerpt: 'Precision precious metal weighing, casting wastage accounting, gemstone certification, and hallmarking.',
    content: `## Milligram Precision for Precious Metals & Gemstones

In the jewelry trade, every milligram of gold, platinum, and high-clarity diamond must be accounted for from raw bullion issue through casting, setting, polishing, and retail tagging.

### Unique Features
- **Four-Decimal Weighing Scale Sync**: Direct digital balance integration at all Karigar (artisan) handover points.
- **Metal Loss & Fire Recovery Accounting**: Reconcile filing dust, polishing loss, and refining recovery balances per artisan batch.
- **Diamond & Color Stone Packet Inventory**: Multi-attribute item catalogs tracking 4Cs (Cut, Clarity, Color, Carat) and certification serial numbers.
- **BIS Hallmarking & HUID Compliance**: Seamless capture of Unique Identification numbers on all finished jewelry pieces.`
  },
  {
    slug: 'food-beverage',
    title: 'Food & Beverage ERP: FEFO Cold Chain, Recipe Scaling & Quality Audits',
    tag: 'Cold Chain & FEFO',
    industry: 'Food & Beverage Processing',
    img: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=80',
    readTime: '6 min read',
    author: 'Aasaan Food Science Technology Group',
    date: 'October 2026',
    excerpt: 'Recipe management, catch-weight lot tracking, nutritional compliance, and temperature-controlled logistics.',
    content: `## Farm-to-Fork Traceability and Hygiene Compliance

Food processing operations must guarantee freshness, eliminate expiry waste, and maintain comprehensive audit trails for food safety certifications (FSSAI, HACCP, ISO 22000).

### Key Features
- **Catch-Weight Inventory**: Dual unit-of-measure accounting (cases vs kilograms) for variable weight meat, poultry, and produce.
- **Strict FEFO Expiry Safeguards**: Prevent shipping of lots nearing shelf-life expiry dates.
- **Instant Backward & Forward Recall**: Trace every distributed batch back to specific ingredient suppliers and production shifts in seconds.
- **Nutritional & Allergen Labeling**: Automated calorie and ingredient breakdown for retail packaging compliance.`
  },
  {
    slug: 'high-tech-electronics',
    title: 'High-Tech & Electronics ERP: Component Serialization, SMD Reels & RMA Logistics',
    tag: 'Serial & RMA Tracking',
    industry: 'High-Tech & Electronics',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    readTime: '6 min read',
    author: 'Aasaan High-Tech Engineering Group',
    date: 'October 2026',
    excerpt: 'Component-level serialization, warranty RMA tracking, SMD reel counters, and automated PCB assembly schedules.',
    content: `## Precision Traceability for High-Velocity Tech Manufacturing

With shrinking product lifecycles and micro-component bills of materials, electronics manufacturers require automated serialization and warranty tracking.

### Core Architecture
- **Multi-Level Serial Number Trees**: Link motherboard, display panel, power supply, and outer chassis serials into one unified digital passport.
- **SMD Reel Feeder Accounting**: Track surface-mount component pick counts, reel remnant balances, and moisture sensitivity levels.
- **Warranty & Reverse Logistics (RMA)**: Complete ticket management from customer return authorization to diagnostic repair, component replacement, and dispatch.`
  },
  {
    slug: 'malls-commercial',
    title: 'Malls & Commercial Real Estate ERP: Automated CAM Billing, Leases & Tenant Portals',
    tag: 'Lease & CAM Billing',
    industry: 'Malls & Commercial Facilities',
    img: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1200&q=80',
    readTime: '5 min read',
    author: 'Aasaan Commercial Property Group',
    date: 'October 2026',
    excerpt: 'Common area maintenance (CAM) automated billing, utility sub-meter tariffs, and commercial tenant lease management.',
    content: `## Maximizing Commercial Asset Yield & Streamlining Tenant Billing

Managing multi-tenant commercial centers requires complex utility sub-meter tariff reconciliations, footfall analytics, and lease escalation schedules.

### Key Capabilities
- **Automated CAM Calculation**: Proportionate common area expense allocation based on occupied carpet area.
- **Utility Sub-Meter Smart Sync**: Direct telemetry from digital electricity, BTU cooling, and water meters with automated billing.
- **Revenue Share & Minimum Guarantee Rent**: Dual-contract rental billing calculating tenant turnover percentages vs base minimum guarantee.`
  },
  {
    slug: 'packaging-corrugation',
    title: 'Packaging & Corrugation ERP: Deckle Optimization, Reel Management & Scrap Reduction',
    tag: 'Deckle & GSM Optimization',
    industry: 'Packaging & Corrugation',
    img: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=1200&q=80',
    readTime: '5 min read',
    author: 'Aasaan Paper & Packaging Division',
    date: 'October 2026',
    excerpt: 'Sheet deckle calculation, paper reel consumption tracking, plate printing management, and trim scrap minimization.',
    content: `## High-Efficiency Corrugation & Deckle Mathematics

Corrugators win or lose margins on paper reel trim loss and fluting medium strength (BF/GSM) accuracy.

### Core Features
- **Dynamic Deckle Optimizer**: Automatic nesting algorithms calculating optimal reel width cuts to minimize trim wastage under 2%.
- **Paper Reel Barcode Lifecycle**: Track reel weight before loading on corrugator stand and automatically credit remnant reel balance back to stock.
- **Printing Stereos & Die-Cutter Asset Register**: Maintain usage count and quality condition of flexo printing blocks and rotary cutting dies.`
  }
];

// Seed sample leads if localStorage is empty
const DEFAULT_LEADS = [
  {
    id: 1728349200000,
    timestamp: '07/10/2026, 11:30:15 AM',
    name: 'Rajesh Sharma',
    company: 'Apex Precision Engineering Ltd',
    email: 'rajesh.sharma@apexengineering.in',
    phone: '+91 98201 44521',
    solution: 'ERP Global',
    country: 'India',
    message: 'Need complete multi-level BOM and machine work center scheduling for 3 manufacturing units in Pune.',
    status: 'New'
  },
  {
    id: 1728352800000,
    timestamp: '07/10/2026, 01:15:40 PM',
    name: 'Sunil Patil',
    company: 'Sahyadri Dairy & Agro Processing',
    email: 'sunil@sahyadridairy.com',
    phone: '+91 94220 89100',
    solution: 'ERP Global',
    country: 'India',
    message: 'Looking for ERP for milk collection centers, BMC chilling depots, fat/SNF testing, and automated weekly farmer payouts.',
    status: 'Contacted'
  },
  {
    id: 1728360000000,
    timestamp: '07/10/2026, 03:45:22 PM',
    name: 'Kavita Nair',
    company: 'GreenLine Fleet Logistics',
    email: 'kavita.nair@greenlinefleet.com',
    phone: '+91 98450 12345',
    solution: 'Aasaan Waste Management (AWM)',
    country: 'India',
    message: 'Require telematics integration, weighbridge scale automation, and municipal waste compliance reports.',
    status: 'Demo Scheduled'
  }
];

// Helper to check if server is accessible
let serverStatusChecked = false;
let isServerOnline = false;

export async function checkBackendHealth() {
  const candidateUrls = [
    import.meta.env.VITE_BACKEND_URL,
    'http://localhost:8080/api',
    'http://localhost:5000/api'
  ].filter(Boolean);

  for (const url of candidateUrls) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 1200);
      const res = await fetch(`${url}/health`, { signal: controller.signal });
      clearTimeout(timeoutId);
      if (res.ok) {
        const data = await res.json();
        BACKEND_URL = url;
        isServerOnline = true;
        serverBackendType = data.service || 'Java Spring Boot REST API';
        serverStatusChecked = true;
        return { isOnline: true, url, type: serverBackendType };
      }
    } catch (e) {}
  }

  isServerOnline = false;
  serverStatusChecked = true;
  return { isOnline: false, url: null, type: 'Standalone Browser Storage' };
}

// -------------------------------------------------------------
// LEADS / QUERIES API
// -------------------------------------------------------------

export async function getLeads() {
  // Check backend first
  try {
    const res = await fetch(`${BACKEND_URL}/leads`, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      localStorage.setItem('aasaan_demo_queries', JSON.stringify(data));
      isServerOnline = true;
      return data;
    }
  } catch (e) {
    // server unreachable
    isServerOnline = false;
  }

  // Fallback to localStorage
  try {
    const raw = localStorage.getItem('aasaan_demo_queries');
    if (raw) {
      return JSON.parse(raw);
    }
    // Seed initial leads if empty
    localStorage.setItem('aasaan_demo_queries', JSON.stringify(DEFAULT_LEADS));
    return DEFAULT_LEADS;
  } catch (e) {
    return DEFAULT_LEADS;
  }
}

export async function saveLead(leadData) {
  const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  const newLead = {
    id: Date.now(),
    timestamp,
    name: leadData.name || '',
    company: leadData.company || '',
    email: leadData.email || '',
    phone: leadData.phone || '',
    solution: leadData.solution || 'ERP Global',
    country: leadData.country || 'India',
    message: leadData.message || '',
    status: 'New'
  };

  // 1. Try backend server
  try {
    await fetch(`${BACKEND_URL}/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newLead)
    });
  } catch (e) {
    // server offline, proceed with local
  }

  // 2. Always persist in localStorage
  const existing = await getLeads();
  const updated = [newLead, ...existing.filter(l => l.id !== newLead.id)];
  localStorage.setItem('aasaan_demo_queries', JSON.stringify(updated));

  return newLead;
}

export async function updateLeadStatus(id, newStatus) {
  // Update on server
  try {
    await fetch(`${BACKEND_URL}/leads/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus })
    });
  } catch (e) {}

  // Update in localStorage
  const existing = await getLeads();
  const updated = existing.map(l => l.id === id ? { ...l, status: newStatus } : l);
  localStorage.setItem('aasaan_demo_queries', JSON.stringify(updated));
  return updated;
}

export async function deleteLead(id) {
  // Delete from server
  try {
    await fetch(`${BACKEND_URL}/leads/${id}`, { method: 'DELETE' });
  } catch (e) {}

  // Delete from localStorage
  const existing = await getLeads();
  const updated = existing.filter(l => l.id !== id);
  localStorage.setItem('aasaan_demo_queries', JSON.stringify(updated));
  return updated;
}

// -------------------------------------------------------------
// INDUSTRY BLOGS API
// -------------------------------------------------------------

export async function getBlogs() {
  try {
    const res = await fetch(`${BACKEND_URL}/blogs`, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      localStorage.setItem('aasaan_industry_blogs', JSON.stringify(data));
      return data;
    }
  } catch (e) {}

  // Fallback to localStorage
  try {
    const raw = localStorage.getItem('aasaan_industry_blogs');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
    // Seed default blogs
    localStorage.setItem('aasaan_industry_blogs', JSON.stringify(INITIAL_INDUSTRY_BLOGS));
    return INITIAL_INDUSTRY_BLOGS;
  } catch (e) {
    return INITIAL_INDUSTRY_BLOGS;
  }
}

export async function getBlogBySlug(slug) {
  const blogs = await getBlogs();
  const found = blogs.find(b => b.slug === slug || b.slug === slug.toLowerCase());
  if (found) return found;

  // Try matching by fuzzy slug or industry name
  return blogs.find(b => 
    b.slug.includes(slug) || 
    slug.includes(b.slug) ||
    b.title.toLowerCase().includes(slug.replace(/-/g, ' ').toLowerCase())
  ) || null;
}

export async function saveBlog(blogData) {
  const slug = blogData.slug || blogData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const payload = { ...blogData, slug };

  // Try saving to backend server
  try {
    await fetch(`${BACKEND_URL}/blogs/${slug}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
  } catch (e) {}

  // Save to localStorage
  const blogs = await getBlogs();
  const index = blogs.findIndex(b => b.slug === slug);
  let updated;
  if (index !== -1) {
    updated = [...blogs];
    updated[index] = { ...blogs[index], ...payload };
  } else {
    updated = [payload, ...blogs];
  }
  localStorage.setItem('aasaan_industry_blogs', JSON.stringify(updated));
  return payload;
}

export async function deleteBlog(slug) {
  try {
    await fetch(`${BACKEND_URL}/blogs/${slug}`, { method: 'DELETE' });
  } catch (e) {}

  const blogs = await getBlogs();
  const updated = blogs.filter(b => b.slug !== slug);
  localStorage.setItem('aasaan_industry_blogs', JSON.stringify(updated));
  return updated;
}

// -------------------------------------------------------------
// ADMIN AUTHENTICATION
// -------------------------------------------------------------

export function getAdminAuth() {
  try {
    const raw = localStorage.getItem('aasaan_admin_session');
    if (!raw) return null;
    const session = JSON.parse(raw);
    if (session && session.isAuthenticated) return session;
    return null;
  } catch (e) {
    return null;
  }
}

export async function loginAdmin(username, password) {
  // 1. Try server auth
  try {
    const res = await fetch(`${BACKEND_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    if (res.ok) {
      const data = await res.json();
      const session = {
        isAuthenticated: true,
        user: data.user || { username, role: 'Administrator' },
        token: data.token,
        loginAt: new Date().toISOString()
      };
      localStorage.setItem('aasaan_admin_session', JSON.stringify(session));
      return { success: true, session };
    }
  } catch (e) {
    // server unreachable, use offline validation
  }

  // 2. Offline / GitHub Pages validation
  // Default credentials: admin / aasaan2026
  const storedCreds = (() => {
    try {
      const c = localStorage.getItem('aasaan_admin_credentials');
      return c ? JSON.parse(c) : { user: 'admin', pass: 'aasaan2026' };
    } catch (e) {
      return { user: 'admin', pass: 'aasaan2026' };
    }
  })();

  if (
    username.trim().toLowerCase() === storedCreds.user.toLowerCase() &&
    password === storedCreds.pass
  ) {
    const session = {
      isAuthenticated: true,
      user: { username: storedCreds.user, role: 'Administrator', name: 'Aasaan Admin' },
      token: 'client-token-' + Date.now(),
      loginAt: new Date().toISOString()
    };
    localStorage.setItem('aasaan_admin_session', JSON.stringify(session));
    return { success: true, session };
  }

  return {
    success: false,
    message: 'Invalid Admin ID or Password. (Default: admin / aasaan2026)'
  };
}

export function logoutAdmin() {
  localStorage.removeItem('aasaan_admin_session');
}

export function updateAdminCredentials(newPassword) {
  const current = (() => {
    try {
      const c = localStorage.getItem('aasaan_admin_credentials');
      return c ? JSON.parse(c) : { user: 'admin', pass: 'aasaan2026' };
    } catch (e) {
      return { user: 'admin', pass: 'aasaan2026' };
    }
  })();

  const updated = { ...current, pass: newPassword };
  localStorage.setItem('aasaan_admin_credentials', JSON.stringify(updated));
  return true;
}

// -------------------------------------------------------------
// ANNOUNCEMENTS (Top Banner) API
// -------------------------------------------------------------

const DEFAULT_ANNOUNCEMENTS = [
  { id: 'ann1', text: 'Your ERP, Your Rules — Custom Fields & Intelligent Workflows Made Easy.', active: true, badge: 'ENTERPRISE RELEASE', createdAt: Date.now() },
  { id: 'ann2', text: 'Aasaan Global Search: One Search Box. Every Answer Across Sales, Stock & Finance.', active: true, badge: 'NEW FEATURE', createdAt: Date.now() + 1 },
  { id: 'ann3', text: 'AWM Flagship: Purpose-built ERP for Waste Management, Fleet & Weighbridges.', active: true, badge: 'PRODUCT UPDATE', createdAt: Date.now() + 2 },
];

export async function getAnnouncements() {
  try {
    const res = await fetch(`${BACKEND_URL}/announcements`, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      localStorage.setItem('aasaan_announcements', JSON.stringify(data));
      return data;
    }
  } catch (e) {}

  try {
    const raw = localStorage.getItem('aasaan_announcements');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
    localStorage.setItem('aasaan_announcements', JSON.stringify(DEFAULT_ANNOUNCEMENTS));
    return DEFAULT_ANNOUNCEMENTS;
  } catch (e) {
    return DEFAULT_ANNOUNCEMENTS;
  }
}

export async function getActiveAnnouncements() {
  // Try the lightweight /active endpoint first
  try {
    const res = await fetch(`${BACKEND_URL}/announcements/active`, { cache: 'no-store' });
    if (res.ok) {
      return await res.json();
    }
  } catch (e) {}

  const all = await getAnnouncements();
  return all.filter(a => a.active);
}

export async function saveAnnouncement(ann) {
  // New: no id yet
  if (!ann.id) {
    try {
      const res = await fetch(`${BACKEND_URL}/announcements`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ann)
      });
      if (res.ok) {
        const created = await res.json();
        const all = await getAnnouncements();
        localStorage.setItem('aasaan_announcements', JSON.stringify([created, ...all]));
        return created;
      }
    } catch (e) {}

    // Offline fallback
    const newAnn = { ...ann, id: 'ann_' + Date.now(), createdAt: Date.now() };
    const all = await getAnnouncements();
    localStorage.setItem('aasaan_announcements', JSON.stringify([newAnn, ...all]));
    return newAnn;
  }

  // Update existing
  try {
    await fetch(`${BACKEND_URL}/announcements/${ann.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ann)
    });
  } catch (e) {}

  const all = await getAnnouncements();
  const updated = all.map(a => a.id === ann.id ? { ...a, ...ann } : a);
  localStorage.setItem('aasaan_announcements', JSON.stringify(updated));
  return ann;
}

export async function deleteAnnouncement(id) {
  try {
    await fetch(`${BACKEND_URL}/announcements/${id}`, { method: 'DELETE' });
  } catch (e) {}

  const all = await getAnnouncements();
  const updated = all.filter(a => a.id !== id);
  localStorage.setItem('aasaan_announcements', JSON.stringify(updated));
  return updated;
}

