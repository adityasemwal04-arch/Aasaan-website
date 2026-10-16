import fs from 'fs';
import path from 'path';

const distIndexPath = path.resolve('dist/index.html');
if (!fs.existsSync(distIndexPath)) {
  console.error('dist/index.html not found. Please run vite build first.');
  process.exit(1);
}

let baseHtml = fs.readFileSync(distIndexPath, 'utf8');

// List of static SEO pages to pre-generate for search engines & static hosting (GitHub Pages / Render)
const seoPages = [
  {
    route: 'awm',
    title: 'AWM Waste Management ERP - Solid, Liquid & Biomedical Waste Operations Software | Aasaan',
    desc: 'Specialized waste management ERP by Aasaan. GPS fleet tracking, manifest compliance, CPCB regulatory reporting, weighbridge integration & automated billing.'
  },
  {
    route: 'lite',
    title: 'Aasaan ERP Lite - Agile, Cost-Effective Cloud ERP for Small & Medium Businesses | Aasaan',
    desc: 'Deploy ERP in days. Streamline billing, GST invoicing, inventory tracking, and payroll with zero IT overhead for fast-growing SMEs.'
  },
  {
    route: 'global',
    title: 'Aasaan Enterprises ERP - Scalable Enterprise Resource Planning for Large Operations | Aasaan',
    desc: 'Designed for mid to large enterprises. Advanced supply chain, multi-entity financial consolidation, compliance and real-time operational analytics.'
  },
  {
    route: 'partners',
    title: 'Partner Program - Grow Your Revenue with Aasaan ERP Ecosystem | Aasaan',
    desc: 'Join the Aasaan ERP partner network. High recurring margins, co-marketing support, enterprise training, and certified technical implementation support.'
  },
  {
    route: 'login',
    title: 'Admin Portal Login - Aasaan ERP',
    desc: 'Secure administrative access to Aasaan ERP CMS, demo queries, and announcements console.'
  },
  {
    route: 'admin',
    title: 'Admin Dashboard - Aasaan ERP Management Console',
    desc: 'Manage demo leads, customer queries, active announcements, and publication of ERP industry blogs.'
  },
  // Industry Blogs / Specialized Modules
  {
    route: 'blog/manufacturing-engineering',
    title: 'Manufacturing & Engineering ERP: Real-Time Shop Floor & Multi-Level BOM | Aasaan ERP',
    desc: 'Comprehensive engineering ERP guide on shop-floor IoT telemetry, multi-level BOM costing, scrap management, and automated work-order routing.'
  },
  {
    route: 'blog/financial-management',
    title: 'Financial Management ERP: Automated GST, Multi-Currency & Reconciliation | Aasaan ERP',
    desc: 'Automate accounting, Indian GST compliance, E-Invoicing, multi-entity ledgers, and bank reconciliation with Aasaan Financial ERP.'
  },
  {
    route: 'blog/supply-chain-warehouse',
    title: 'Supply Chain & Intelligent Warehouse: Automated Reorder & Multi-Bin Tracking | Aasaan ERP',
    desc: 'Optimize inventory turnover with multi-bin tracking, automated purchase orders, vendor 3-way matching, and batch expiry tracking.'
  },
  {
    route: 'blog/human-capital-management',
    title: 'Human Capital Management: Biometric Attendance, Payroll & PF/ESI Compliance | Aasaan ERP',
    desc: 'All-in-one HRMS automating biometric attendance sync, payroll processing, PF/ESI statutory compliance, and employee self-service.'
  },
  {
    route: 'blog/crm-sales-operations',
    title: 'CRM & Sales Operations: Omni-Channel Leads, Quoting & Commission | Aasaan ERP',
    desc: 'Turn opportunities into closed deals faster with unified pipeline management, automated quotation generation, and real-time sales telemetry.'
  },
  {
    route: 'blog/omnichannel-retail-chains',
    title: 'Omnichannel Retail Chains ERP: Real-Time POS Sync & Multi-Store Inventory | Aasaan ERP',
    desc: 'Centralize POS transactions, loyalty programs, inventory replenishment, and e-commerce orders across 50+ retail store locations.'
  },
  {
    route: 'blog/trading-regional-distribution',
    title: 'Trading & Regional Distribution ERP: Multi-Warehouse & Credit Control | Aasaan ERP',
    desc: 'Master regional wholesale logistics with integrated dispatch scheduling, dynamic distributor pricing tiers, and credit limit locks.'
  },
  {
    route: 'blog/education-academic-institutes',
    title: 'Education & Academic Institutes ERP: Fee Lifecycle, SIS & Scholarships | Aasaan ERP',
    desc: 'End-to-end student information system (SIS), online fee payment gateway, timetable management, and automated scholarship allocation.'
  },
  {
    route: 'blog/sports-arena-management',
    title: 'Sports & Arena Management ERP: Court Slot Booking & Member Billing | Aasaan ERP',
    desc: 'Manage turf and stadium bookings, sports academy memberships, equipment rentals, and cafeteria POS in one connected ERP.'
  },
  {
    route: 'blog/oil-gas-energy',
    title: 'Oil, Gas & Energy Fields ERP: Preventive Maintenance & Asset Telemetry | Aasaan ERP',
    desc: 'Rig equipment monitoring, pipeline telemetry, safety compliance audits, and preventive maintenance scheduling for oil & gas operators.'
  },
  {
    route: 'blog/warehouse-3pl-logistics',
    title: 'Warehouse & 3PL Logistics ERP: Cross-Docking & Real-Time Consignment | Aasaan ERP',
    desc: 'High-throughput 3PL warehousing with automated volumetric billing, cross-docking dispatch, and GPS fleet consignment tracking.'
  },
  {
    route: 'blog/waste-management-recycling',
    title: 'Waste Management & Recycling ERP: CPCB Compliance & Weighbridge Sync | Aasaan ERP',
    desc: 'Flagship AWM solution for municipal, industrial, biomedical, and e-waste operators with live weighbridge gross/tare capture.'
  },
  {
    route: 'services',
    title: 'ERP Services - Implementation, Cloud, AI & Support | Aasaan ERP',
    desc: 'Full lifecycle ERP services: implementation, custom development, cloud infrastructure, AI consulting, training, and 24/7 managed support. Enterprise go-live in 7 days.'
  },
  {
    route: 'about',
    title: 'About Us - The Aasaan ERP Story, Mission & Team | Aasaan ERP',
    desc: 'Learn about Aasaan ERP — founded in 2014 to make enterprise software genuinely simple. Meet our leadership team, discover our values, and explore our decade of innovation.'
  }
];

