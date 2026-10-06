export const heroDepartments = [
  {
    id: 'sales',
    name: 'Sales & Orders',
    code: 'SLS',
    icon: 'ShoppingCart',
    x: 180,
    y: 85,
    tag: 'SO-4821 Approved',
    metric: '₹84,500',
    color: '#3B82F6',
    description: 'Instant quote-to-cash conversion with customer credit check.',
    events: [
      { text: 'Order SO-4821 confirmed from ABC Industries', val: '₹84,500', type: 'order' },
      { text: 'Automated credit limit check passed (Rating: Tier A)', val: 'Approved', type: 'status' }
    ]
  },
  {
    id: 'inventory',
    name: 'Stock & Warehouse',
    code: 'INV',
    icon: 'Package',
    x: 620,
    y: 85,
    tag: 'Auto Stock Reserved',
    metric: '42 Units Allocated',
    color: '#10B981',
    description: 'Real-time multi-location reservation across Bhiwandi & Delhi hubs.',
    events: [
      { text: 'Reserved 42 units of Industrial Valve-X (Rack B4)', val: 'Allocated', type: 'stock' },
      { text: 'Deficit threshold detected: 18 units needed for buffer', val: 'Shortfall: 18', type: 'alert' }
    ]
  },
  {
    id: 'purchasing',
    name: 'Procurement & Vendors',
    code: 'PUR',
    icon: 'Truck',
    x: 720,
    y: 280,
    tag: 'Auto-PO Generated',
    metric: 'PO-1092 Drafted',
    color: '#F59E0B',
    description: 'Smart supplier routing triggered by inventory deficit.',
    events: [
      { text: 'Purchase Requisition PR-882 triggered automatically', val: '60 Units', type: 'po' },
      { text: 'Rate contract applied: Rao Metals & Alloys (₹61,200)', val: 'Dispatched', type: 'vendor' }
    ]
  },
  {
    id: 'finance',
    name: 'Accounts & Tax',
    code: 'FIN',
    icon: 'Coins',
    x: 620,
    y: 475,
    tag: 'Zero Double Entry',
    metric: '₹84,500 Receivable',
    color: '#8B5CF6',
    description: 'Automated GST invoice, journal posting, and cashflow projection.',
    events: [
      { text: 'E-Invoice INV-3307 generated with IRN & QR', val: '₹84,500 Due', type: 'invoice' },
      { text: 'General Ledger balance automatically updated in real-time', val: 'Balanced', type: 'ledger' }
    ]
  },
  {
    id: 'manufacturing',
    name: 'Production & Shop Floor',
    code: 'MFG',
    icon: 'Factory',
    x: 180,
    y: 475,
    tag: 'BOM Scheduled',
    metric: 'Batch #B-882',
    color: '#EC4899',
    description: 'Bill of Materials exploded and work center queue synchronized.',
    events: [
      { text: 'Work Order WO-204 scheduled on Assembly Line 2', val: 'Scheduled', type: 'prod' },
      { text: 'Raw material requisition synced with central store', val: 'Fulfilled', type: 'sync' }
    ]
  },
  {
    id: 'awm',
    name: 'AWM Waste & Fleet',
    code: 'AWM',
    icon: 'Recycle',
    x: 80,
    y: 280,
    tag: 'Bin RFID & Weighbridge',
    metric: '14.8 MT Cleared',
    color: '#06B6D4',
    description: 'Specialized waste logistics, weighbridge gross/tare, and manifest tracking.',
    events: [
      { text: 'Gross Tare reading logged at Yard 4 Weighbridge', val: '14.8 MT', type: 'scale' },
      { text: 'Digital hazardous waste manifest transmitted to portal', val: 'Compliant', type: 'compliance' }
    ]
  }
];

