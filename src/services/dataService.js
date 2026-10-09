// Hybrid Data Service for Aasaan ERP
// Communicates with the Java Spring Boot REST API when online,
// and provides instant local persistence (localStorage) when running on GitHub Pages.

import { liteFeatures as DEFAULT_LITE_FEATURES, liteIndustries as DEFAULT_LITE_INDUSTRIES } from '../data/liteData';
import { awmModules as DEFAULT_AWM_MODULES, awmClients as DEFAULT_AWM_CLIENTS } from '../data/awmData';
import { CLOUD_WEBHOOK_URL } from '../utils/excelExport';

let BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'https://aasaan-erp-backend.onrender.com/api';
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
  },
  {
    slug: 'smart-factory-production',
    title: 'Smart Factory & Production ERP: Shopfloor IoT, OEE Dashboards & Work Center Loading',
    tag: 'Shopfloor IoT & OEE',
    industry: 'Smart Factory & Production',
    img: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1200&q=80',
    readTime: '7 min read',
    author: 'Aasaan Industry 4.0 Practice',
    date: 'October 2026',
    excerpt: 'End-to-end production scheduling with work center loading, machine cycle-time logs, and Overall Equipment Effectiveness.',
    content: `## Industry 4.0: Connecting the Physical Shop Floor to Your ERP

Smart manufacturing demands real-time visibility into every machine, shift, and work order — not just at the end of the day, but live, as production happens.

### Core Challenges Solved

1. **Machine Downtime Visibility**: Unexpected stoppages cost manufacturers 5–20% of productive capacity. Aasaan's IoT gateway integrates directly with PLCs and SCADA systems via OPC-UA, MQTT, and Modbus protocols.
2. **Work Center Capacity Loading**: Visual Gantt-based finite scheduling across all work centers prevents over-commitment and identifies bottlenecks before they cause delays.
3. **Overall Equipment Effectiveness (OEE)**: Live calculation of Availability × Performance × Quality across every machine shift — drilled down to operator, product, and tool.

### Key Capabilities

- **IoT Machine Telemetry**: Automatic cycle count, spindle hour, and temperature logging from CNC machines, injection molding presses, and conveyor lines.
- **Digital Work Orders & Job Cards**: Paperless production routing from cutting → machining → assembly → QA with QR code scanning at each station.
- **Real-Time OEE Dashboard**: Color-coded heatmaps showing green (>85%), amber (65–85%), and red (<65%) OEE zones by shift and machine.
- **Predictive Maintenance Triggers**: Alert maintenance teams when vibration sensors or thermal cameras detect anomalous readings before breakdown occurs.
- **Shopfloor Operator Terminals**: Ruggedized touch-screen kiosks for operators to log production counts, scrap reasons, and tooling changes without leaving the line.`
  },
  {
    slug: 'pharma-life-sciences',
    title: 'Pharma & Life Sciences ERP: GMP Compliance, 21 CFR Part 11 & Electronic Batch Records',
    tag: 'GMP & 21 CFR Part 11',
    industry: 'Pharma & Life Sciences',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80',
    readTime: '8 min read',
    author: 'Aasaan Pharma Compliance Division',
    date: 'October 2026',
    excerpt: 'Medical-grade lot traceability, mandatory QA quarantine hold gates, expiry locks, and electronic audit logs.',
    content: `## GMP-Ready ERP for Pharmaceutical & Life Sciences Manufacturing

Pharmaceutical manufacturers operate under the most stringent global regulatory frameworks — FDA 21 CFR Part 11, EU GMP Annex 11, Schedule M, and ICH Q10. A single compliance deviation can trigger product recalls, FDA warning letters, or facility shutdowns.

### Regulatory Challenges Solved

1. **21 CFR Part 11 Electronic Records**: Every data entry, approval, and override in Aasaan is captured with an immutable audit trail including user ID, timestamp, workstation, and reason code.
2. **GMP Lot Traceability**: Complete forward and backward traceability linking every dispensed raw material lot to its batch manufacturing record, analytical test result, and final patient pack.
3. **QA Quarantine Hold Gates**: Automatic "Under Test" quarantine status on incoming API lots blocks their use in production until QC approves release — no manual intervention needed.

### Key Capabilities

- **Electronic Batch Manufacturing Records (eBMR)**: Digital replacement of paper BMRs with step-wise process instructions, in-process check capture, and yield reconciliation.
- **Expiry Date Lock**: System prevents dispensing any raw material or finished goods pack within configurable pre-expiry alert windows.
- **Deviation & CAPA Management**: Integrated deviation logging with risk assessment, root cause analysis, corrective action tracking, and regulatory submission documentation.
- **Validated Analytical Instrument Integration**: Direct import of LIMS results from HPLC, dissolution testers, and Karl Fischer titrators — no manual data transcription.
- **Regulatory Submission Readiness**: Auto-generate Certificate of Analysis (CoA), Batch Release Records, and stability study reports in FDA-compliant formats.`
  },
  {
    slug: 'publication-media-print',
    title: 'Publication & Media Print ERP: Circulation Management, Ad Space Billing & Author Royalties',
    tag: 'Circulation & Royalty',
    industry: 'Publication & Media Print',
    img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80',
    readTime: '6 min read',
    author: 'Aasaan Media & Publishing Solutions',
    date: 'October 2026',
    excerpt: 'Circulation management, print run costing, ad space billing, author royalty calculation, and subscription cycles.',
    content: `## Modernizing Publishing Operations for the Digital-Print Hybrid Era

Publishers managing newspapers, magazines, textbooks, and digital content face unique operational complexity: variable print run economics, subscription churn, advertiser billing, and author royalty compliance — all simultaneously.

### Core Challenges Solved

1. **Print Run Costing Accuracy**: Every edition's cost-per-copy must account for paper GSM rates, ink consumption, binding type, regional freight, and distributor margins — automatically.
2. **Advertiser Space Management**: Track ROP (Run of Paper), classified, display, and digital ad bookings with rate card management, insertion order tracking, and revenue recognition.
3. **Author & Contributor Royalties**: Complex royalty structures — flat fee, % of net receipts, tiered slabs, co-author splits — calculated automatically at every sales reconciliation cycle.

### Key Capabilities

- **Subscription Lifecycle Management**: Automated renewal reminders, grace period controls, hawker route mapping, and copy delivery tracking to prevent paid subscriber complaints.
- **Print Run & Paper Inventory**: Newsprint reel consumption tracking with waste percentage benchmarks and auto-reorder triggers based on print schedule calendars.
- **Digital Edition & Paywall Integration**: Unified subscriber database across print and digital editions with single login and bundle pricing management.
- **Rights & Permissions Tracking**: Maintain territory-specific publishing rights, translation licenses, and reprint permissions for each title and author contract.
- **Revenue Recognition Compliance**: Ind AS 115 / IFRS 15 compliant multi-period subscription revenue deferral and systematic release over delivery period.`
  },
  {
    slug: 'omnichannel-retail-chains',
    title: 'Omnichannel Retail Chains ERP: Unified POS, Loyalty Programs & Real-Time Inventory',
    tag: 'POS & Unified Loyalty',
    industry: 'Omnichannel Retail Chains',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    readTime: '7 min read',
    author: 'Aasaan Retail Technology Group',
    date: 'October 2026',
    excerpt: 'Multi-store offline-ready POS, unified loyalty programs, omnichannel returns, and real-time inventory visibility.',
    content: `## Building Seamless Customer Experiences Across All Retail Channels

Modern retail customers expect the same experience whether they shop in-store, on a mobile app, or through a marketplace — instant product availability, unified loyalty points, and frictionless returns across any channel.

### Core Retail Challenges Solved

1. **POS Offline Continuity**: Internet disruptions at store level cannot stop sales. Aasaan POS caches transactions locally and syncs automatically when connectivity resumes — zero lost sales.
2. **Inventory Synchronization**: A product sold at Store #12 must immediately reduce available stock across the website and all other store POS terminals — preventing overselling and ghost inventory.
3. **Unified Loyalty Across Channels**: Points earned on the app should be redeemable at the billing counter. Aasaan maintains one customer wallet across all touchpoints.

### Key Capabilities

- **Multi-Store POS Terminal Management**: Centrally push price lists, promotional schemes, and product master updates to hundreds of store POS terminals simultaneously.
- **Omnichannel Returns & Exchanges**: Accept returns from any channel at any store with intelligent restocking — automatically routing goods back to DC or local replenishment.
- **Dynamic Pricing & Promotions**: Time-based discounts, combo offers, BOGO schemes, and clearance markdown workflows — all configured centrally and enforced at POS.
- **Customer 360 Profile**: Complete purchase history, loyalty tier, returns record, and wishlist visible to any store associate or customer service agent.
- **Franchise & Multi-Format Management**: Separate P&Ls for company-owned, franchise, and shop-in-shop formats with inter-store transfer pricing and franchise royalty calculations.`
  },
  {
    slug: 'trading-regional-distribution',
    title: 'Trading & Regional Distribution ERP: Landed Cost, CIF Pricing & Depot Replenishment',
    tag: 'Landed Cost & CIF',
    industry: 'Trading & Regional Distribution',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    readTime: '6 min read',
    author: 'Aasaan Trade & Distribution Practice',
    date: 'October 2026',
    excerpt: 'High-volume purchase orders, customs/freight landed cost calculation, and automated regional depot replenishment.',
    content: `## Optimizing Multi-Tier Distribution Networks for Trading Companies

Trading companies and regional distributors handle massive SKU counts, complex supplier payment terms, multi-currency imports, and a network of C&F agents, distributors, and depot locations — all requiring precise margin visibility.

### Core Challenges Solved

1. **Landed Cost Accuracy**: Import costs go far beyond the invoice price — freight, insurance, customs duty, port handling, CHA charges, and inland transport must all be absorbed into COGS accurately.
2. **Regional Depot Replenishment**: Anticipating stock requirements across 50+ depot locations based on historical sales velocity, seasonal demand, and pending orders prevents stockouts and overstock simultaneously.
3. **Distributor Credit & Scheme Management**: Track outstanding balances, credit limits, scheme eligibility, and trade discount entitlements for hundreds of secondary distributors.

### Key Capabilities

- **Multi-Currency Purchase Orders**: Manage USD, EUR, and CNY supplier invoices with bank-rate and customs-rate foreign exchange booking for accurate duty and GST calculation.
- **Bill of Lading & Shipment Tracking**: End-to-end import shipment lifecycle from PO confirmation → BL receipt → port arrival → customs clearance → GRN at warehouse.
- **Automated Depot Transfer Orders**: AI-powered inter-depot replenishment recommendations based on days-of-stock calculations and transit time norms.
- **Scheme & Claims Management**: Track promotional scheme eligibility for distributors and generate automated debit/credit notes for claim settlements.
- **Sales Return & Damage Allowance**: Streamline distributor return authorizations, quality inspection at DC, and credit note issuance against damaged or expired goods.`
  },
  {
    slug: 'education-academic-institutes',
    title: 'Education & Academic Institutes ERP: Fee Lifecycle, SIS Integration & Scholarship Automation',
    tag: 'Fee Lifecycle & SIS',
    industry: 'Education & Academic Institutes',
    img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
    readTime: '6 min read',
    author: 'Aasaan Education Technology Division',
    date: 'October 2026',
    excerpt: 'Student lifecycle, automated fee installment generation, scholarship allocation, and examination result processing.',
    content: `## Digitizing the Complete Student Journey — Admission to Alumni

Educational institutions manage highly complex fee structures, government scholarship disbursements, examination scheduling, hostel management, and transport logistics — often on disconnected legacy software that burdens administrative staff.

### Core Challenges Solved

1. **Fee Collection & Reconciliation**: Automated installment generation based on admission date, course type, and payment plan — with online payment gateway integration and automatic receipt generation.
2. **Scholarship & Concession Management**: Track government scholarship eligibility (NSP, state schemes), merit-based concessions, and staff ward benefits — automatically netting against fee demand.
3. **Examination & Result Processing**: End-to-end exam module covering hall ticket generation, seating arrangements, mark entry, grade calculation, and result publication.

### Key Capabilities

- **Student Information System (SIS)**: Complete academic profile from admission enquiry → enrollment → subject registration → attendance → assessment → alumni record.
- **Multi-Course Fee Structures**: Different fee schedules for undergraduate, postgraduate, diploma, and professional programs — with pro-rata calculations for lateral entries.
- **Hostel & Transport Management**: Room allotment, mess billing, transport route management, and vehicle tracking integrated with student fee accounts.
- **Faculty Payroll & Appraisal**: Academic workload tracking, research publication credits, and performance-linked increment calculations.
- **Accreditation & Compliance Reports**: Auto-generate NAAC, NBA, and AICTE compliance reports from live transactional data — eliminating manual data compilation before inspections.`
  },
  {
    slug: 'sports-arena-management',
    title: 'Sports & Arena Management ERP: Event Ticketing, Kit Inventory & Venue Asset Lifecycle',
    tag: 'Venues & Assets',
    industry: 'Sports & Arena Management',
    img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80',
    readTime: '5 min read',
    author: 'Aasaan Sports & Events Technology',
    date: 'October 2026',
    excerpt: 'Event venue ticketing, athlete performance kit inventory, sports equipment maintenance, and brand sponsorship contracts.',
    content: `## Running World-Class Sports Facilities and Events on One Platform

Sports organizations, stadiums, and arena operators juggle event-day logistics, athlete welfare, equipment maintenance, sponsorship contract compliance, and gate revenue — often with fragmented systems that fail under peak-day load.

### Core Challenges Solved

1. **Event Ticketing & Gate Revenue**: Integrated ticketing with dynamic pricing, seat map management, group bookings, and real-time gate scan reconciliation to prevent revenue leakage.
2. **Athlete Kit & Equipment Inventory**: Track individual athlete kit issuance, laundry cycles, replacement schedules, and equipment calibration records across multiple teams and training facilities.
3. **Sponsorship Contract Management**: Ensure brand visibility deliverables (jersey logos, LED board seconds, PA announcements) are tracked and reported to sponsors with verifiable proof.

### Key Capabilities

- **Multi-Sport Venue Scheduling**: Arena, ground, court, and training pitch bookings with conflict detection and maintenance window blocking.
- **Player Performance & Medical Records**: Centralized athlete health records, injury logs, physiotherapy session tracking, and return-to-play clearance workflows.
- **Food & Beverage Concession Management**: POS integration for stadium concession stands with real-time stock depletion alerts during event-day peak.
- **Facility Asset Maintenance**: Preventive maintenance schedules for floodlights, scoreboards, turf irrigation, and gym equipment with vendor escalation tracking.
- **Event P&L Analysis**: Real-time event profitability tracking combining gate revenue, F&B, sponsorship, and merchandise against event-day operating costs.`
  },
  {
    slug: 'oil-gas-energy',
    title: 'Oil, Gas & Energy Fields ERP: Hazardous MRO, Pipeline Maintenance & HSE Compliance',
    tag: 'Hazardous MRO & Asset',
    industry: 'Oil, Gas & Energy Fields',
    img: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1200&q=80',
    readTime: '7 min read',
    author: 'Aasaan Energy & Resources Division',
    date: 'October 2026',
    excerpt: 'Hazardous field supply chain, pipeline maintenance schedules, statutory HSE compliance, and critical spare parts logs.',
    content: `## Mission-Critical Asset Management for Upstream, Midstream & Downstream Operations

Oil & gas operations demand zero-compromise equipment reliability, rigorous HSE (Health, Safety & Environment) compliance, and precise inventory management of critical spare parts — where a single valve failure can cost millions per hour in downtime.

### Core Challenges Solved

1. **Hazardous Material Classification**: MSDS-linked MRO inventory with ATEX zone classification, hazardous goods packaging requirements, and controlled dispensing workflows for explosive and toxic materials.
2. **Pipeline Integrity Management**: Schedule and track pig runs, cathodic protection readings, weld inspection records, and corrosion monitoring data across hundreds of pipeline kilometers.
3. **Statutory HSE Compliance**: Permit-to-work (PTW) systems, LOTO (Lock-Out-Tag-Out) procedures, safety audit checklists, and incident reporting — all digitized and auditable.

### Key Capabilities

- **Critical Spare Parts Catalog**: Min-max levels for rotating equipment spares (pump impellers, compressor seals, valve actuators) with automatic reorder on consumption.
- **Rig & Equipment Asset Ledger**: Complete lifecycle tracking from asset commissioning → periodic certification → overhaul → decommissioning with depreciation and insurance renewal alerts.
- **Vendor Qualification & Approved Supplier List**: Maintain OISD, API, and ASME-certified vendor registers with certificate expiry monitoring.
- **Production Allocation & Well Performance**: Daily well-wise production reporting, field allocation calculations, and decline curve analysis for upstream reservoir management.
- **Environmental Compliance Reporting**: Automated generation of CPCB/EPA-mandated emission logs, effluent treatment records, and annual environmental compliance statements.`
  },
  {
    slug: 'warehouse-3pl-logistics',
    title: 'Warehouse & 3PL Logistics ERP: Smart WMS, Cross-Docking & Barcode RF Automation',
    tag: 'Smart WMS & Cross-Dock',
    industry: 'Warehouse & 3PL Logistics',
    img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80',
    readTime: '7 min read',
    author: 'Aasaan Supply Chain & Logistics Group',
    date: 'October 2026',
    excerpt: 'Pick-pack-ship route optimization, multi-level bay/rack tracking, cross-docking, and barcode RF gun automation.',
    content: `## Building High-Velocity, Error-Free Warehouse Operations

Third-party logistics providers and large distribution centers process thousands of SKUs daily across receiving, put-away, picking, packing, and dispatch — where manual processes create mis-picks, inventory discrepancies, and delayed shipments.

### Core Challenges Solved

1. **Multi-Level Location Management**: Track inventory at Warehouse → Zone → Aisle → Bay → Rack → Bin → Pallet level — enabling precise directed put-away and pick path optimization.
2. **RF Barcode & RFID Automation**: Handheld RF gun workflows for every warehouse transaction — GRN, put-away, pick confirmation, replenishment, and cycle count — eliminate paper and human error.
3. **Cross-Docking Efficiency**: Receive goods from inbound trucks and directly transfer to outbound docks without intermediate storage — drastically reducing handling cost for fast-moving FMCG and e-commerce fulfillment.

### Key Capabilities

- **Directed Picking Strategies**: System-directed pick sequences optimized by proximity (zone picking), batch picking, cluster picking, or wave picking based on order profile.
- **3PL Multi-Client Management**: Segregated inventory, billing, and reporting per client on a shared warehouse infrastructure — with client-specific SLA dashboards.
- **Dock Scheduling & Yard Management**: Pre-book docking slots for inbound and outbound trucks, track trailer positions in the yard, and optimize dock door utilization.
- **Value-Added Services (VAS)**: Kitting, re-labeling, gift wrapping, and quality inspection workflows within the warehouse with separate billing to 3PL clients.
- **Returns Processing (Reverse Logistics)**: Automated returns receiving, disposition inspection (restock vs quarantine vs destroy), and credit note generation for e-commerce returns.`
  },
  {
    slug: 'waste-management-recycling',
    title: 'Waste Management & Recycling ERP: AWM Weighbridge, MRF Baling & CPCB Compliance',
    tag: 'AWM Weighbridge & CPCB',
    industry: 'Waste Management & Recycling',
    img: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=80',
    readTime: '7 min read',
    author: 'Aasaan Waste & Recycling Division',
    date: 'October 2026',
    excerpt: 'Digital weighbridge terminal scale integration, MRF baling, recycling batch conversion, and CPCB statutory manifests.',
    content: `## End-to-End Digital Control for Waste Collection, Processing & Compliance

Waste management companies and Material Recovery Facilities (MRF) handle complex inbound waste streams, multi-material segregation, batch recycling conversions, and strict CPCB/PCB statutory reporting — where manual processes lead to compliance gaps and revenue leakage.

### Core Challenges Solved

1. **Weighbridge Terminal Integration**: Direct serial/OPC interface with weighbridge indicators eliminates manual weight entry — capturing tare, gross, and net weights with vehicle, driver, and waste category automatically.
2. **Multi-Stream Waste Segregation**: Track incoming mixed municipal waste through manual and automated sorting — recording recyclable recovery rates by material category (HDPE, PET, aluminum, cardboard, e-waste).
3. **CPCB Statutory Manifests**: Auto-generate Form 1, Form 2, and annual returns required under Hazardous Waste Management Rules and Plastic Waste Management Rules.

### Key Capabilities

- **Vehicle Trip & Route Management**: GPS-tracked collection vehicle dispatching with route optimization, trip sheets, and driver performance monitoring.
- **MRF Baling & Batch Conversion**: Record bale weights, material composition, and conversion ratios from unsorted input to sellable recyclate output — auto-posting inventory and P&L entries.
- **Recyclate Sales & Pricing**: Manage commodity-linked pricing for recyclate categories (LDPE, LLDPE, paper, metals) with daily rate updates and buyer contract management.
- **EPR Compliance Tracking**: Monitor Extended Producer Responsibility certificate collection, plastic credit purchases, and annual EPR obligation fulfillment against registration targets.
- **Carbon Credit & ESG Reporting**: Calculate CO₂ equivalents diverted from landfill per tonnage processed — generating ESG reports and carbon credit documentation for sustainability audits.`
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
  const customUrl = typeof localStorage !== 'undefined' ? localStorage.getItem('aasaan_custom_backend_url') : null;
  const candidateUrls = [
    customUrl,
    import.meta.env.VITE_BACKEND_URL,
    'https://aasaan-erp-backend.onrender.com/api',
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

export function getCustomBackendUrl() {
  return (typeof localStorage !== 'undefined' ? localStorage.getItem('aasaan_custom_backend_url') : '') || '';
}

export function setCustomBackendUrl(url) {
  if (url && url.trim()) {
    const clean = url.trim().replace(/\/+$/, '');
    localStorage.setItem('aasaan_custom_backend_url', clean);
    BACKEND_URL = clean;
  } else {
    localStorage.removeItem('aasaan_custom_backend_url');
    BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'https://aasaan-erp-backend.onrender.com/api';
  }
}

// -------------------------------------------------------------
// LEADS / QUERIES API
// -------------------------------------------------------------

export async function getLeads() {
  let backendLeads = [];
  let cloudLeads = [];
  let localLeads = [];

  // 1. Read existing leads submitted in this browser (localStorage)
  try {
    const raw = localStorage.getItem('aasaan_demo_queries');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        localLeads = parsed;
      }
    }
  } catch (e) {}

  // 2. Fetch from backend (Render cloud or local Spring Boot)
  try {
    const res = await fetch(`${BACKEND_URL}/leads`, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data)) {
        backendLeads = data;
      }
      isServerOnline = true;
    }
  } catch (e) {
    isServerOnline = false;
  }

  // 3. Fetch from Google Sheets webhook if configured
  if (CLOUD_WEBHOOK_URL) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3500);
      const cloudRes = await fetch(CLOUD_WEBHOOK_URL, { cache: 'no-store', signal: controller.signal });
      clearTimeout(timeoutId);
      if (cloudRes.ok) {
        const text = await cloudRes.text();
        try {
          const parsed = JSON.parse(text);
          if (Array.isArray(parsed)) {
            cloudLeads = parsed;
          }
        } catch (jsonErr) {}
      }
    } catch (cloudErr) {}
  }

  // 4. Combine all sources with user-submitted local leads taking priority
  // We prioritize locally submitted leads first, then cloud leads, then backend leads
  const combined = [...localLeads, ...cloudLeads, ...backendLeads];

  // De-duplicate by unique key (email + phone or ID)
  const seenKeys = new Set();
  const mergedLeads = [];

  for (const item of combined) {
    if (!item) continue;
    const emailKey = (item.email || '').trim().toLowerCase();
    const phoneKey = (item.phone || '').trim();
    const key = (emailKey || phoneKey) ? `${emailKey}|${phoneKey}` : `id-${item.id}`;

    if (!seenKeys.has(key)) {
      seenKeys.add(key);
      mergedLeads.push(item);
    }
  }

  // If literally no leads exist anywhere, fall back to DEFAULT_LEADS
  const finalLeads = mergedLeads.length > 0 ? mergedLeads : DEFAULT_LEADS;

  try {
    localStorage.setItem('aasaan_demo_queries', JSON.stringify(finalLeads));
  } catch (e) {}

  return finalLeads;
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
  let storedBlogs = [];

  // Try backend first
  try {
    const res = await fetch(`${BACKEND_URL}/blogs`, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        storedBlogs = data;
      }
    }
  } catch (e) {}

  // If backend failed, try localStorage
  if (storedBlogs.length === 0) {
    try {
      const raw = localStorage.getItem('aasaan_industry_blogs');
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) storedBlogs = parsed;
      }
    } catch (e) {}
  }

  // Always merge INITIAL_INDUSTRY_BLOGS — any slug not already in storedBlogs gets added
  const storedSlugs = new Set(storedBlogs.map(b => b.slug));
  const merged = [
    ...storedBlogs,
    ...INITIAL_INDUSTRY_BLOGS.filter(b => !storedSlugs.has(b.slug))
  ];

  // Persist merged list back to localStorage
  try {
    localStorage.setItem('aasaan_industry_blogs', JSON.stringify(merged));
  } catch (e) {}

  return merged.length > 0 ? merged : INITIAL_INDUSTRY_BLOGS;
}

