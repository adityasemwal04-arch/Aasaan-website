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
    slug: 'financial-management',
    title: 'Financial Management',
    tag: 'Core Accounting & Finance',
    industry: 'Financial Management',
    img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    readTime: '6 min read',
    author: 'Aasaan Finance Architecture Practice',
    date: 'October 2026',
    excerpt: 'A full suite of accounting functions and reporting tools, to meet the needs of growing companies. Multi-currency, GST, e-Way bills, and real-time ledgers.',
    content: `## Financial Management

A full suite of accounting functions and reporting tools, to meet the needs of growing companies.

In enterprise operations, disconnected ledgers and spreadsheet-based bookkeeping create blind spots, cash flow delays, and audit risks. **Aasaan ERP Financial Management** acts as the central nervous system of your business—unifying sales invoices, vendor payments, bank feeds, and statutory tax compliance in real time.

### Key Capabilities

1. **General Ledger & Multi-Entity Accounting**:
   - Multi-branch, multi-company, and multi-currency ledgers with automatic exchange gain/loss calculations.
   - Flexible Chart of Accounts (COA) tailored for manufacturing, retail, and service businesses.
   - Automated journal entries generated directly from sales, purchase, and inventory transactions.

2. **Automated Bank Reconciliation**:
   - Direct import of bank statements (MT940, CSV, Excel) with rule-based auto-matching of credits and debits.
   - Instant visibility into uncleared cheques, pending vendor disbursements, and unbilled collections.

3. **Statutory Tax & Regulatory Compliance**:
   - Built-in GST calculation across CGST, SGST, IGST with 1-click GSTR-1, GSTR-2B, and GSTR-3B preparation.
   - Native integration with government e-Invoicing and e-Way Bill generation APIs.
   - Automated TDS (Tax Deducted at Source) deductions, challan tracking, and Form 16A generation.

4. **Accounts Receivable & Accounts Payable (AR/AP)**:
   - Automated debtor aging reports (30/60/90 days) with automated WhatsApp and email payment reminders.
   - Vendor credit management, 3-way matching of Purchase Order vs. Goods Receipt vs. Vendor Invoice.
   - Early payment discount tracking and planned cash outflow calendars.

5. **Financial Statements & Executive Audits**:
   - Instant drill-down from Balance Sheet, Profit & Loss (P&L), and Cash Flow statement down to the underlying voucher.
   - Comprehensive audit trail with tamper-proof user activity logging and approval workflows.`
  },
  {
    slug: 'stock-control',
    title: 'Stock Control',
    tag: 'Multi-Location Inventory',
    industry: 'Stock Control',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    readTime: '6 min read',
    author: 'Aasaan Supply Chain Practice',
    date: 'October 2026',
    excerpt: "Effortlessly manage inventory with AASAAN ERP's smart Stock Control module. Multi-warehouse tracking, batch/serial numbers, and automated reorder triggers.",
    content: `## Stock Control

Effortlessly manage inventory with AASAAN ERP's smart Stock Control module.

Inventory miscounts and stockouts lead to lost revenue and dissatisfied customers. **Aasaan ERP Stock Control** provides minute-by-minute visibility of materials across central depots, branch warehouses, transit vehicles, and store shelves.

### Key Capabilities

1. **Multi-Warehouse & Bin Location Hierarchy**:
   - Structure warehouses by zones, aisles, racks, shelves, and bins for pinpoint item retrieval.
   - Real-time stock reservation for open sales orders without causing double allocation.
   - Stock movement workflows: Inward Gate Pass (GRN), Internal Transfer, Material Issue, and Outward Gate Pass.

2. **Batch, Lot & Serial Number Tracking**:
   - End-to-end traceability from raw material intake to customer dispatch with full pedigree logs.
   - Support for expiration dates with First-Expired-First-Out (FEFO) and First-In-First-Out (FIFO) picking rules.
   - Rapid product recall capabilities pinpointing every customer who received a specific batch.

3. **Automated Reordering & Minimum Safety Stock**:
   - Dynamic reorder thresholds based on historical lead times and seasonal demand forecasting.
   - Automated purchase requisition creation when physical or reserved stock breaches minimum safety levels.

4. **Barcode & QR Code Mobile Scanning**:
   - Android-based mobile barcode scanning for fast receiving, cycle counts, stock audits, and dispatch packing.
   - Generates and prints custom product barcodes, GS1 labels, and carton shipping labels directly from ERP.

5. **Valuation & Landed Cost Allocation**:
   - Real-time valuation using Weighted Average Cost, FIFO, or Standard Costing methods.
   - Automated allocation of freight, customs duty, port clearance, and handling charges into raw material unit cost.`
  },
  {
    slug: 'crm',
    title: 'CRM',
    tag: 'Customer Relationship Management',
    industry: 'CRM',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    readTime: '5 min read',
    author: 'Aasaan Sales & Growth Practice',
    date: 'October 2026',
    excerpt: 'Seamlessly manage leads, track customer interactions, and boost sales conversions. Visual pipelines, quote generation, and team performance metrics.',
    content: `## CRM

Seamlessly manage leads, track customer interactions, and boost sales conversions.

Closing high-value accounts requires structured follow-ups, contextual client history, and fast quote turnaround. **Aasaan ERP CRM** unifies your marketing leads, field sales representatives, and customer relationship managers on a single collaborative canvas.

### Key Capabilities

1. **Omni-Channel Lead Capture & Intelligent Routing**:
   - Automatically captures inquiries from website contact forms, WhatsApp Business, Indiamart, TradeIndia, and email inboxes.
   - Rule-based lead distribution by geography, product category, deal size, or agent availability.

2. **Visual Kanban Deal Pipelines**:
   - Drag-and-drop sales stages from Initial Discovery, Qualification, Technical Demo, Proposal Sent, Negotiation, to Closed-Won.
   - Instant deal probability weighting for accurate revenue and sales quota forecasting.

3. **Quotation Generation & Revision History**:
   - Generate professional, branded PDF quotations in under 60 seconds with item pricing and discount tiers.
   - Complete version control tracking quotation revisions with client approval timestamps.
   - One-click conversion from approved quotation into a live Sales Order without manual data re-entry.

4. **Interaction Timeline & Follow-Up Reminders**:
   - Centralized timeline recording calls, meeting notes, emails, and WhatsApp conversations for every contact.
   - Automated task reminders alerting sales reps before scheduled calls or proposal follow-ups.

5. **Sales Analytics & Executive Dashboards**:
   - Real-time win/loss ratio analysis, sales cycle duration metrics, and individual sales rep performance targets.`
  },
  {
    slug: 'purchasing',
    title: 'Purchasing',
    tag: 'Procurement & Vendor Management',
    industry: 'Purchasing',
    img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80',
    readTime: '6 min read',
    author: 'Aasaan Procurement Engineering Team',
    date: 'October 2026',
    excerpt: "Streamline vendor management and optimize procurement with Aasaan ERP's smart Purchasing module. RFQ comparison, 3-way matching, and automated PO approvals.",
    content: `## Purchasing

Streamline vendor management and optimize procurement with Aasaan ERP's smart Purchasing module.

Effective procurement directly protects business margins. **Aasaan ERP Purchasing** eliminates Maverick buying, standardizes vendor selections, and guarantees that every payment is verified against physical goods delivered.

### Key Capabilities

1. **Purchase Requisition (PR) to Purchase Order (PO) Workflow**:
   - Departmental requisition workflows with multi-tier managerial approval thresholds based on budget limits.
   - Automated consolidation of requisitions across multiple branches to negotiate bulk volume discounts.

2. **Request for Quotation (RFQ) & Vendor Comparison Matrices**:
   - Dispatches RFQ inquiries to approved suppliers with 1-click comparison of unit rates, delivery lead times, and payment terms.
   - Maintains historical vendor pricing records to evaluate rate changes and inflation trends.

3. **3-Way Matching & Fraud Prevention**:
   - Automatic cross-validation between the Purchase Order, Inward Goods Receipt Note (GRN), and Vendor Tax Invoice.
   - Flags price variances, excess delivery quantities, or unapproved freight charges before releasing accounts payable vouchers.

4. **Vendor Rating & Performance Scorecards**:
   - Automated scoring of suppliers based on On-Time In-Full (OTIF) delivery metrics, material rejection rates, and billing accuracy.
   - Maintains approved vendor lists (AVL) with compliance certifications and GSTIN validity checks.

5. **Debit Notes & Return to Vendor (RTV)**:
   - Streamlined workflows for rejected quality inspections (QC failed), automatically creating debit notes and return gate passes.`
  },
  {
    slug: 'sales',
    title: 'Sales',
    tag: 'Order Management & Billing',
    industry: 'Sales',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    readTime: '6 min read',
    author: 'Aasaan Commercial Operations Team',
    date: 'October 2026',
    excerpt: 'Effortlessly manage your entire sales cycle with AASAAN ERP – from lead to deal! Multi-tier pricing, e-invoicing, and customer credit controls.',
    content: `## Sales

Effortlessly manage your entire sales cycle with AASAAN ERP – from lead to deal!

In fast-paced B2B and distribution environments, order processing speed dictates market leadership. **Aasaan ERP Sales** links customer orders directly to warehouse fulfillment and tax billing, eliminating bottlenecks and shipping delays.

### Key Capabilities

1. **Omni-Channel Sales Order Processing**:
   - Centralizes orders received via field sales agents, customer portals, B2B marketplaces, EDI, and email.
   - Automated credit check verification against customer outstanding balances and predefined credit limits.

2. **Tier-Based Price Lists & Promotional Schemes**:
   - Unlimited custom price lists (Wholesale, Retail, Distributor, OEM) with currency and volume slab pricing.
   - Automatic discount application based on order quantity, seasonal campaigns, and prompt payment terms.

3. **Pick, Pack, & Ship Fulfillment Lifecycle**:
   - Generates digital pick lists organized by warehouse bin locations to minimize order picking time.
   - Packing slip creation with barcode verification ensuring zero dispatch error rates.
   - Integration with leading logistics couriers for automated tracking number generation and dispatch manifests.

4. **1-Click GST e-Invoicing & E-Way Bills**:
   - Generates QR-code compliant GST e-Invoices with immediate IRN (Invoice Reference Number) generation.
   - Instant e-Way bill creation linked directly to vehicle registration numbers and transporter IDs.

5. **Customer Accounts & Receivables Portal**:
   - Self-service customer access to download tax invoices, check shipment status, and review account statements.`
  },
  {
    slug: 'service',
    title: 'Service',
    tag: 'Field Service & Ticketing',
    industry: 'Service',
    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80',
    readTime: '5 min read',
    author: 'Aasaan Customer Success Practice',
    date: 'October 2026',
    excerpt: "Streamline your operations and elevate customer satisfaction with AASAAN ERP's smart Service module. Ticket management, field technician dispatch, and AMC tracking.",
    content: `## Service

Streamline your operations and elevate customer satisfaction with AASAAN ERP's smart Service module.

Post-sale customer service and equipment maintenance define long-term brand loyalty and recurring revenue. **Aasaan ERP Service** automates support ticket management, field technician dispatch, Annual Maintenance Contracts (AMC), and warranty tracking.

### Key Capabilities

1. **Customer Support Ticketing & SLA Tracking**:
   - Multi-channel ticket logging through email, customer portal, telephone, and WhatsApp.
   - Automatic categorization by product serial number, issue severity, and contracted SLA resolution timeframes.
   - Escalation matrices alerting service managers if a high-priority ticket approaches SLA breach.

2. **Field Technician Mobile Dispatch**:
   - Real-time job assignment to field technicians based on technician geographic proximity, skillset, and parts availability.
   - Mobile app for technicians to view site locations, log diagnostic notes, capture customer digital signatures, and upload on-site photos.

3. **Warranty Validation & Spare Parts Consumption**:
   - Instant serial number lookup to check warranty status, previous service history, and replacement eligibility.
   - Field engineers record spare parts consumed directly from their mobile app, automatically updating central inventory and issuing billing invoices for out-of-warranty repairs.

4. **Annual Maintenance Contracts (AMC) & Preventive Maintenance (PPM)**:
   - Automated tracking of AMC contract tenures, service visit schedules, and renewal quotation reminders.
   - System-generated recurring preventive maintenance work orders to minimize equipment breakdown for clients.

5. **Customer Satisfaction (CSAT) & Feedback**:
   - Automated post-service SMS and WhatsApp survey links to capture Net Promoter Score (NPS) and technician ratings.`
  },
  {
    slug: 'reporting',
    title: 'Reporting',
    tag: 'Analytics & Business Intelligence',
    industry: 'Reporting',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    readTime: '5 min read',
    author: 'Aasaan BI & Data Engineering Team',
    date: 'October 2026',
    excerpt: 'Comprehensive, real-time insights at your fingertips with AASAAN ERP Reporting. Executive BI dashboards, drill-down analytics, and automated compliance reports.',
    content: `## Reporting

Comprehensive, real-time insights at your fingertips with AASAAN ERP Reporting.

In modern business, decisions cannot wait for month-end manual accounting reviews. **Aasaan ERP Reporting** turns raw transactional data across finance, sales, inventory, and production into clear, real-time visual insights and executive dashboards.

### Key Capabilities

1. **Real-Time Executive Dashboards**:
   - Key Performance Indicators (KPIs) at a glance: Gross Margin, Net Profit, Day Sales Outstanding (DSO), Inventory Turnover Ratio, and Cash Runway.
   - Role-based permissions ensuring branch managers, sales leads, and C-level executives see only their authorized data slices.

2. **300+ Pre-Configured Operational Reports**:
   - Out-of-the-box financial statements: Balance Sheet, Trial Balance, Profit & Loss, Ledger Accounts, and Cash Flow.
   - Sales & procurement reports: Item-wise profitability, vendor delivery compliance, customer purchase trends, and regional sales performance.
   - Inventory reports: Stock aging, slow-moving items, stock ledger reconciliations, and reorder projections.

3. **Interactive Multi-Level Drill-Down**:
   - Click on any top-level dashboard figure to drill into branch totals, customer accounts, and individual underlying tax invoices or vouchers.

4. **Custom Report Builder & Query Views**:
   - Intuitive drag-and-drop report designer allowing business users to filter, sort, group, and summarize columns without technical coding.
   - Save custom report configurations for one-click access across team members.

5. **Scheduled Automated Delivery**:
   - Configure automated daily, weekly, or monthly delivery of key reports directly to stakeholder inboxes or WhatsApp in PDF/Excel formats.`
  },
  {
    slug: 'manufacturing',
    title: 'Manufacturing',
    tag: 'Production & Shop Floor',
    industry: 'Manufacturing',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    readTime: '7 min read',
    author: 'Aasaan Manufacturing Practice Lead',
    date: 'October 2026',
    excerpt: "Streamline your production process with AASAAN ERP's intelligent Manufacturing module. Multi-level BOM, machine routing, scrap accounting, and MRP.",
    content: `## Manufacturing

Streamline your production process with AASAAN ERP's intelligent Manufacturing module.

Discrete and process manufacturing operations require seamless coordination between raw material availability, machine capacity, shop-floor workforce, and delivery timelines. **Aasaan ERP Manufacturing** synchronizes your plant operations directly with procurement and finance.

### Key Capabilities

1. **Multi-Level Bill of Materials (BOM)**:
   - Supports complex hierarchical BOMs with sub-assemblies, phantom assemblies, and revision engineering control.
   - Tracks scrap factors and expected yield percentages at every transformation stage.
   - Dynamic BOM explosion calculating exact component demand for planned production volumes.

2. **Material Requirements Planning (MRP)**:
   - Automated calculation of material shortages comparing open sales orders and planned production schedules against on-hand inventory.
   - Generates purchase requisitions for outsourced components and production work orders for in-house assemblies.

3. **Work Center Capacity & Routing Planning**:
   - Define multi-step production routings specifying machine spindle hours, labor setup times, and run times per workstation.
   - Live Gantt chart visualization of machine loads to eliminate shop-floor bottlenecks and balance line throughput.

4. **Digital Job Cards & Floor Terminal Tracking**:
   - Operators log active production batches using barcode/QR scanning at floor terminals to track run duration, output count, and machine downtime causes.
   - Real-time work-in-progress (WIP) tracking with automatic stock valuation as materials advance through work centers.

5. **Quality Control & In-Process Inspection**:
   - Mandatory QC gates at raw material inwarding, intermediate WIP stages, and finished goods transfer to warehouse.
   - Defect logging, non-conformance reports (NCR), and automated quarantine isolation of suspect batches.`
  },
  {
    slug: 'waste-management',
    title: 'Waste Management',
    tag: 'AWM Specialized Solution',
    industry: 'Waste Management',
    img: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=80',
    readTime: '7 min read',
    author: 'AWM Circular Economy Practice',
    date: 'October 2026',
    excerpt: 'AWM is tailored for businesses in the waste management sector, offering comprehensive tools for inventory tracking, bin management, and order fulfillment.',
    content: `## Waste Management

AWM is tailored for businesses in the waste management sector, offering comprehensive tools for inventory tracking, bin management, and order fulfillment.

Waste management, material recycling, and scrap processing facilities operate under strict environmental regulations, volatile commodity pricing, and high-volume weighbridge logistics. **Aasaan Waste Management (AWM)** is the specialized industry solution built from the ground up for circular economy leaders.

### Key Capabilities

1. **Weighbridge Hardware Automation**:
   - Direct RS-232, RS-485, and IP network integration with digital weighbridge indicators (Avery, Essae, Cardinal).
   - Automated Gross, Tare, and Net weight calculation with license plate vehicle capture cameras to prevent fraud.
   - High-speed weighbridge slip printing and driver receipt generation in under 10 seconds per vehicle.

2. **Smart Bin & Container Asset Tracking**:
   - RFID and barcode tagging of skip bins, roll-on containers, and hazardous drums.
   - Track physical container deployment at client sites, collection frequency, fill levels, and overdue container dwell times.

3. **Hazardous & Municipal Compliance (EPR)**:
   - Compliant with hazardous waste manifests, pollution control board reporting, and Extended Producer Responsibility (EPR) mandates.
   - Instant generation of digital recycling certificates and verified waste destruction documentation for corporate audit trails.

4. **Material Grading, Sorting & Recovery Accounting**:
   - Capture contamination deduction percentages directly at reception inspection docks.
   - Track sorting line throughput, baling operations, shredded material inventory, and recovery ratios across plastics, metals, paper, and electronic e-waste.

5. **Dynamic Commodity Pricing & Contractor Billing**:
   - Tiered rate matrices based on material grade purity, moisture deduction formulas, and index commodity prices.
   - Automated billing for container rental, scheduled haulage transport, and tipping gate fees.`
  },
  {
    slug: 'digital-ceo',
    title: 'Digital CEO',
    tag: 'Executive Command Center',
    industry: 'Digital CEO',
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    readTime: '6 min read',
    author: 'Aasaan Executive Intelligence Group',
    date: 'October 2026',
    excerpt: 'An AI-powered central command cockpit for founders, CEOs, and C-suite leaders. Synthesizes multi-plant operations, cash flow projections, margin leakages, and strategic KPI variances.',
    content: `## Digital CEO — Executive Command Center

An AI-driven executive cockpit engineered for founders, CEOs, and C-suite leadership.

Running a multi-entity, multi-location enterprise requires immediate visibility without sifting through hundreds of departmental spreadsheets. **Aasaan Digital CEO** unifies plant operations, daily treasury runway, margin leakages, and strategic KPI variances into a real-time decision intelligence cockpit.

### Key Capabilities

1. **Multi-Entity Executive Flash Reports**:
   - Synthesizes real-time performance indicators across factories, branch warehouses, and international subsidiaries.
   - Live revenue burn, operating gross margin, and working capital ratios refreshed continuously without manual compilation.

2. **Automated Anomaly & Margin Leak Alerts**:
   - Machine learning watches purchase order variances, unauthorized price discounts, and abnormal manufacturing scrap spikes.
   - Proactive mobile and WhatsApp alerts before small operational variances impact monthly profitability.

3. **Predictive Cash Runway & Burn Analytics**:
   - Projects 30, 60, and 90-day cash positions based on confirmed customer receivables, historical debtor delay patterns, and scheduled supplier payments.
   - Simulates capital expenditure scenarios and tax liabilities before major investment decisions.

4. **Conversational KPI & Natural Language Querying**:
   - Query your ERP database using simple natural language: *"What was our gross margin in Bhiwandi plant last week?"* or *"Show top 5 overdue debtors over ₹10 Lakhs"*.
   - Generates instant interactive charts and data slices on your mobile or desktop screen.

5. **Strategic Actionable Scorecards**:
   - Cascades corporate goals and monthly sales quotas down to business unit leaders.
   - Tracks actual milestone fulfillment with automated root-cause variance attribution.`
  },
  {
    slug: 'ai-capabilities',
    title: 'AI Capabilities',
    tag: 'Predictive & Generative Intelligence',
    industry: 'AI Capabilities',
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    readTime: '6 min read',
    author: 'Aasaan Applied AI Engineering Lab',
    date: 'October 2026',
    excerpt: 'Deep enterprise machine learning embedded natively across all workflows. Powers predictive inventory replenishment, automated invoice OCR data extraction, and intelligent agent automation.',
    content: `## AI Capabilities — Predictive & Generative Intelligence

Deep enterprise machine learning embedded natively across all business workflows.

Traditional ERPs record transactions after they happen. **Aasaan AI-Enabled ERP** anticipates operational roadblocks before they occur—automating document data entry, predicting stockouts, and scoring customer payment risks in real time.

### Key Capabilities

1. **Intelligent Document OCR & Smart Voucher Ingestion**:
   - Upload vendor PDF invoices, purchase receipts, or scanned bills directly into the system.
   - Advanced multi-lingual OCR extracts vendor GSTIN, invoice date, line-item descriptions, HSN codes, and tax totals with 99.8% field accuracy.
   - Auto-creates draft purchase vouchers with side-by-side visual audit verification.

2. **Predictive Demand & Dynamic Safety Stock Replenishment**:
   - Neural forecasting models evaluate historical consumption, seasonal spikes, supplier lead times, and open sales orders.
   - Dynamically adjusts minimum and maximum buffer stock levels, triggering automated Purchase Requisitions before stockouts occur.

3. **Customer Credit & Payment Delay Risk Scoring**:
   - Machine learning algorithms analyze historical customer payment intervals, order volume trends, and market credit records.
   - Assigns dynamic credit ratings and flags accounts approaching high default risks before dispatching fresh inventory.

4. **Agentic AI Workflow Automation**:
   - Autonomous background agents perform routine operational checks: auto-matching vendor bills, generating daily dispatch priority lists, and reconciling bank transactions.
   - Escalates only ambiguous exceptions to human managers with recommended resolution actions.

5. **Smart Pricing & Margin Optimization**:
   - Analyzes real-time raw material cost fluctuations and recommends optimal customer quotation price points to preserve target profitability.`
  },
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
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
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
  },
  {
    slug: 'implementation-scope',
    title: 'Enterprise ERP Implementation Scope & Structured Deployment Methodology',
    tag: 'Implementation & Architecture',
    industry: 'ERP Implementation Services',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    readTime: '6 min read',
    author: 'Aasaan Implementation Architecture Practice',
    date: 'October 2026',
    excerpt: 'Explore Aasaan ERP’s battle-tested 5-phase implementation methodology. Learn how we structure discovery, legacy data migration (from Tally, Excel, SAP), pilot simulations, cutover, and 30-day hypercare.',
    content: `## Enterprise ERP Implementation Scope & Methodology

A successful ERP transition requires structured blueprinting, rigorous data migration, and zero disruption to daily dispatch operations. At Aasaan ERP, our in-house implementation methodology is designed to replace fragmented legacy tools with a unified cloud ledger in as little as 7 to 30 business days.

### The 5-Phase Implementation Lifecycle

**[1. Discovery & Blueprint] ➔ [2. Master Data Migration] ➔ [3. Pilot & Simulation] ➔ [4. Role SOP Training] ➔ [5. Go-Live & Hypercare]**

### Phase 1: Business Process Blueprinting & Gap Analysis
Before touching a single line of data, our Senior Implementation Consultants map your operational workflows:
- **Chart of Accounts (COA) Structure**: Aligning sub-ledgers, cost centers, and branch accounting with statutory Indian Schedule III requirements.
- **Manufacturing Routing & BOM Trees**: Defining multi-level Bills of Materials, operation sequences, machine run rates, and scrap allowance percentages.
- **Statutory GST & E-Invoicing Parameters**: Setting up HSN/SAC codes, GST tax slabs, e-Way bill thresholds, and direct GSTN API credentials.
- **Hardware Topology**: Documenting weighbridge RS232 indicator ports, CCTV IP camera URLs, thermal barcode label printers, and barcode scanners.

### Phase 2: Master Data Extraction, Scrubbing & Migration
Legacy data from Tally, Busy, SAP, Marg, or custom Excel workbooks is cleansed and migrated using automated ETL scripts:
- **Customer & Vendor Masters**: Verification of GSTIN, PAN, MSME registration categories, billing/shipping addresses, and credit limits.
- **Item Masters**: Unit of Measure (UOM) conversions, opening valuation rates, primary/secondary bin allocations, and reorder triggers.
- **Opening Balances**: Trial balance migration, outstanding receivables (aging-wise), payables, and reconciled physical inventory.

### Phase 3: Pilot Configuration & Factory-Floor Simulation
We spin up a dedicated sandbox environment mirroring your production setup:
- Complete Procure-to-Pay (P2P) dry runs: Purchase Order ➔ Gate Entry ➔ GRN ➔ QC Inspection ➔ Purchase Invoice ➔ 3-Way Reconciliation.
- Complete Order-to-Cash (O2C) dry runs: Quotation ➔ Sales Order ➔ Dispatch ➔ Automated E-Invoice & E-Way Bill Generation.
- Discrete shop floor execution: Work Order ➔ Job Card Issuance ➔ Raw Material Issue ➔ Finished Goods Entry ➔ Production Variance Posting.

### Phase 4: Hands-On User Training & Standard Operating Procedures (SOPs)
Training is tailored to specific operational roles rather than generic classroom theory:
- **Finance & Accounts Team**: Day-to-day voucher posting, bank statement auto-reconciliation, TDS calculations, and GSTR-1/GSTR-3B filings.
- **Storekeepers & Dispatch Clerks**: Barcode scanning, FIFO batch picking, dispatch gate passes, and weighbridge terminal operation.
- **Executive Leadership**: Real-time Digital CEO dashboard, plant-wise OEE reports, cash flow projections, and margin leakage alerts.

### Phase 5: Production Cutover & 30-Day Hypercare Support
On go-live day, our designated solutions engineers provide side-by-side floor support:
- Day 1 cutover verification of opening inventory and live transaction routing.
- First month-end closing support to ensure P&L, balance sheet, and GST return matching.
- Immediate engineer escalation hotline on Enterprise WhatsApp desk.

### Guaranteed Implementation Deliverables

- **Business Blueprint Document (BBD)**: Complete documentation of all mapped enterprise workflows. Sign-off criteria: CFO & Operations Head Approval.
- **Migrated Master & Opening Records**: Cleansed ledgers, inventory, and pending orders loaded. Sign-off criteria: 100% Reconciliation with Trial Balance.
- **Statutory API Integration**: Real-time government portal sync for E-Invoicing and E-Way bills. Sign-off criteria: Successful Live Test Invoicing.
- **Hardware Bridge Connectivity**: RS232/TCP-IP driver synchronization with physical scales. Sign-off criteria: Zero-Lag Gross/Tare Capture.
- **Role-Based Security Matrix**: Granular user permissions, dual-approval rules, and audit logs. Sign-off criteria: Compliance Audit Sign-Off.

### Request Your Implementation Scope
Ready to modernize your operations? Schedule a 1-on-1 implementation scoping session with our solutions engineering team.`
  },
  {
    slug: 'go-live-readiness-checklist',
    title: 'ERP Go-Live Readiness Checklist: The 7-Day Cutover Protocol',
    tag: 'Instant Go-Live',
    industry: 'Go-Live Architecture',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    readTime: '5 min read',
    author: 'Aasaan Rapid Deployment Practice',
    date: 'October 2026',
    excerpt: 'The comprehensive pre-flight checklist every enterprise must verify before switching live to Aasaan ERP. Ensure master data integrity, opening balances, GST API credentials, and hardware calibration.',
    content: `## ERP Go-Live Readiness Checklist

Cutting over to a new cloud ERP platform should be an orderly, predictable event. Our Go-Live Readiness Checklist serves as the final pre-flight verification gate before switching production traffic to Aasaan ERP.

### Section 1: Financial & Statutory Ledger Reconciliation

**[Opening Trial Balance] ➔ [Customer/Vendor Aging] ➔ [Bank Reconciliation] ➔ [GST Input Credit Check]**

- [ ] **Opening Trial Balance Signed Off**: Final audited trial balance from legacy system (Tally/Busy/Excel) reconciled down to zero decimal variance.
- [ ] **Customer & Vendor Aging Statements**: Bill-by-bill pending receivables and payables imported with correct payment terms, credit limits, and contact details.
- [ ] **Bank Reconciliation Statements (BRS)**: Unpresented cheques and uncleared deposits reconciled up to the cutover date.
- [ ] **Statutory Tax Balances**: Input Tax Credit (ITC) ledger balances, TDS payables, and TCS buckets matched with government portal ledgers.

### Section 2: Inventory, Warehouse & BOM Cutover

- [ ] **Physical Stock Count Completed**: Store inventory physically verified, scrap adjustments posted, and net quantities signed off by store manager.
- [ ] **Batch & Serial Number Tracking**: Active batches, manufacturing dates, expiry dates, and lot numbers accurately recorded for FIFO pick allocation.
- [ ] **Multi-Depot Locations Configured**: Warehouse racks, bins, quarantine zones, and branch depots mapped with primary location identifiers.
- [ ] **Multi-Level BOM Verification**: Bills of Materials exploded and verified against current production recipes and scrap tolerances.

### Section 3: Hardware, IoT & Weighbridge Calibration

- [ ] **Weighbridge Indicator RS232 / TCP-IP Link**: Zero-error baud rate handshake verified with physical indicator (Avery, Essae, Cardinal, or custom terminal).
- [ ] **CCTV Camera Snapshot Capture**: Automated RTSP snapshot capture synchronized upon vehicle weight stabilization.
- [ ] **Barcode & Thermal Label Printers**: Zebra/TSC printer DPI settings, barcode alignment, and dispatch sticker formats verified.
- [ ] **Backup Internet & Failover Network**: Redundant 4G/5G failover hotspot or secondary broadband tested for continuous cloud synchronization.

### Section 4: Government Statutory API Sync

- [ ] **NIC / IRP E-Invoicing API Active**: Valid client credentials, auth tokens, and automated IRN/QR code generation tested in production environment.
- [ ] **E-Way Bill Generation API Linked**: Distance calculation, vehicle number update, and consolidated e-Way bill generation verified.
- [ ] **Digital Signature Certificate (DSC)**: Class 3 DSC tokens installed and configured for automated invoice signing.

### Section 5: Access Control & Operations Handover

- [ ] **Role-Based Access Permissions**: Operators restricted to respective modules (Billing, Store, Accounts, Purchase, Floor).
- [ ] **Approval Workflows Live**: PO approval limits, credit limit overrides, and discount authorization matrices active.
- [ ] **Emergency Rollback & Contingency Plan**: Standby data snapshot secured with 30-minute hypercare escalation phone bridge.

### Post-Go-Live Support Matrix
Upon completing this checklist, your dedicated Solutions Engineer remains on standby for live floor monitoring, ensuring smooth transaction cutover from hour one.`
  },
  {
    slug: 'sla-agreement-tiers',
    title: 'Enterprise Support & SLA Agreement Tiers: 99.98% Cloud Availability',
    tag: 'Enterprise Support',
    industry: 'SLA & Cloud Infrastructure',
    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80',
    readTime: '5 min read',
    author: 'Aasaan Cloud Infrastructure Team',
    date: 'October 2026',
    excerpt: 'Understand Aasaan ERP’s enterprise Service Level Agreements (SLAs), escalation pathways, 15-minute critical incident resolution windows, and cloud uptime commitments.',
    content: `## Enterprise Support & SLA Agreement Tiers

When your factory dispatches trucks, logs weighbridge tickets, and generates statutory GST e-invoices around the clock, you cannot afford automated chat bots or offshore ticket queues. Aasaan ERP provides tier-one, engineer-led support backed by binding uptime and incident resolution SLAs.

### Service Level Agreement (SLA) Tier Comparison

- **Target Cloud Uptime**: 99.90% (Standard), 99.95% (Business-Critical), **99.98% High Availability** (Enterprise Platinum).
- **Critical (P1) Incident Response**: Under 1 Hour (Standard), Under 30 Minutes (Business-Critical), **Under 15 Minutes Guaranteed** (Enterprise Platinum).
- **Support Hours**: 9 AM – 7 PM Mon–Sat (Standard), 8 AM – 10 PM Mon–Sat (Business-Critical), **24/7/365 Round-the-Clock** (Enterprise Platinum).
- **Support Channels**: Email & Web Ticket Desk (Standard), Ticket, Phone & Remote Desk (Business-Critical), **Dedicated WhatsApp Group & Direct TAM** (Enterprise Platinum).
- **Designated Account Manager**: Shared Support Team (Standard), Senior Support Lead (Business-Critical), **Designated Technical Account Manager / TAM** (Enterprise Platinum).
- **Quarterly Database Tuning**: Annual (Standard), Bi-Annual (Business-Critical), **Monthly Optimization & Index Audit** (Enterprise Platinum).
- **Statutory Tax Mandate Updates**: Standard Release (Standard), Priority Deployment (Business-Critical), **Day-0 Government Regulatory Patching** (Enterprise Platinum).

### Incident Severity & Escalation Matrix

**[Incident Logged] ➔ [P1: 15-Min Bridge Call] ➔ [Lead Architect Diagnosis] ➔ [Hotfix Deployment] ➔ [RCA Report]**

### Priority 1 (P1) — Critical Outage / Factory Blocker
- **Definition**: Complete stoppage of core billing, inability to dispatch invoices, or weighbridge scale hardware bridge failure during active shift.
- **Initial Response**: **< 15 Minutes**. Immediate Google Meet / Zoom bridge opened with a senior backend systems engineer.
- **Resolution Target**: Continuous work until service restored or immediate operational workaround deployed.
- **Post-Incident**: Comprehensive Root Cause Analysis (RCA) delivered within 48 business hours.

### Priority 2 (P2) — High Priority Operational Degradation
- **Definition**: Core functions operating with severe performance lag or batch job slowdowns with an available manual workaround.
- **Initial Response**: **< 1 Hour**. Designated engineer assigned to analyze server query metrics.
- **Resolution Target**: Within 4 business hours.

### Priority 3 (P3) — Normal / Configuration Inquiry
- **Definition**: Minor report discrepancy, user access permissions update, or new custom voucher print format styling.
- **Initial Response**: **< 4 Hours**. Handled via email or WhatsApp support desk.

### Priority 4 (P4) — Feature Request / Enhancement
- **Definition**: Custom workflow modification or feature enhancement for upcoming operational quarters.
- **Initial Response**: **< 24 Hours**. Added to client development roadmap backlog.

### Core SLA Commitments & Security Architecture

1. **Multi-AZ Cloud Redundancy**: Hosted on enterprise AWS data centers with automated multi-zone replication, hourly encrypted snapshots, and sub-15-minute Recovery Time Objective (RTO).
2. **Day-0 Statutory Compliance**: When GSTN or the Ministry of Finance releases an e-invoicing schema update or TDS amendment, Aasaan pushes cloud patches with zero downtime.
3. **Dedicated WhatsApp Escalation Desk**: Direct access for your CFO, IT Manager, and Plant Incharge to our engineering team — skipping call center IVRs.`
  },
  {
    slug: 'custom-module-requirements',
    title: 'Bespoke Customization, REST APIs & IoT Telemetry Architecture',
    tag: 'Customization & APIs',
    industry: 'Enterprise Architecture',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    readTime: '7 min read',
    author: 'Aasaan Core Engineering Practice',
    date: 'October 2026',
    excerpt: 'Learn how Aasaan ERP adapts to your unique business logic with custom data models, RESTful OpenAPI endpoints, automated webhooks, and IoT weighbridge telemetry.',
    content: `## Bespoke Customization, REST APIs & IoT Telemetry

Standard ERP packages force businesses to conform their operations to rigid, one-size-fits-all software templates. Aasaan ERP was engineered with an extensible, modular architecture that adapts around your exact manufacturing processes, third-party logistics, and hardware infrastructure.

### Customization Capabilities Overview

**[Aasaan Core Engine]** connects to:
- Custom Business Logic & Validation Rules
- IoT Hardware Bridges (RS232 / TCP-IP / Modbus)
- Bi-directional RESTful OpenAPI Webhooks
- Third-Party Connectors (Shopify, Tally, Banks)

### 1. Tailored Data Models & Custom Modules
Need a specialized Quality Control module for chemical titration parameters, an automated batch rebate matrix for retail distributors, or a municipal waste manifest logbook?
- **Custom Tables & Field Schemas**: Add custom fields (numeric, formula, barcode, dropdown, timestamp) to any transaction without database locking.
- **Configurable Workflow Engines**: Multi-tier dynamic approval hierarchies triggered by voucher amount, department, credit limit, or margin thresholds.
- **Automated Business Rules**: Custom validation scripts that automatically block dispatches if customer credit balance is breached or test certificates are missing.

### 2. IoT Hardware & Weighbridge Telemetry Integration
Our direct hardware drivers interface physical plant equipment with the cloud ledger:
- **RS232 / TCP-IP Scale Indicators**: Continuous serial listening capturing gross, tare, and net weights with zero human intervention.
- **CCTV & License Plate Recognition**: Automated camera snapshot capture attached directly to the electronic weighment slip.
- **RFID Vehicle Tags & Boom Barriers**: Automatic gate pass opening for pre-authorized raw material transport vehicles.
- **Barcode & Thermal Label Printing**: Direct ZPL/EPL driver integration for high-speed carton, pallet, and bin labeling.

### 3. Enterprise RESTful API Suite
Aasaan ERP exposes a complete, secured OpenAPI (Swagger) interface for real-time data exchange:
- **ERP Integration Webhooks**: Receive automated HTTP POST alerts upon invoice approval, inventory breach, or payment clearance.
- **E-Commerce Connectors**: Bi-directional inventory and order synchronization with Shopify, WooCommerce, Amazon, and Magento.
- **Banking & Payment APIs**: Direct payout reconciliation with ICICI, HDFC, and Razorpay virtual accounts.
- **CRM Sync**: Inbound lead and quotation synchronization with Salesforce, HubSpot, or custom sales tools.

### Custom Development Process

- **Step 1: Requirements Specification**: Document custom business logic, inputs, outputs, and edge cases (Timeline: Days 1–3).
- **Step 2: Sandbox Staging**: Develop and deploy feature in an isolated client test environment (Timeline: Days 4–10).
- **Step 3: User Acceptance Testing (UAT)**: Client team verifies calculation accuracy and workflow compliance (Timeline: Days 11–14).
- **Step 4: Production Deployment**: Zero-downtime hot-deploy to live enterprise cloud instance (Timeline: Day 15).

### Discuss Your Custom Requirements
Have a complex manufacturing process or unique integration requirement? Consult directly with our Senior Solutions Architects.`
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
// LEADS / QUERIES API & ROBUST TIMESTAMP SORTING
// -------------------------------------------------------------

/**
 * Accurately parses any lead timestamp (ISO, Indian locale DD/MM/YYYY, Date.toString(), or epoch ms)
 * into numeric milliseconds for sorting.
 */
export function parseLeadTimestamp(leadOrTimestamp) {
  if (!leadOrTimestamp) return 0;
  let raw = leadOrTimestamp;
  if (typeof leadOrTimestamp === 'object') {
    raw = leadOrTimestamp.timestamp || leadOrTimestamp.createdAt || leadOrTimestamp.created_at || leadOrTimestamp.date || leadOrTimestamp.id;
  }
  if (!raw) return 0;
  if (typeof raw === 'number') return raw;

  const rawStr = raw.toString().trim();
  if (/^\d{10,13}$/.test(rawStr)) {
    return parseInt(rawStr, 10);
  }

  // Handle DD/MM/YYYY or DD-MM-YYYY format (with optional time and AM/PM)
  const dmyMatch = rawStr.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})(?:[,\s]+(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?(?:\s*(am|pm))?)?/i);
  if (dmyMatch) {
    const day = parseInt(dmyMatch[1], 10);
    const month = parseInt(dmyMatch[2], 10) - 1;
    const year = parseInt(dmyMatch[3], 10);
    let hours = dmyMatch[4] ? parseInt(dmyMatch[4], 10) : 0;
    const minutes = dmyMatch[5] ? parseInt(dmyMatch[5], 10) : 0;
    const seconds = dmyMatch[6] ? parseInt(dmyMatch[6], 10) : 0;
    const ampm = dmyMatch[7] ? dmyMatch[7].toLowerCase() : null;

    if (ampm === 'pm' && hours < 12) hours += 12;
    if (ampm === 'am' && hours === 12) hours = 0;

    const d = new Date(year, month, day, hours, minutes, seconds);
    if (!isNaN(d.getTime())) return d.getTime();
  }

  const d = new Date(rawStr);
  if (!isNaN(d.getTime())) return d.getTime();

  // If lead is an object and raw failed, try numeric lead.id
  if (typeof leadOrTimestamp === 'object' && leadOrTimestamp.id) {
    const idNum = Number(leadOrTimestamp.id);
    if (!isNaN(idNum) && idNum > 1000000000000) return idNum;
  }

  return 0;
}

