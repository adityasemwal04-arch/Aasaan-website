export const awmSectors = [
  {
    id: 'municipal',
    title: 'Municipal Waste Collection',
    tag: 'IoT RFID & Route Optimization',
    img: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1000&q=80',
    desc: 'Empower urban collection fleets with real-time route optimization, bin fill-level telemetry, citizen verification, and integrated billing.',
    points: ['Automated GPS route dispatch', 'RFID & QR bin scan proof', 'Fuel & trip efficiency telemetry', 'Citizen request portal']
  },
  {
    id: 'recycling',
    title: 'Recycling & MRF Facilities',
    tag: 'Material Recovery & Baling',
    img: 'https://images.unsplash.com/photo-1605600659908-0ef719419d41?auto=format&fit=crop&w=1000&q=80',
    desc: 'Manage high-volume inbound unsegregated scrap to outbound commodities. Specialized accounting for e-waste, plastics, metals, paper, and baling.',
    points: ['Inbound weight ticket capture', 'Segregation yield & scrap calculation', 'Finished bale inventory & lot tags', 'Direct commodity sales invoicing']
  },
  {
    id: 'medical',
    title: 'Bio-Medical Waste Management',
    tag: 'Strict Barcode Chain-of-Custody',
    img: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80',
    desc: 'Ensure 100% compliance with medical waste regulations. Barcode color-coded bags, track treatment autoclave/incinerator cycles, and auto-submit manifests.',
    points: ['Color-coded bag barcode tracking', 'Hospital clinic collection receipts', 'Treatment plant cycle logs', 'Regulatory waste stream audit trails']
  },
  {
    id: 'hazardous',
    title: 'Hazardous & Liquid Waste',
    tag: 'CPCB Form 6 & Manifests',
    img: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=1000&q=80',
    desc: 'End-to-end digital tracking for industrial hazardous waste from generation and laboratory chemical assay to certified transport, neutralization, and landfill disposal.',
    points: ['Chemical compatibility checks', 'Hazardous cargo transport manifests', 'Disposal facility certificates', 'Regulatory pollution portal uploads']
  },
  {
    id: 'dumpster',
    title: 'Dumpster & Roll-Off Rental',
    tag: 'Bin GPS & Asset Tracking',
    img: 'https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?auto=format&fit=crop&w=1000&q=80',
    desc: 'Track bin inventory, automate drop-off and pickup schedules, eliminate unbilled container detention days, and capture customer e-signatures on site.',
    points: ['Container asset yard GPS map', 'Automated overage & detention billing', 'Driver delivery & photo proof', 'Customer rental booking portal']
  },
  {
    id: 'construction',
    title: 'Construction & Demolition (C&D)',
    tag: 'Heavy Debris & Weighbridges',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80',
    desc: 'Handle bulk rubble, concrete, and soil haulage with integrated weighbridge gross/tare ticketing, fleet dispatch, and site tipping permits.',
    points: ['Weighbridge scale indicator bridge', 'Tipping fee calculation per ton', 'Contractor volume accounts', 'Fleet truck gross/tare verification']
  }
];

export const awmModules = [
  {
    title: 'Weighbridge & Scale Automation',
    tag: 'Zero-Tamper RS232 / TCP-IP',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80',
    desc: 'Direct RS-232 / IP connection to weighbridge indicators. Gross & Tare captured in seconds with automated ticket printing and zero manual operator tampering.',
    icon: 'Scale'
  },
  {
    title: 'Dynamic Route Optimization',
    tag: 'Smart Algorithmic Dispatch',
    img: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=600&q=80',
    desc: 'Algorithm calculates the most fuel-efficient route sequence for multi-stop bin collection trips, cutting fleet fuel expenditure by up to 26%.',
    icon: 'Navigation'
  },
  {
    title: 'MRF Scrap Accounting',
    tag: 'Mass Balance & Yield Logs',
    img: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=80',
    desc: 'Track mass balance from inbound trucks through trommels and sorting conveyors down to compressed bales, calculating processing yield and residues.',
    icon: 'Recycle'
  },
  {
    title: 'Driver Mobile Application',
    tag: 'Android RFID & Photo Proof',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80',
    desc: 'Android app for drivers to view trip stops, scan bin RFID tags, capture photo proof of contamination, and record customer digital signatures.',
    icon: 'Smartphone'
  },
  {
    title: 'EPR & PRO Compliance',
    tag: 'Pollution Board Ready',
    img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80',
    desc: 'Automate Extended Producer Responsibility (EPR) credit generation, recycling certificates, and government pollution control board filings.',
    icon: 'FileCheck'
  },
  {
    title: 'Fleet Telemetry & Fuel Control',
    tag: 'Live GPS & Geofence',
    img: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80',
    desc: 'Live GPS vehicle tracking, geofence yard alerts, fuel consumption analysis, and preventive maintenance service reminders.',
    icon: 'Truck'
  }
];

export const awmClients = [
  {
    name: 'Tadweeer',
    type: 'Recycling Operations',
    img: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=80',
    desc: 'Manages multi-yard metal and polymer recycling intake with automated weighbridge gross/tare logging, MRF sorting yields, and instant customer payout settlements.',
    metric: 'Weighbridge Ticket Time: <45s • 100% Audit Compliance'
  },
  {
    name: 'Resustainability',
    type: 'Environmental Services',
    img: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=600&q=80',
    desc: 'Runs pan-India circular economy project accounting, tracking field equipment, hazardous waste manifests, and municipal service level agreements seamlessly.',
    metric: 'Multi-Project Visibility: Live • 2.4x Faster Milestone Turnaround'
  }
];

export const awmWeighbridgeSimulation = {
  ticketNo: 'WB-2026-8941',
  date: 'Today, 10:48 AM',
  vehicleNo: 'DL-01-EA-4091 (Tata 1618 Tipper)',
  transporter: 'Tadweeer Recycling Logistics',
  customer: 'Delhi Municipal Environmental Zone 4',
  material: 'Segregated Industrial Polymer Scrap',
  grossWeight: '24,850 kg (Gross)',
  tareWeight: '10,050 kg (Tare)',
  netWeight: '14,800 kg (14.80 MT Net)',
  status: 'Approved & Verified',
  manifestId: 'CPCB-MAN-88219-DEL',
  disposalSite: 'Okhla Material Recovery Facility #2'
};
