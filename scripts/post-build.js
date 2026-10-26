import fs from 'fs';
import path from 'path';

const distIndexPath = path.resolve('dist/index.html');
if (!fs.existsSync(distIndexPath)) {
  console.error('dist/index.html not found. Please run vite build first.');
  process.exit(1);
}

let baseHtml = fs.readFileSync(distIndexPath, 'utf8');

// Ensure all favicon links are root-absolute with cache buster for all domains
baseHtml = baseHtml.replace(/href="\.\/favicon/g, 'href="/favicon');
baseHtml = baseHtml.replace(/href="\.\/apple-touch-icon/g, 'href="/apple-touch-icon');
fs.writeFileSync(distIndexPath, baseHtml, 'utf8');

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
  {
    route: 'blogs',
    title: 'Industry ERP Knowledge Base & Solution Guides | Aasaan ERP',
    desc: 'Browse in-depth ERP architecture guides, regulatory compliance frameworks, and manufacturing automation blueprints across 30+ enterprise industries.'
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
    route: 'blog/stock-control',
    title: 'Stock Control & Multi-Depot ERP: Surplus & Expiry Optimization | Aasaan ERP',
    desc: 'Master inventory control across central hubs and factory stores. Automated FIFO/FEFO picking, batch lot traceability, and landed cost calculation.'
  },
  {
    route: 'blog/crm',
    title: 'Enterprise CRM: Lead-to-Customer Pipeline & Deal Conversion | Aasaan ERP',
    desc: 'Streamline customer relationships, omnichannel lead capture, visual Kanban deal stages, quotation versioning, and sales rep analytics.'
  },
  {
    route: 'blog/purchasing',
    title: 'Strategic Procurement ERP: Rate Contracts & 3-Way Match | Aasaan ERP',
    desc: 'Automate purchase requisitions, RFQ vendor comparison matrices, 3-way GRN invoice matching, and automated PO digital approvals.'
  },
  {
    route: 'blog/sales',
    title: 'Sales & Quote-to-Cash ERP: Customer Credit Lock & Dispatch | Aasaan ERP',
    desc: 'End-to-end sales lifecycle automation from inquiry to quotation, sales order credit checks, delivery challans, and GST e-invoicing.'
  },
  {
    route: 'blog/service',
    title: 'Field Service & Maintenance ERP: SLA Tracking & AMC Contracts | Aasaan ERP',
    desc: 'Field service ticket escalation, AMC recurring maintenance contracts, mobile engineer GPS dispatching, and on-site spare parts logs.'
  },
  {
    route: 'blog/reporting',
    title: 'Reporting & Business Intelligence: Real-Time BI Analytics | Aasaan ERP',
    desc: '300+ pre-built executive reports, interactive drill-down financial statements, drag-and-drop report builder, and scheduled automated email delivery.'
  },
  {
    route: 'blog/manufacturing',
    title: 'Manufacturing & MRP II: Multi-Level BOM & Work Center Routing | Aasaan ERP',
    desc: 'Shop-floor control with multi-tier BOM explosion, material requirements planning (MRP), barcode floor terminals, and scrap accounting.'
  },
  {
    route: 'blog/waste-management',
    title: 'Waste Management & Recycling ERP: Digital Weighbridge & Manifests | Aasaan ERP',
    desc: 'Purpose-built circular economy ERP for waste haulers and recycling plants with automated weighbridge scale integration and CPCB compliance.'
  },
  {
    route: 'blog/digital-ceo',
    title: 'Digital CEO: Real-Time Executive Command Cockpit | Aasaan ERP',
    desc: 'AI-driven executive cockpit consolidating multi-plant operations, cash flow projections, margin leakages, and strategic KPI variances.'
  },
  {
    route: 'blog/ai-capabilities',
    title: 'AI Capabilities: Predictive & Generative Intelligence | Aasaan ERP',
    desc: 'Deep enterprise machine learning embedded natively across workflows. Powers predictive inventory replenishment, automated invoice OCR, and smart agent bots.'
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
    route: 'blog/implementation-scope',
    title: 'ERP Implementation Scope & Deployment Methodology | Aasaan ERP',
    desc: 'Discover Aasaan ERP’s 5-phase enterprise implementation methodology: business blueprinting, legacy data migration, pilot simulations, cutover, and 30-day hypercare.'
  },
  {
    route: 'blog/go-live-readiness-checklist',
    title: 'ERP Go-Live Readiness Checklist: 7-Day Cutover Protocol | Aasaan ERP',
    desc: 'Comprehensive pre-flight checklist for ERP go-live. Verify master data integrity, opening balances, GST API credentials, and weighbridge calibration.'
  },
  {
    route: 'blog/sla-agreement-tiers',
    title: 'Enterprise Support & SLA Agreement Tiers: 99.98% Cloud Availability | Aasaan ERP',
    desc: 'Explore Aasaan ERP’s enterprise Service Level Agreements: 15-minute critical incident resolution, designated TAM, and 99.98% cloud uptime commitments.'
  },
  {
    route: 'blog/custom-module-requirements',
    title: 'Bespoke Customization, REST APIs & IoT Telemetry Architecture | Aasaan ERP',
    desc: 'Custom data models, workflow approval engines, IoT weighbridge RS232 telemetry, and OpenAPI integration suite built for Indian manufacturing.'
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
  const canonicalUrl = `https://www.aasaanerp.com/${page.route}/`;

  // Replace <title>
  updated = updated.replace(/<title>.*?<\/title>/i, `<title>${page.title}</title>`);
  
  // Replace <meta name="description">
  if (updated.includes('name="description"')) {
    updated = updated.replace(/<meta name="description" content=".*?" \/>/i, `<meta name="description" content="${page.desc}" />`);
  }

  // Replace Canonical Link
  if (updated.includes('rel="canonical"')) {
    updated = updated.replace(/<link rel="canonical" href=".*?" \/>/i, `<link rel="canonical" href="${canonicalUrl}" />`);
  }

  // Replace Open Graph Tags
  if (updated.includes('property="og:title"')) {
    updated = updated.replace(/<meta property="og:title" content=".*?" \/>/i, `<meta property="og:title" content="${page.title}" />`);
  }
  if (updated.includes('property="og:description"')) {
    updated = updated.replace(/<meta property="og:description" content=".*?" \/>/i, `<meta property="og:description" content="${page.desc}" />`);
  }
  if (updated.includes('property="og:url"')) {
    updated = updated.replace(/<meta property="og:url" content=".*?" \/>/i, `<meta property="og:url" content="${canonicalUrl}" />`);
  }

  // Replace Twitter Tags
  if (updated.includes('name="twitter:title"')) {
    updated = updated.replace(/<meta name="twitter:title" content=".*?" \/>/i, `<meta name="twitter:title" content="${page.title}" />`);
  }
  if (updated.includes('name="twitter:description"')) {
    updated = updated.replace(/<meta name="twitter:description" content=".*?" \/>/i, `<meta name="twitter:description" content="${page.desc}" />`);
  }

  // Ensure all favicon links are root-absolute
  updated = updated.replace(/href="\.\/favicon/g, 'href="/favicon');
  updated = updated.replace(/href="\.\/apple-touch-icon/g, 'href="/apple-touch-icon');

  return updated;
}

// 1. Create GitHub Pages fallback (404.html)
const path404 = path.resolve('dist/404.html');
fs.writeFileSync(path404, baseHtml, 'utf8');
console.log('✓ Generated dist/404.html (GitHub Pages SPA Fallback)');

// 2. Pre-generate directory index.html files for each route
const faviconFiles = ['favicon.ico', 'favicon.png', 'favicon-32x32.png', 'favicon-16x16.png', 'apple-touch-icon.png', 'aasaan-mart-favicon.png'];

for (const p of seoPages) {
  const targetDir = path.resolve('dist', p.route);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  const pageHtml = injectSeo(baseHtml, p);
  const targetFile = path.join(targetDir, 'index.html');
  fs.writeFileSync(targetFile, pageHtml, 'utf8');

  // Also place local favicon copies in subdirectories for relative fallback
  for (const fav of faviconFiles) {
    const srcFav = path.resolve('public', fav);
    if (fs.existsSync(srcFav)) {
      fs.copyFileSync(srcFav, path.join(targetDir, fav));
    }
  }

  console.log(`✓ Pre-generated SEO page: /${p.route}/index.html`);
}

// 3. Ensure robots.txt, sitemap.xml, and favicons are copied to dist
const staticFilesToDist = [
  'robots.txt',
  'sitemap.xml',
  'aasaan-logo.png',
  'favicon.ico',
  'favicon.png',
  'favicon-32x32.png',
  'favicon-16x16.png',
  'apple-touch-icon.png',
  'aasaan-mart-favicon.png',
  'aasaan-icon-hd.png'
];
for (const file of staticFilesToDist) {
  const src = path.resolve('public', file);
  const dest = path.resolve('dist', file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`✓ Copied ${file} to dist/`);
  }
}

// 4. Sync to Spring Boot static resources
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

// Copy public tools, images, robots.txt, sitemap.xml to Spring Boot static resources as well
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

    const imagesSrc = path.resolve('public/images');
    const imagesDest = path.join(fullBaseDest, 'images');
    if (fs.existsSync(imagesSrc)) {
      fs.cpSync(imagesSrc, imagesDest, { recursive: true });
      console.log('✓ Synced images to', imagesDest);
    }

    for (const f of ['robots.txt', 'sitemap.xml', 'aasaan-logo.png', 'favicon.ico', 'favicon.png', 'favicon-32x32.png', 'favicon-16x16.png', 'apple-touch-icon.png', 'aasaan-mart-favicon.png', 'aasaan-icon-hd.png']) {
      const fSrc = path.resolve('public', f);
      const fDest = path.join(fullBaseDest, f);
      if (fs.existsSync(fSrc)) {
        fs.copyFileSync(fSrc, fDest);
      }
    }

    // Sync pre-generated SEO directory pages (services, about, awm, etc.)
    for (const p of seoPages) {
      const srcDir = path.resolve('dist', p.route);
      const destDir = path.join(fullBaseDest, p.route);
      if (fs.existsSync(srcDir)) {
        fs.cpSync(srcDir, destDir, { recursive: true });
      }
    }
    console.log('✓ Synced SEO pages and assets to', fullBaseDest);
  } catch (e) {
    console.error('Error copying assets to', baseDest, e.message);
  }
}

console.log('🎉 Post-build SEO and SPA routing setup completed successfully!');