/**
 * Formats a lead timestamp into a clean enterprise date string
 * with date, time, and relative indicator ("Today, 2h ago", "Yesterday", etc.)
 */
export function formatQueryDate(leadOrTimestamp) {
  const timeMs = parseLeadTimestamp(leadOrTimestamp);
  const fallbackStr = typeof leadOrTimestamp === 'string'
    ? leadOrTimestamp
    : (leadOrTimestamp && typeof leadOrTimestamp === 'object' && typeof leadOrTimestamp.timestamp === 'string' ? leadOrTimestamp.timestamp : 'Recent');

  if (!timeMs) {
    return {
      dateStr: fallbackStr || 'Recent',
      timeStr: '',
      fullFormatted: fallbackStr || 'Recent',
      relativeBadge: null,
      isToday: false,
      isYesterday: false
    };
  }

  const d = new Date(timeMs);
  const now = new Date();

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const day = String(d.getDate()).padStart(2, '0');
  const month = months[d.getMonth()];
  const year = d.getFullYear();

  let hours = d.getHours();
  const minutes = String(d.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  const timeStr = `${hours}:${minutes} ${ampm}`;
  const dateStr = `${day} ${month} ${year}`;

  const isToday = d.toDateString() === now.toDateString();
  const yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  const isYesterday = d.toDateString() === yesterday.toDateString();

  let relativeBadge = null;
  if (isToday) {
    const diffHours = Math.floor((now.getTime() - d.getTime()) / (1000 * 60 * 60));
    if (diffHours < 1) {
      const diffMins = Math.max(1, Math.floor((now.getTime() - d.getTime()) / (1000 * 60)));
      relativeBadge = `${diffMins}m ago`;
    } else {
      relativeBadge = `Today, ${diffHours}h ago`;
    }
  } else if (isYesterday) {
    relativeBadge = 'Yesterday';
  }

  return {
    dateStr,
    timeStr,
    fullFormatted: `${dateStr}, ${timeStr}`,
    relativeBadge,
    isToday,
    isYesterday
  };
}

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
    let phoneVal = (item.phone || item.mobile || item.rawPhone || '').toString().trim();
    if (phoneVal.includes('#ERROR') || phoneVal.includes('#REF') || phoneVal.includes('#VALUE')) {
      phoneVal = item.rawPhone || item.mobile || '';
    }
    item.phone = phoneVal;
    const phoneKey = phoneVal;
    const key = (emailKey || phoneKey) ? `${emailKey}|${phoneKey}` : `id-${item.id}`;

    if (!seenKeys.has(key)) {
      seenKeys.add(key);
      mergedLeads.push(item);
    }
  }

  // If literally no leads exist anywhere, fall back to DEFAULT_LEADS
  const finalLeads = mergedLeads.length > 0 ? [...mergedLeads] : [...DEFAULT_LEADS];

  // Strictly sort descending: newest leads always at the top (row 1)
  finalLeads.sort((a, b) => parseLeadTimestamp(b) - parseLeadTimestamp(a));

  try {
    localStorage.setItem('aasaan_demo_queries', JSON.stringify(finalLeads));
  } catch (e) {}

  return finalLeads;
}

