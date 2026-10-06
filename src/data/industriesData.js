export const industriesData = [
  {
    id: 'manufacturing',
    name: 'Manufacturing & Engineering',
    tagline: 'Multi-level BOM, machine routing, and real-time scrap tracking on the shop floor.',
    badge: 'Discrete & Process Manufacturing',
    overview: 'From raw material procurement to Bill of Materials (BOM) explosion, work center scheduling, and quality inspection — Aasaan ensures every rupee of shop-floor cost is tracked.',
    kpi: { metric: '32% Less Downtime', sub: 'Synchronized job-work & machine queues' },
    stages: [
      { id: 'bom', title: 'BOM Explosion', desc: 'Auto-explode multi-level BOMs into child parts & raw materials upon order receipt.' },
      { id: 'mrp', title: 'MRP & Job Cards', desc: 'Generate precise material requirements & assign barcode job cards to operators.' },
      { id: 'workcenter', title: 'Work Centers', desc: 'Track machine cycle times, operator efficiency, and active power utilization.' },
      { id: 'qc', title: 'Quality Control', desc: 'In-process quality gates enforce tolerance checks before moving to Finished Goods.' },
      { id: 'dispatch', title: 'Automated Dispatch', desc: 'Generate E-Way bills and packing slips directly from finished production batches.' }
    ],
    features: ['Multi-level Bill of Materials (BOM)', 'Job Work & Subcontracting tracking', 'Work Center Capacity Planning', 'Scrap & By-product Accounting', 'Serial & Lot Number Traceability']
  },
  {
    id: 'waste',
    name: 'Waste Management (AWM)',
    tagline: 'Specialized ERP for waste haulers, recyclers, weighbridges, and municipal compliance.',
    badge: 'Aasaan Flagship Vertical',
    overview: 'AWM is Aasaan’s industry-defining ERP vertical. It natively connects bin RFID tracking, dynamic GPS route dispatch, weighbridge gross/tare automation, and digital hazardous waste manifests.',
    kpi: { metric: '100% Audit Compliance', sub: 'Automated CPCB / state pollution board manifests' },
    stages: [
      { id: 'bins', title: 'Smart Bin Tagging', desc: 'RFID & IoT sensors monitor fill levels and trigger route optimization.' },
      { id: 'fleet', title: 'Route & Fleet Dispatch', desc: 'Drivers navigate fuel-optimized routes with digital collection logging.' },
      { id: 'weighbridge', title: 'Weighbridge Integration', desc: 'Gross & Tare weights captured directly from digital scales with zero manual entry.' },
      { id: 'sorting', title: 'Material Recovery & Sorting', desc: 'Segregate inbound waste into recyclable categories, bale weights, and residues.' },
      { id: 'manifest', title: 'Regulatory Manifests', desc: 'Auto-submit Form 6 & recycling certificates to environmental regulatory portals.' }
    ],
    features: ['Automated Weighbridge Integration (Gross/Tare)', 'RFID Bin Management & GPS Route Tracking', 'Hazardous & Non-Hazardous Waste Manifests', 'Recycling Material Recovery Facility (MRF) Accounting', 'Vehicle Maintenance & Fuel Telemetry']
  },
  {
    id: 'distribution',
    name: 'Distribution & Supply Chain',
    tagline: 'Multi-warehouse stock visibility, batch expiry management, and intelligent route fulfillment.',
    badge: 'Wholesale & Logistics',
    overview: 'Keep distributors, regional depots, and field sales teams on a single live inventory count. Prevent stockouts, manage FIFO/FEFO expiry batches, and automate supplier credit terms.',
    kpi: { metric: '99.4% Order Accuracy', sub: 'Barcode verification from pick to pallet' },
    stages: [
      { id: 'intake', title: 'Multi-Depot Purchase', desc: 'Centralized bulk procurement distributed across regional transit hubs.' },
      { id: 'batch', title: 'Batch & Expiry Control', desc: 'Automatic FEFO (First-Expired, First-Out) picking protects against stock write-offs.' },
      { id: 'portal', title: 'B2B Dealer Portal', desc: 'Distributors submit orders 24/7 with personalized credit limits and tiered rate cards.' },
      { id: 'dispatch', title: 'Route Batching', desc: 'Combine multiple delivery orders into zone-optimized dispatch manifests.' },
      { id: 'pod', title: 'Digital Proof of Delivery', desc: 'Mobile app captures customer signatures, returns, and instant payment links.' }
    ],
    features: ['Multi-location Warehouse Management', 'Batch & Expiry Date (FIFO/FEFO) Rules', 'B2B Dealer Ordering Portal', 'Credit Limit & Outstanding Ageing Control', 'Consolidated Logistics & Waybill Generation']
  },
  {
    id: 'retail',
    name: 'Retail & Multi-Store POS',
    tagline: 'High-speed counter billing synchronized with central warehouse and omnichannel inventory.',
    badge: 'Stores & Omnichannel',
    overview: 'Whether operating 3 stores or 100 outlets, Aasaan connects billing counters, barcode scanning, customer loyalty rewards, and centralized procurement into one unified ledger.',
    kpi: { metric: '<3s Billing Speed', sub: 'Rapid GST invoicing and barcode lookup' },
    stages: [
      { id: 'pos', title: 'Fast Counter POS', desc: 'Touch-friendly cashier checkout supporting split payments, discounts, and gift cards.' },
      { id: 'sync', title: 'Central Inventory Sync', desc: 'Every item scanned at the till deducts immediately from master stock.' },
      { id: 'loyalty', title: 'Customer 360', desc: 'Instant lookup of customer purchase history, reward points, and WhatsApp receipts.' },
      { id: 'transfer', title: 'Store Replenishment', desc: 'Automated inter-store stock transfers based on local sales velocity.' },
      { id: 'reconcile', title: 'Daily Cash Settlement', desc: 'End-of-day register reconciliation across cash, UPI, card, and digital wallets.' }
    ],
    features: ['Offline-capable Touchscreen POS', 'Centralized Multi-outlet Price Management', 'WhatsApp Digital Receipts & Invoicing', 'Customer Loyalty & Promotional Engines', 'Automated Daily Sales & Cash Reconciliation']
  },
  {
    id: 'services',
    name: 'Services & Contracting',
    tagline: 'Project milestone accounting, technician timesheets, and automated billing schedules.',
    badge: 'Projects & Professional Services',
    overview: 'Eliminate missed billable hours and project overruns. Aasaan links customer contracts, work breakdown structures (WBS), staff timesheets, and milestone invoicing seamlessly.',
    kpi: { metric: '24% Higher Realization', sub: 'Zero unbilled hours or lost contractor expenses' },
    stages: [
      { id: 'contract', title: 'Service Agreement', desc: 'Define scopes, milestone deliverables, rate cards, and SLA commitments.' },
      { id: 'assign', title: 'Resource Scheduling', desc: 'Allocate technicians and consultants based on skills, availability, and location.' },
      { id: 'timesheet', title: 'Mobile Timesheets', desc: 'Field teams log hours, GPS check-ins, and job photos directly from mobile devices.' },
      { id: 'expenses', title: 'Expense Capture', desc: 'Receipt scan and client-billable expense categorization with 1-click approvals.' },
      { id: 'invoice', title: 'Milestone Invoicing', desc: 'Invoices generate automatically when milestones are signed off by clients.' }
    ],
    features: ['Contract & SLA Management', 'Mobile Field Service & Geofenced Check-in', 'Timesheet Approval Workflows', 'Client-billable vs Non-billable Tracking', 'Milestone & Recurring Retainer Invoicing']
  },
  {
    id: 'trading',
    name: 'Trading & Commodities',
    tagline: 'High-volume purchase contracts, multi-currency hedging, and real-time trade profitability.',
    badge: 'Import/Export & Commodities',
    overview: 'Trade with complete margin visibility. Track landed costs, customs duties, freight surcharges, and currency exchange rates against every specific deal in real time.',
    kpi: { metric: 'Real-time Net Margin', sub: 'Landed cost calculation per trade unit' },
    stages: [
      { id: 'inquiry', title: 'Trade Indent & Quote', desc: 'Lock in supplier quotes and buyer commitments with live margin calculation.' },
      { id: 'customs', title: 'Landed Cost Tracking', desc: 'Factor CIF charges, port handling, customs tariffs, and demurrage into item valuation.' },
      { id: 'fx', title: 'Multi-Currency Forex', desc: 'Hedge foreign exchange risks and automatically compute realized/unrealized FX gains.' },
      { id: 'shipment', title: 'In-Transit Inventory', desc: 'Track vessel locations, bill of lading documents, and high-seas sales transfers.' },
      { id: 'settle', title: 'Letter of Credit (LC)', desc: 'Monitor bank guarantee limits, LC presentation deadlines, and trade settlement.' }
    ],
    features: ['True Landed Cost Breakdown', 'High-Seas & Transit Sales Management', 'Multi-Currency Ledger & FX Exposure', 'Letter of Credit (LC) Tracking', 'Vendor & Buyer Commission Accounting']
  }
];