export const orderLifecycleWorkflow = [
  {
    step: 1,
    time: '10:42:08 AM',
    dept: 'Sales & Customer Portal',
    title: 'Customer Order Approved',
    badge: 'SO-4821',
    description: 'ABC Industries places an order for 60 units of High-Pressure Valves worth ₹84,500. Aasaan validates customer GSTIN, credit limits, and pricing contracts with zero manual paperwork.',
    panelTitle: 'Sales Department View',
    panelData: {
      status: 'Order Confirmed',
      document: 'Sales Order #SO-4821',
      customer: 'ABC Industries Ltd.',
      amount: '₹84,500.00 (Incl. 18% GST)',
      paymentTerms: 'Net 30 Days',
      action: 'Triggered automated stock allocation rule'
    }
  },
  {
    step: 2,
    time: '10:42:15 AM',
    dept: 'Warehouse & Inventory',
    title: 'Automated Stock Allocation',
    badge: 'INV-RES-901',
    description: 'Aasaan checks available stock across 3 regional depots. 42 units are instantly locked in Bhiwandi Hub; an 18-unit deficit is flagged against reorder safety thresholds.',
    panelTitle: 'Inventory Control View',
    panelData: {
      status: 'Partial Allocation (42/60 Units)',
      location: 'Central Depot — Bay 04 / Bin 12',
      reservedStock: '42 Units Reserved for SO-4821',
      safetyDeficit: '18 Units Shortfall Detected',
      reorderLevel: 'Minimum Safety Stock breached',
      action: 'Automated Purchase Requisition dispatched'
    }
  },
  {
    step: 3,
    time: '10:43:02 AM',
    dept: 'Procurement & Vendor Portal',
    title: 'Smart Purchase Requisition',
    badge: 'PO-1092 Auto-Draft',
    description: 'Rather than waiting for manual requisition emails, Aasaan auto-compiles an order to preferred vendor Rao Metals & Alloys for 60 units to optimize volume tier pricing.',
    panelTitle: 'Procurement Console View',
    panelData: {
      status: 'Auto-PO Created from Rate Contract',
      vendor: 'Rao Metals & Alloys Pvt Ltd',
      quantity: '60 Units (Buffer + Shortfall)',
      unitCost: '₹1,020.00 / unit (Negotiated)',
      totalPayable: '₹61,200.00 Commitment',
      action: 'WhatsApp PO & Digital Approval notification sent'
    }
  },
  {
    step: 4,
    time: '10:43:40 AM',
    dept: 'Finance & Accounts',
    title: 'Zero Double-Entry Financial Posting',
    badge: 'GL-POST #4491',
    description: 'The accounts team does not need to retype invoices. Aasaan books ₹84,500 to Accounts Receivable, schedules ₹61,200 to Accounts Payable, and drafts the GST E-Way bill.',
    panelTitle: 'Financial Ledger View',
    panelData: {
      status: 'Real-Time GL Journal Updated',
      receivable: 'Debit: ABC Industries (₹84,500)',
      commitment: 'Credit: Rao Metals (₹61,200)',
      grossMargin: '38.07% Projected Margin',
      gstOutput: 'CGST 9% + SGST 9% Posted',
      action: 'Cashflow projection recalibrated automatically'
    }
  },
  {
    step: 5,
    time: '10:44:12 AM',
    dept: 'Executive Intelligence & Dispatch',
    title: 'Executive Visibility & Warehouse Dispatch',
    badge: 'DISPATCH-QUEUED',
    description: 'Management dashboards immediately show today’s live revenue, gross margin contribution, and warehouse pick-list ready for fulfillment — in under 2 minutes.',
    panelTitle: 'Executive Intelligence View',
    panelData: {
      status: 'Dispatched to Floor Picking Queue',
      todayRevenue: '₹18,42,800 (+14.2% vs target)',
      workingCapital: 'Optimized — No idle inventory',
      customerNotification: 'SMS & WhatsApp Tracking Link sent',
      fulfillmentETA: 'Today by 04:30 PM',
      action: 'Complete digital audit trail secured'
    }
  }
];

export const liveTimelineFeed = [
  {
    id: 1,
    time: '10:47:12 AM',
    dept: 'Sales',
    type: 'order',
    title: 'Export Sales Order #SO-4822 Approved',
    entity: 'Dubai Polymers LLC',
    value: '$14,250 USD',
    detail: 'Currency hedge applied, export packaging checklist triggered.',
    status: 'Verified'
  },
  {
    id: 2,
    time: '10:46:38 AM',
    dept: 'AWM Waste',
    type: 'logistics',
    title: 'Weighbridge Net Weight Captured',
    entity: 'Yard #3 Gross Scale',
    value: '22.4 MT Recyclables',
    detail: 'Truck DL-1AA-4091 tare weight validated. Disposal ticket auto-generated.',
    status: 'Compliant'
  },
  {
    id: 3,
    time: '10:45:50 AM',
    dept: 'Manufacturing',
    type: 'production',
    title: 'Batch Inspection #QC-902 Passed',
    entity: 'Line 2 — Precision Gears',
    value: '450 Units OK',
    detail: 'Zero tolerance deviation. Transferred to Finished Goods Store.',
    status: 'Passed'
  },
  {
    id: 4,
    time: '10:44:19 AM',
    dept: 'Finance',
    type: 'payment',
    title: 'Razorpay Auto-Reconciliation Cleared',
    entity: 'Miranay Trading',
    value: '₹3,40,000 NEFT',
    detail: 'Matched against Invoice #INV-2901 with zero variance.',
    status: 'Settled'
  },
  {
    id: 5,
    time: '10:43:05 AM',
    dept: 'Inventory',
    type: 'stock',
    title: 'Dynamic Reorder Buffer Triggered',
    entity: 'North Hub Warehouse',
    value: '120 Units Requisitioned',
    detail: 'Lead time forecast indicates potential weekend shortage.',
    status: 'Auto-Handled'
  }
];