export const AASAAN_OFFICIAL_LEAD_API = 'https://erplite.aasaan.in/rest/import_leads_into_aasaan?id=iNmozr7dtS2mWFJfIrjgUQ';
export const AASAAN_OFFICIAL_API_KEY = 'CE114E4501D2F4E2DCEA3E17B546F339';

/**
 * Directly submit lead to Aasaan ERP Official REST API Endpoint
 * Headers: Content-Type: application/json, apikey: CE114E4501D2F4E2DCEA3E17B546F339
 */
export async function sendLeadToOfficialAasaanApi(leadData) {
  const phone = (leadData.phone || leadData.mobile || '').trim();
  const rawMobile = leadData.rawPhone || (phone.replace(/\D/g, '').length === 10 ? phone.replace(/\D/g, '') : phone);
  const solution = leadData.solution || 'Aasaan Enterprises';
  const requirementText = leadData.message 
    ? `[Product: ${solution}] ${leadData.message}` 
    : `Requested demo for ${solution}`;
  const addressStr = leadData.state && leadData.state !== 'Other Indian State / UT'
    ? `${leadData.state}, ${leadData.country || 'India'}`
    : (leadData.address || leadData.country || 'India');

  const payload = {
    name: leadData.name || '',
    prefix: 'Mr.',
    mobile: rawMobile,
    phone: phone,
    email: leadData.email || '',
    company: leadData.company || '',
    address: addressStr,
    pincode: leadData.pincode || '110026',
    website: leadData.website || '',
    gstin: leadData.gstin || '',
    requirement: requirementText,
    leadStatus: 'New',
    industry: solution
  };

  try {
    const res = await fetch(AASAAN_OFFICIAL_LEAD_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': AASAAN_OFFICIAL_API_KEY
      },
      body: JSON.stringify(payload)
    });
    const resultText = await res.text();
    console.log('Official Aasaan ERP Lead API response:', resultText);
    return { success: res.ok, response: resultText };
  } catch (err) {
    console.warn('Official Aasaan ERP Lead API error:', err);
    return { success: false, error: err.message };
  }
}