export async function getBlogBySlug(slug) {
  const normSlug = (slug || '').toLowerCase().trim();
  const blogs = await getBlogs();
  const foundBlog = blogs.find(b => b.slug === normSlug || b.slug.toLowerCase() === normSlug);
  if (foundBlog) return foundBlog;

  // 1. Check Lite Features
  const features = await getLiteFeatures();
  const foundFeature = features.find(f => {
    const fSlug = (f.slug || f.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'));
    return fSlug === normSlug || normSlug.includes(fSlug) || fSlug.includes(normSlug);
  });
  if (foundFeature) {
    return {
      slug: normSlug,
      title: foundFeature.title,
      tag: foundFeature.tag || 'ERP Lite Feature',
      industry: 'Aasaan ERP Lite — Core Capabilities',
      img: foundFeature.img,
      readTime: foundFeature.readTime || '5 min read',
      author: foundFeature.author || 'Aasaan Product Architecture Team',
      date: foundFeature.date || 'October 2026',
      excerpt: foundFeature.desc,
      content: foundFeature.content || `## ${foundFeature.title}

${foundFeature.desc}

### Why Growing Businesses Rely on This Feature

In high-velocity commerce and SME operations, every minute spent on manual coordination slows down cash flow and delivery. **${foundFeature.title}** eliminates friction between sales reps, warehouse dispatch, and accounting.

### Critical Operational Advantages
- **Instant Synchronization**: No double-entry required; transactions flow directly into inventory registers and tax ledgers.
- **Mobile-First Visibility**: Operators and field agents access real-time status anywhere, anytime.
- **Automated Audit Compliance**: Zero manual tampering, verified timestamps, and instant customer receipts.

### Live Architecture Workflow
1. **Trigger & Capture**: Inbound inquiries, orders, or stock alerts are indexed instantaneously.
2. **Automated Validation**: Rule engines check credit thresholds, stock reserves, and tax slabs.
3. **Dispatch & Settlement**: One-click generation of delivery documents and digital payment tracking.`
    };
  }

  // 2. Check Lite Industries
  const industries = await getLiteIndustries();
  const foundIndustry = industries.find(ind => {
    const iSlug = (ind.slug || ind.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'));
    return iSlug === normSlug || normSlug.includes(iSlug) || iSlug.includes(normSlug);
  });
  if (foundIndustry) {
    return {
      slug: normSlug,
      title: `${foundIndustry.name} ERP Architecture`,
      tag: foundIndustry.tag || 'SME Industry Solution',
      industry: `ERP Lite — ${foundIndustry.name}`,
      img: foundIndustry.img,
      readTime: foundIndustry.readTime || '6 min read',
      author: foundIndustry.author || 'Aasaan SME Solutions Practice',
      date: foundIndustry.date || 'October 2026',
      excerpt: foundIndustry.desc,
      content: foundIndustry.content || `## Accelerating Growth in ${foundIndustry.name}

${foundIndustry.desc}

### Industry Operational Complexities Solved

Businesses operating in **${foundIndustry.name}** face tight turnaround margins, distributed vendor networks, and rapid replenishment cycles. 

Aasaan ERP Lite delivers a purpose-built system tuned to ${foundIndustry.name} without the expense and delays of legacy enterprise software.

### Core Capabilities Tuned for ${foundIndustry.name}
- **Sector-Specific Master Templates**: Pre-configured charts of accounts, tax structures, and item masters.
- **Rapid 7-Day Implementation**: Deploy with your core team in under a week with pre-formatted Excel imports.
- **Automated Daily Reconciliations**: Live cash-in-hand, outstanding receivables, and bank statement tracking.`
    };
  }

  // 3. Check AWM Core Modules
  const modules = await getAwmModules();
  const foundModule = modules.find(m => {
    const mSlug = (m.slug || m.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'));
    return mSlug === normSlug || normSlug.includes(mSlug) || mSlug.includes(normSlug);
  });
  if (foundModule) {
    return {
      slug: normSlug,
      title: `${foundModule.title} — Industrial Automation Architecture`,
      tag: foundModule.tag || 'AWM Automation Module',
      industry: 'Aasaan Waste Management (AWM)',
      img: foundModule.img,
      readTime: foundModule.readTime || '6 min read',
      author: foundModule.author || 'AWM Systems Engineering Group',
      date: foundModule.date || 'October 2026',
      excerpt: foundModule.desc,
      content: foundModule.content || `## Industrial Automation: ${foundModule.title}

${foundModule.desc}

### Why Industrial Facilities & Municipalities Require Automated Hardware Integration

Manual ticketing and disconnected spreadsheets at waste intake facilities lead to weighing tampering, inaccurate tipping fees, and severe pollution compliance penalties. 

**${foundModule.title}** provides end-to-end digital control, connecting field sensors, weighbridge indicators, and cloud financial ledgers into one unified loop.

### Key Engineering Standards
- **Zero-Tamper Hardware Bridging**: Direct RS-232 / TCP-IP indicator hookups with zero operator override capability.
- **State Pollution Control Board & CPCB Manifests**: Automated digital filing of Form 6 manifests and hazardous stream tracking.
- **Real-Time Fleet & Yard Telemetry**: Instant sync with driver GPS, bin RFID scans, and dispatch centers.`
    };
  }

  // 4. Check AWM Leaders & Case Studies
  const clients = await getAwmClients();
  const foundClient = clients.find(c => {
    const cSlug = (c.slug || c.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'));
    return cSlug === normSlug || normSlug.includes(cSlug) || cSlug.includes(normSlug);
  });
  if (foundClient) {
    return {
      slug: normSlug,
      title: `How ${foundClient.name} Transformed Multi-Yard Operations with AWM`,
      tag: foundClient.type || 'Enterprise Case Study',
      industry: `Circular Economy — ${foundClient.name}`,
      img: foundClient.img,
      readTime: foundClient.readTime || '5 min read',
      author: foundClient.author || 'Aasaan Enterprise Solutions Advisory',
      date: foundClient.date || 'October 2026',
      excerpt: foundClient.desc,
      content: foundClient.content || `## Enterprise Case Study: ${foundClient.name}

${foundClient.desc}

### Proven On-Ground Performance Metrics
- **Verified Benchmark**: ${foundClient.metric || 'Sub-45s Weighbridge Turnaround • 100% Audit Compliance'}

### The Operational Challenge

Prior to adopting AWM, scaling operations across multiple sorting depots created huge reconciliation bottlenecks. Weighment slips, vehicle trip sheets, and scrap segregation logs were recorded manually, resulting in billing delays and revenue leakage.

### The AWM Solution & Impact
By deploying Aasaan Waste Management (AWM):
1. **Automated Gate Intake**: Trucks are weighed, gross/tare calculated, and digital tickets generated in seconds.
2. **Mass-Balance Audit Trails**: Scrap yields from incoming loads to baled commodities are audited in real time.
3. **Instant Financial Settlements**: Payouts and recycling credits are automatically computed and synchronized with corporate ledgers.`
    };
  }

  // Fallback fuzzy search on standard blogs
  return blogs.find(b => 
    b.slug.includes(normSlug) || 
    normSlug.includes(b.slug) ||
    b.title.toLowerCase().includes(normSlug.replace(/-/g, ' ').toLowerCase())
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

// -------------------------------------------------------------
// DYNAMIC EDITABLE CONTENT (Lite Features, Lite Industries, AWM Modules, AWM Clients)
// -------------------------------------------------------------

export const INITIAL_LITE_FEATURES = DEFAULT_LITE_FEATURES.map((f, i) => ({
  id: `lf-${i + 1}`,
  title: f.title,
  desc: f.desc,
  tag: f.tag || 'Feature',
  icon: f.icon || 'Sparkles',
  img: f.img || ''
}));

export const INITIAL_LITE_INDUSTRIES = DEFAULT_LITE_INDUSTRIES.map((ind, i) => ({
  id: `li-${i + 1}`,
  name: ind.name,
  tag: ind.tag || 'Industry',
  desc: ind.desc,
  img: ind.img || ''
}));

export const INITIAL_AWM_MODULES = DEFAULT_AWM_MODULES.map((m, i) => ({
  id: `am-${i + 1}`,
  title: m.title,
  tag: m.tag || 'AWM Module',
  desc: m.desc,
  icon: m.icon || 'Layers',
  img: m.img || ''
}));

export const INITIAL_AWM_CLIENTS = DEFAULT_AWM_CLIENTS.map((c, i) => ({
  id: `ac-${i + 1}`,
  name: c.name,
  type: c.type || 'Environmental Operations',
  desc: c.desc,
  metric: c.metric || '',
  img: c.img || ''
}));

async function getSectionItems(section, storageKey, defaultItems) {
  try {
    const res = await fetch(`${BACKEND_URL}/content/${section}`, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        localStorage.setItem(storageKey, JSON.stringify(data));
        return data;
      } else if (Array.isArray(data) && data.length === 0) {
        // Seed default to backend if empty
        try {
          await fetch(`${BACKEND_URL}/content/${section}/bulk`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(defaultItems)
          });
        } catch (e) {}
      }
    }
  } catch (e) {}

  try {
    const raw = localStorage.getItem(storageKey);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
    localStorage.setItem(storageKey, JSON.stringify(defaultItems));
    return defaultItems;
  } catch (e) {
    return defaultItems;
  }
}

async function saveSectionItem(section, storageKey, item, defaultItems) {
  const isNew = !item.id;
  const id = item.id || `${section}_${Date.now()}`;
  const itemToSave = { ...item, id };

  try {
    if (isNew) {
      await fetch(`${BACKEND_URL}/content/${section}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(itemToSave)
      });
    } else {
      await fetch(`${BACKEND_URL}/content/${section}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(itemToSave)
      });
    }
  } catch (e) {}

  const all = await getSectionItems(section, storageKey, defaultItems);
  let updated;
  if (isNew) {
    updated = [itemToSave, ...all];
  } else {
    const idx = all.findIndex(x => String(x.id) === String(id));
    if (idx !== -1) {
      updated = [...all];
      updated[idx] = itemToSave;
    } else {
      updated = [itemToSave, ...all];
    }
  }
  localStorage.setItem(storageKey, JSON.stringify(updated));
  return itemToSave;
}

async function deleteSectionItem(section, storageKey, id, defaultItems) {
  try {
    await fetch(`${BACKEND_URL}/content/${section}/${id}`, { method: 'DELETE' });
  } catch (e) {}

  const all = await getSectionItems(section, storageKey, defaultItems);
  const updated = all.filter(x => String(x.id) !== String(id));
  localStorage.setItem(storageKey, JSON.stringify(updated));
  return updated;
}

// 1. Lite Features
export const getLiteFeatures = () => getSectionItems('lite-features', 'aasaan_lite_features', INITIAL_LITE_FEATURES);
export const saveLiteFeature = (item) => saveSectionItem('lite-features', 'aasaan_lite_features', item, INITIAL_LITE_FEATURES);
export const deleteLiteFeature = (id) => deleteSectionItem('lite-features', 'aasaan_lite_features', id, INITIAL_LITE_FEATURES);

// 2. Lite Industries
export const getLiteIndustries = () => getSectionItems('lite-industries', 'aasaan_lite_industries', INITIAL_LITE_INDUSTRIES);
export const saveLiteIndustry = (item) => saveSectionItem('lite-industries', 'aasaan_lite_industries', item, INITIAL_LITE_INDUSTRIES);
export const deleteLiteIndustry = (id) => deleteSectionItem('lite-industries', 'aasaan_lite_industries', id, INITIAL_LITE_INDUSTRIES);

// 3. AWM Core Modules
export const getAwmModules = () => getSectionItems('awm-modules', 'aasaan_awm_modules', INITIAL_AWM_MODULES);
export const saveAwmModule = (item) => saveSectionItem('awm-modules', 'aasaan_awm_modules', item, INITIAL_AWM_MODULES);
export const deleteAwmModule = (id) => deleteSectionItem('awm-modules', 'aasaan_awm_modules', id, INITIAL_AWM_MODULES);

// 4. AWM Leaders & Case Studies
export const getAwmClients = () => getSectionItems('awm-clients', 'aasaan_awm_clients', INITIAL_AWM_CLIENTS);
export const saveAwmClient = (item) => saveSectionItem('awm-clients', 'aasaan_awm_clients', item, INITIAL_AWM_CLIENTS);
export const deleteAwmClient = (id) => deleteSectionItem('awm-clients', 'aasaan_awm_clients', id, INITIAL_AWM_CLIENTS);