function injectSeo(html, page) {
  let updated = html;
  // Replace <title>
  updated = updated.replace(/<title>.*?<\/title>/i, `<title>${page.title}</title>`);
  // Replace <meta name="description">
  if (updated.includes('<meta name="description"')) {
    updated = updated.replace(/<meta name="description" content=".*?" \/>/i, `<meta name="description" content="${page.desc}" />`);
  } else {
    updated = updated.replace('</head>', `  <meta name="description" content="${page.desc}" />\n</head>`);
  }
  return updated;
}

// 1. Create GitHub Pages fallback (404.html)
const path404 = path.resolve('dist/404.html');
fs.writeFileSync(path404, baseHtml, 'utf8');
console.log('✓ Generated dist/404.html (GitHub Pages SPA Fallback)');

// 2. Pre-generate directory index.html files for each route
for (const p of seoPages) {
  const targetDir = path.resolve('dist', p.route);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  const pageHtml = injectSeo(baseHtml, p);
  const targetFile = path.join(targetDir, 'index.html');
  fs.writeFileSync(targetFile, pageHtml, 'utf8');
  console.log(`✓ Pre-generated SEO page: /${p.route}/index.html`);
}

// 3. Sync to Spring Boot static resources
const springBootStaticPaths = [
  'backend-springboot/src/main/resources/static/index.html',
  'backend-springboot/target/classes/static/index.html'
];

for (const dest of springBootStaticPaths) {
  try {
    const fullDest = path.resolve(dest);
    const dir = path.dirname(fullDest);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.copyFileSync(distIndexPath, fullDest);
    console.log('✓ Synced to', dest);
  } catch (e) {
    console.error('Error copying to', dest, e.message);
  }
}

// Copy tools directory to Spring Boot static resources as well
const springBootStaticDirs = [
  'backend-springboot/src/main/resources/static',
  'backend-springboot/target/classes/static'
];

for (const baseDest of springBootStaticDirs) {
  try {
    const fullBaseDest = path.resolve(baseDest);
    const toolsSrc = path.resolve('public/tools');
    const toolsDest = path.join(fullBaseDest, 'tools');
    if (fs.existsSync(toolsSrc)) {
      fs.cpSync(toolsSrc, toolsDest, { recursive: true });
      console.log('✓ Synced tools to', toolsDest);
    }
  } catch (e) {
    console.error('Error copying tools to', baseDest, e.message);
  }
}

console.log('🎉 Post-build SEO and SPA routing setup completed successfully!');