export async function saveLead(leadData) {
  const timestamp = leadData.timestamp || new Date().toISOString();
  const newLead = {
    id: Date.now(),
    timestamp,
    name: leadData.name || '',
    company: leadData.company || '',
    email: leadData.email || '',
    phone: leadData.phone || '',
    solution: leadData.solution || 'Aasaan Enterprises',
    country: leadData.country || 'India',
    message: leadData.message || '',
    status: 'New'
  };

  // 1. Try backend server for Admin Dashboard
  try {
    await fetch(`${BACKEND_URL}/leads`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newLead)
    });
  } catch (e) {
    // server offline, proceed with local
  }

  // 3. Always persist in localStorage (sorted newest first)
  const existing = await getLeads();
  const updated = [newLead, ...existing.filter(l => l.id !== newLead.id)];
  updated.sort((a, b) => parseLeadTimestamp(b) - parseLeadTimestamp(a));
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
  let merged = [
    ...storedBlogs,
    ...INITIAL_INDUSTRY_BLOGS.filter(b => !storedSlugs.has(b.slug))
  ];

  // Auto-heal any legacy broken photo URLs
  merged = merged.map(b => {
    if (b.img && (b.img.includes('1523050854058-8df90110c9f1') || !b.img.startsWith('http'))) {
      return { ...b, img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80' };
    }
    return b;
  });

  // Persist merged list back to localStorage
  try {
    localStorage.setItem('aasaan_industry_blogs', JSON.stringify(merged));
  } catch (e) {}

  return merged.length > 0 ? merged : INITIAL_INDUSTRY_BLOGS;
}

export async function getBlogBySlug(slug) {
  const normSlug = (slug || '').toLowerCase().trim();
  const blogs = await getBlogs();
  let foundBlog = blogs.find(b => b.slug === normSlug || b.slug.toLowerCase() === normSlug);
  if (!foundBlog && (normSlug === 'financial' || normSlug === 'financial-management')) {
    foundBlog = blogs.find(b => b.slug === 'financial-management' || b.slug === 'financial');
  }
  if (!foundBlog && (normSlug === 'stock' || normSlug === 'stock-control')) {
    foundBlog = blogs.find(b => b.slug === 'stock-control' || b.slug === 'stock');
  }
  if (!foundBlog && (normSlug === 'manufacturing-engineering' || normSlug === 'manufacturing')) {
    foundBlog = blogs.find(b => b.slug === 'manufacturing' || b.slug === 'manufacturing-engineering');
  }
  if (!foundBlog && (normSlug === 'waste-management-recycling' || normSlug === 'waste-management')) {
    foundBlog = blogs.find(b => b.slug === 'waste-management' || b.slug === 'waste-management-recycling');
  }
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

// -------------------------------------------------------------
// LEAD EMAIL NOTIFICATIONS & SETTINGS
// -------------------------------------------------------------
const DEFAULT_NOTIFICATION_SETTINGS = {
  recipientEmail: 'aditya@aasaan.in',
  enabled: true,
  companyAlertEmail: 'contactus@aasaanservices.in'
};

export async function getNotificationSettings() {
  // 1. Check local storage first (instant client cache)
  let localSettings = null;
  try {
    const raw = localStorage.getItem('aasaan_notification_settings');
    if (raw) {
      localSettings = JSON.parse(raw);
      // Automatically migrate any legacy fallback emails to aditya@aasaan.in
      if (
        localSettings &&
        (!localSettings.recipientEmail ||
          localSettings.recipientEmail === 'work007life22@gmail.com' ||
          localSettings.recipientEmail === 'sales@aasaanerp.com' ||
          localSettings.recipientEmail === 'contactus@aasaanservices.in')
      ) {
        localSettings.recipientEmail = 'aditya@aasaan.in';
        localStorage.setItem('aasaan_notification_settings', JSON.stringify(localSettings));
      }
    }
  } catch (e) {}

  // 2. Attempt to sync from backend if online with short timeout
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);
    const res = await fetch(`${BACKEND_URL}/settings/notifications`, { signal: controller.signal });
    clearTimeout(timeoutId);
    if (res.ok) {
      const data = await res.json();
      if (
        data &&
        data.recipientEmail &&
        data.recipientEmail !== 'work007life22@gmail.com' &&
        data.recipientEmail !== 'sales@aasaanerp.com' &&
        data.recipientEmail !== 'contactus@aasaanservices.in'
      ) {
        localStorage.setItem('aasaan_notification_settings', JSON.stringify(data));
        return data;
      }
    }
  } catch (e) {
    // Backend offline / timed out
  }

  return localSettings || DEFAULT_NOTIFICATION_SETTINGS;
}

export async function saveNotificationSettings(settings) {
  const current = await getNotificationSettings();
  const merged = { ...current, ...settings };
  localStorage.setItem('aasaan_notification_settings', JSON.stringify(merged));

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2500);
    const res = await fetch(`${BACKEND_URL}/settings/notifications`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(merged),
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    if (res.ok) {
      const data = await res.json();
      return data;
    }
  } catch (e) {
    console.warn('Backend settings sync failed (persisted in browser storage):', e.message);
  }

  return merged;
}

/**
 * Sends real-time email notification alert when a lead is captured
 */
export async function sendLeadEmailNotification(leadData, recipientEmailOverride = null) {
  try {
    const settings = await getNotificationSettings();
    if (!settings.enabled && !recipientEmailOverride) {
      return { success: false, reason: 'Notifications disabled' };
    }

    const targetEmail = recipientEmailOverride || settings.recipientEmail || 'aditya@aasaan.in';
    const timestamp = leadData.timestamp || new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    // Use FormSubmit AJAX service - sends formatted email directly to recipientEmail with zero setup needed
    const payload = {
      _subject: `New Aasaan ERP Lead: ${leadData.name || 'Anonymous'} (${leadData.company || 'Not Specified'})`,
      _template: 'table',
      _captcha: 'false',
      "Lead Name": leadData.name || 'N/A',
      "Company Name": leadData.company || 'N/A',
      "Work Email": leadData.email || 'N/A',
      "Phone / WhatsApp": leadData.phone || leadData.mobile || 'N/A',
      "Primary Solution": leadData.solution || 'Aasaan Enterprises',
      "Country / Location": leadData.country || leadData.address || 'India',
      "Requirements / Message": leadData.message || leadData.requirement || 'N/A',
      "Submission Time (IST)": timestamp,
      "Lead Status": "New - Follow-up Required",
      "Source": "Aasaan ERP Official Website Demo Request"
    };

    const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(targetEmail)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const result = await res.json();
    console.log('Lead notification email dispatched to', targetEmail, result);
    return { success: true, targetEmail, result };
  } catch (err) {
    console.warn('Email notification dispatch error:', err.message);
    return { success: false, error: err.message };
  }
}

/**
 * Sends a test lead notification email from admin portal
 */
export async function sendTestNotification(recipientEmail) {
  const sampleLead = {
    name: 'Sample Test Lead (Admin Verification)',
    company: 'Aasaan Tech Demo Org',
    email: 'test@aasaanerp.com',
    phone: '+91 98765 43210',
    solution: 'Aasaan Enterprises',
    country: 'India',
    message: 'This is a test notification from the Aasaan ERP Admin Portal confirming that lead alerts are correctly configured.',
    timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
  };

  return await sendLeadEmailNotification(sampleLead, recipientEmail);
}



