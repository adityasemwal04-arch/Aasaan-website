import React, { useState } from 'react';
import { getAssetUrl, handleImageError } from '../utils/assetHelper';
import heroImg from '../assets/aasaan_erp_header_desktop.png';
import aasaanLogoSrc from '../assets/aasaan-logo.png';

export default function OriginalAasaanHomePage({ onOpenDemo, onNavigate }) {
  const [whyTab, setWhyTab] = useState(0);
  const [clientTab, setClientTab] = useState(0);
  const [toolTab, setToolTab] = useState(0);

  const clients = [
    { id: 0, name: 'Tadweeer', industry: 'Recycling & Waste Management', work: 'Recycling operations management.', img: 'media/Taqdweer_11.png', fallback: 'https://www.aasaanerp.com/media/solutions/Taqdweer_11.png' },
    { id: 1, name: 'Resustainability', industry: 'Environmental Services & Sustainability Solutions', work: 'Sustainability project tracking', img: 'media/Resustainability_11.png', fallback: 'https://www.aasaanerp.com/media/solutions/Resustainability_11.png' },
    { id: 2, name: 'Galaxy Tools', industry: 'Industrial Tools & Equipment Manufacturing', work: 'Production and inventory', img: 'media/Galaxy_Tools1_MYqjHU9.png', fallback: 'https://www.aasaanerp.com/media/solutions/Galaxy_Tools1_MYqjHU9.png' },
    { id: 3, name: 'Shofu Dental', industry: 'Dental Products & Medical Equipment', work: 'Stock and order management', img: 'media/Shofu_Dental_1.png', fallback: 'https://www.aasaanerp.com/media/solutions/Shofu_Dental_1.png' },
    { id: 4, name: 'Miranay Trading and Investment', industry: 'Trading & Investment Services', work: 'Financial operations management', img: 'media/Miranay_Trading_and_Investment_11.png', fallback: 'https://www.aasaanerp.com/media/solutions/Miranay_Trading_and_Investment_11.png' }
  ];

  const modules = [
    { slug: 'financial-management', name: 'Financial Management', desc: 'A full suite of accounting functions and reporting tools, to meet the needs of growing companies.', img: 'media/Group_1281.png', fallback: 'https://www.aasaanerp.com/media/solutions/Group_1281.png' },
    { slug: 'stock-control', name: 'Stock Control', desc: 'Effortlessly manage inventory with AASAAN ERP\'s smart Stock Control module.', img: 'media/Group_1282.png', fallback: 'https://www.aasaanerp.com/media/solutions/Group_1282.png' },
    { slug: 'crm', name: 'CRM', desc: 'Seamlessly manage leads, track customer interactions, and boost sales conversions.', img: 'media/Group_1283.png', fallback: 'https://www.aasaanerp.com/media/solutions/Group_1283.png' },
    { slug: 'purchasing', name: 'Purchasing', desc: "Streamline vendor management and optimize procurement with Aasaan ERP's smart Purchasing module.", img: 'media/Group_1287.png', fallback: 'https://www.aasaanerp.com/media/solutions/Group_1287.png' },
    { slug: 'sales', name: 'Sales', desc: 'Effortlessly manage your entire sales cycle with AASAAN ERP – from lead to deal!', img: 'media/Group_1284.png', fallback: 'https://www.aasaanerp.com/media/solutions/Group_1284.png' },
    { slug: 'service', name: 'Service', desc: "Streamline your operations and elevate customer satisfaction with AASAAN ERP's smart Service module.", img: 'media/Group_1285.png', fallback: 'https://www.aasaanerp.com/media/solutions/Group_1285.png' },
    { slug: 'reporting', name: 'Reporting', desc: 'Comprehensive, real-time insights at your fingertips with AASAAN ERP Reporting.', img: 'media/Group_1286.png', fallback: 'https://www.aasaanerp.com/media/solutions/Group_1286.png' },
    { slug: 'manufacturing', name: 'Manufacturing', desc: "Streamline your production process with AASAAN ERP's intelligent Manufacturing module.", img: 'media/Group_1288.png', fallback: 'https://www.aasaanerp.com/media/solutions/Group_1288.png' },
    { slug: 'waste-management', name: 'Waste Management', desc: 'AWM is tailored for businesses in the waste management sector, offering comprehensive tools for inventory tracking, bin management, and order fulfillment.', img: 'media/Waste_Management_pic.png', fallback: 'https://www.aasaanerp.com/media/solutions/Waste_Management_pic.png' }
  ];

  const toolCategories = [
    { name: 'Accounting & Finance', dir: 'accounting_and_finance', count: 9 },
    { name: 'Communication & Messaging', dir: 'communication_and_messaging', count: 6 },
    { name: 'E-Commerce Platforms', dir: 'ecommerce_platforms', count: 5 },
    { name: 'Manufacturing & Supply Chain', dir: 'manufacturing_and_supply', count: 3 },
    { name: 'CRM & Marketing', dir: 'crm_and_marketing', count: 5 },
    { name: 'Logistics & Shipping', dir: 'logistics_and_shipping', count: 5 },
    { name: 'HR & Payroll', dir: 'hr_and_payroll', count: 5 },
    { name: 'Analytics & Reporting', dir: 'analytics_and_reporting', count: 5 },
    { name: 'Document & Cloud Storage', dir: 'document_and_cloud_storage', count: 4 },
    { name: 'Dev Tools & APIs', dir: 'dev_tools_and_api', count: 4 }
  ];

  const currentToolCategory = toolCategories[toolTab] || toolCategories[0];
  const activeClient = clients[clientTab] || clients[0];

  return (
    <div className="column_alignment base_margin" style={{ marginTop: '106px' }}>

      {/* ============================================================ */}
      {/* TRUST / STATS BAR                                           */}
      {/* ============================================================ */}
      <div style={{
        background: 'linear-gradient(90deg, var(--colorAccent) 0%, #1565c0 100%)',
        color: '#ffffff',
        padding: '14px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '28px',
        fontSize: '14px',
        fontWeight: 600,
        boxShadow: '0 2px 8px rgba(30,149,211,0.3)'
      }}>
        {[
          { value: '100+', label: 'Businesses Served', icon: 'fas fa-briefcase' },
          { value: '9',    label: 'ERP Modules',       icon: 'fas fa-cubes' },
          { value: '10+', label: 'Years of Innovation',icon: 'fas fa-award' },
          { value: '24/7',label: 'Expert Support',     icon: 'fas fa-headset' },
        ].map((stat, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <i className={stat.icon} style={{ fontSize: '18px', color: 'rgba(255,255,255,0.75)' }}></i>
            <span style={{ fontSize: '22px', fontWeight: 800, color: '#fff' }}>{stat.value}</span>
            <span style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>{stat.label}</span>
            {i < 3 && <span style={{ color: 'rgba(255,255,255,0.35)', marginLeft: '8px' }}>|</span>}
          </div>
        ))}
      </div>

      {/* ============================================================ */}
      {/* 1. HERO — SPLIT LAYOUT (replaces generic city video)         */}
      {/* ============================================================ */}
      <div style={{
        background: 'linear-gradient(135deg, #0d1b2a 0%, #1a3a54 45%, #1e95d3 100%)',
        padding: '60px 24px',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <div style={{ maxWidth: '1200px', width: '100%', display: 'flex', alignItems: 'center', gap: '48px', flexWrap: 'wrap' }}>

          {/* LEFT — Headline + CTAs */}
          <div style={{ flex: '1 1 420px', display: 'flex', flexDirection: 'column', gap: '20px' }}>

            {/* Badge pills */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <span style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', color: '#75d0f7', fontSize: '12px', fontWeight: 700, padding: '5px 14px', borderRadius: '20px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                🏆 &nbsp;Trusted by 100+ Businesses
              </span>
              <span style={{ background: 'rgba(255,91,11,0.2)', border: '1px solid rgba(255,91,11,0.4)', color: '#ffb38a', fontSize: '12px', fontWeight: 700, padding: '5px 14px', borderRadius: '20px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                ⚡ &nbsp;Go Live in Days
              </span>
            </div>

            {/* Headline */}
            <h1 style={{ color: '#ffffff', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 900, margin: 0, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
              The ERP That Actually<br />
              <span style={{ background: 'linear-gradient(90deg, #75d0f7, #ff5b0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Works For You.
              </span>
            </h1>

            {/* Subline */}
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '16px', margin: 0, lineHeight: 1.7, maxWidth: '480px' }}>
              Aasaan ERP brings Finance, Sales, CRM, Inventory, Manufacturing and more into one powerful platform — tailored for Indian businesses and deployed on AWS.
            </p>

            {/* Feature bullets */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { icon: '✅', text: 'No IT team needed — zero-code setup' },
                { icon: '☁️', text: 'Cloud + On-Premise — your choice' },
                { icon: '📱', text: 'Works on any device, anywhere' },
                { icon: '🔗', text: 'Connects with WhatsApp, Tally, Razorpay & more' }
              ].map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '16px' }}>{f.icon}</span>
                  <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14.5px', fontWeight: 500 }}>{f.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '8px' }}>
              <button
                onClick={onOpenDemo}
                style={{ background: 'var(--colorAccent)', color: '#fff', border: 'none', borderRadius: '8px', padding: '14px 32px', fontSize: '15px', fontWeight: 800, cursor: 'pointer', boxShadow: '0 6px 20px rgba(30,149,211,0.4)', transition: 'all 0.2s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(30,149,211,0.55)'; e.currentTarget.style.background = '#157bb3'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(30,149,211,0.4)'; e.currentTarget.style.background = 'var(--colorAccent)'; }}
              >
                Book a Free Demo →
              </button>
              <a
                href="https://wa.me/917428267616?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Aasaan%20ERP"
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1.5px solid rgba(255,255,255,0.3)', borderRadius: '8px', padding: '14px 24px', fontSize: '15px', fontWeight: 600, textDecoration: 'none', transition: 'all 0.2s ease', display: 'flex', alignItems: 'center', gap: '8px' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
              >
                <i className="fab fa-whatsapp" style={{ fontSize: '18px', color: '#25D366' }}></i>
                Talk to Us
              </a>
            </div>

            {/* Quick Micro Guarantees */}
            <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap', fontSize: '12.5px', color: 'rgba(255,255,255,0.7)', alignItems: 'center', marginTop: '-4px' }}>
              <span><i className="fas fa-shield-alt" style={{ color: '#75d0f7', marginRight: '6px' }}></i>ISO & AWS Certified</span>
              <span><i className="fas fa-bolt" style={{ color: '#ffb38a', marginRight: '6px' }}></i>Free 30-Min Walkthrough</span>
              <span><i className="fas fa-credit-card" style={{ color: '#75d0f7', marginRight: '6px' }}></i>No Credit Card Required</span>
            </div>

            {/* Social proof numbers */}
            <div style={{ display: 'flex', gap: '24px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)', flexWrap: 'wrap' }}>
              {[{ n: '100+', l: 'Clients' }, { n: '9', l: 'Modules' }, { n: '10+', l: 'Years' }, { n: '24/7', l: 'Support' }].map((s, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ color: '#ffffff', fontSize: '22px', fontWeight: 800, lineHeight: 1 }}>{s.n}</span>
                  <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '12px', fontWeight: 500, marginTop: '2px' }}>{s.l}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Product screenshot in browser frame */}
          <div style={{ flex: '1 1 380px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '560px' }}>
              {/* Glow */}
              <div style={{ position: 'absolute', inset: '-20px', background: 'radial-gradient(ellipse at center, rgba(30,149,211,0.35) 0%, transparent 70%)', borderRadius: '24px', zIndex: 0 }} />
              {/* Browser chrome */}
              <div style={{ background: '#1e2832', borderRadius: '12px 12px 0 0', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '6px', position: 'relative', zIndex: 1 }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28c840', display: 'inline-block' }} />
                <div style={{ flex: 1, background: '#2d3748', borderRadius: '4px', padding: '3px 10px', marginLeft: '8px', fontSize: '11px', color: 'rgba(255,255,255,0.5)', fontFamily: 'monospace' }}>
                  app.aasaanerp.com
                </div>
              </div>
              {/* Screenshot */}
              <img
                src={heroImg}
                alt="Aasaan ERP Dashboard"
                style={{ width: '100%', display: 'block', borderRadius: '0 0 12px 12px', boxShadow: '0 24px 60px rgba(0,0,0,0.5)', position: 'relative', zIndex: 1 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* FEATURE STRIP — 3 Quick Trust Cards                         */}
      {/* ============================================================ */}
      <div style={{
        background: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
        padding: '0 24px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {[
            { icon: 'fas fa-rocket', title: 'Go Live in Days', desc: 'Not months. Fastest ERP implementation guaranteed — or we help you for free.', color: '#1e95d3' },
            { icon: 'fas fa-cloud', title: 'Cloud + On-Premise', desc: 'Hosted on AWS or your own servers. Your data, your control, your choice.', color: '#0094DA' },
            { icon: 'fas fa-headset', title: '24/7 Expert Support', desc: 'Real humans, not bots. Our team is always one call away whenever you need help.', color: '#1565c0' },
            { icon: 'fas fa-puzzle-piece', title: '9 Integrated Modules', desc: 'Finance, CRM, Sales, Inventory, HR and more — all talking to each other seamlessly.', color: '#23779a' },
          ].map((f, i) => (
            <div key={i} style={{
              flex: '1 1 220px',
              padding: '28px 20px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '14px',
              borderRight: i < 3 ? '1px solid #e2e8f0' : 'none',
              minWidth: '200px'
            }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'rgba(30,149,211,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <i className={f.icon} style={{ fontSize: '18px', color: f.color }}></i>
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '14.5px', color: '#212121', marginBottom: '4px' }}>{f.title}</div>
                <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.5 }}>{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ============================================================ */}
      {/* COMMUNITY & TAGLINE                                          */}
      {/* ============================================================ */}
      <div className="column_alignment" style={{ background: '#fff' }}>
        <div className="row_column_alignment align_self_center align_center" style={{ width: '90%', maxWidth: '850px', padding: '36px 0', gap: '20px' }}>
          <img
            src={getAssetUrl('images/best_software_tag.png')}
            onError={(e) => handleImageError(e, 'https://www.aasaanerp.com/static/main/images/best_software_tag.png')}
            alt="Best Software Tag"
            style={{ width: '150px', objectFit: 'contain', flexShrink: 0 }}
          />
          <div className="column_alignment" style={{ padding: '8px 16px' }}>
            <span style={{ fontWeight: 600, fontSize: '26px', color: '#212121', lineHeight: 1.3 }}>
              Shaping the Future of Business, <b style={{ color: 'var(--colorAccent2)', fontWeight: 700 }}>Together</b>
            </span>
            <span style={{ marginTop: '16px', lineHeight: 1.6, color: '#5f5f5f', fontSize: '15.5px' }}>
              Community is our foundation. It drives innovation, empowers individuals, and enables growth. Our customers, our partners, our people – it takes all of us.
            </span>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* AI-DRIVEN ERP BANNER                                         */}
      {/* ============================================================ */}
      <div className="column_alignment" style={{ background: '#f8f9fa' }}>
        <div className="main_content align_self_center" style={{ padding: '40px 16px' }}>
          <div className="row_column_alignment two home_trusted_section" style={{ alignItems: 'center', gap: '30px' }}>
            <div className="column_alignment" style={{ flex: 1 }}>
              <img
                src={getAssetUrl('images/AI Driven Image.jpg')}
                onError={(e) => handleImageError(e, 'https://www.aasaanerp.com/static/main/images/AI%20Driven%20Image.jpg')}
                alt="AI Driven ERP"
                style={{ width: '100%', borderRadius: '12px 60px 12px 12px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
              />
            </div>
            <div className="column_alignment" style={{ flex: 1, padding: '10px 16px', justifyContent: 'center' }}>
              <div className="column_alignment">
                <span style={{ fontWeight: 700, fontSize: '24px', color: '#212121', lineHeight: 1.3 }}>
                  Shaping the Future with AI-Driven ERP
                </span>
                <span style={{ marginTop: '10px', marginBottom: '14px', lineHeight: 1.6, color: '#5f5f5f', fontSize: '14.5px' }}>
                  Aasaan ERP is more than software — it's your intelligent business co-pilot. Powered by AI, driven by your data, and always learning.
                </span>
                <ul>
                  <li><b>Smart Recommendations –</b> Get AI-powered insights for pricing, inventory, customer follow-ups &amp; more</li>
                  <li><b>Predictive Automation –</b> Forecast demand, auto-suggest purchase orders, detect anomalies before they happen</li>
                  <li><b>Conversational UI –</b> Use voice or chat to pull reports, assign tasks, or create records — just like messaging a teammate</li>
                  <li><b>Real-Time Decision Support –</b> AI helps you make faster, data-backed decisions across finance, ops, and sales</li>
                  <li><b>Self-optimizing Workflows –</b> The system learns from how your team works and suggests better ways</li>
                  <li style={{ borderBottom: 'none' }}><b>With Aasaan ERP, AI isn't a buzzword —</b> it's baked into the DNA of your business operations.</li>
                </ul>
                <div style={{ marginTop: '16px' }}>
                  <button onClick={onOpenDemo} className="accent_button" style={{ borderRadius: '6px' }}>
                    Experience AI ERP
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 2. WHY AASAAN ERP — TABS                                     */}
      {/* ============================================================ */}
      <div className="column_alignment section_wrapper" style={{ background: '#FFFFFF' }}>
        <div className="column_alignment main_content align_self_center">

          <h2 className="page_heading">
            Why <b>AASAAN</b><br />ENTERPRISE Resource Planning (ERP)?
          </h2>

          <div className="why_aasaan_tabs_wrapper">
            <span onClick={() => setWhyTab(0)} className={whyTab === 0 ? 'active' : ''}>⚡ Effortless to Use</span>
            <span onClick={() => setWhyTab(1)} className={whyTab === 1 ? 'active' : ''}>🌐 Your Business, Anywhere</span>
            <span onClick={() => setWhyTab(2)} className={whyTab === 2 ? 'active' : ''}>🏆 Proven. Powerful. Trusted.</span>
          </div>

          {whyTab === 0 && (
            <div className="column_alignment why_aasaan_tab_content active">
              <div className="row_column_alignment two" style={{ alignItems: 'center', gap: '30px' }}>
                <div className="column_alignment align_self_center" style={{ flex: 1, padding: '0 16px' }}>
                  <span style={{ fontSize: '18px', fontWeight: 600, color: '#212121', marginBottom: '16px' }}>
                    Aasaan ERP is designed for people who get things done — not for those who want to babysit software.
                  </span>
                  <div style={{ color: '#495057', fontSize: '15px', lineHeight: 1.7 }}>
                    <p>🎯 <b>Zero learning curve</b> – Start using it like a pro from Day 1</p>
                    <p>🖥️ <b>Intuitive interface</b> – Everything where you expect it</p>
                    <p>🔄 <b>Smart workflows</b> – Automate repetitive tasks, skip the grunt work</p>
                    <p>🧠 <b>Easily customizable</b> – Tailor screens, fields, and flows without tech support</p>
                    <p>🕹️ <b>One-click navigation</b> – Jump between modules in a snap</p>
                  </div>
                </div>
                <div className="column_alignment align_self_center" style={{ flex: 1, textAlign: 'center' }}>
                  <img
                    style={{ width: '90%', maxWidth: '450px', alignSelf: 'center', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
                    src={getAssetUrl('images/Why Aasaan Image 1 Effortless Use.jpg')}
                    onError={(e) => handleImageError(e, 'https://www.aasaanerp.com/static/main/images/Why%20Aasaan%20Image%201%20Effortless%20Use.jpg')}
                    alt="Effortless to Use"
                  />
                </div>
              </div>
            </div>
          )}

          {whyTab === 1 && (
            <div className="column_alignment why_aasaan_tab_content active">
              <div className="row_column_alignment two" style={{ alignItems: 'center', gap: '30px' }}>
                <div className="column_alignment align_self_center" style={{ flex: 1, padding: '0 16px' }}>
                  <span style={{ fontSize: '18px', fontWeight: 600, color: '#212121', marginBottom: '16px' }}>
                    Whether you're in the office, on-site, or halfway across the world — your ERP moves with you.
                  </span>
                  <div style={{ color: '#495057', fontSize: '15px', lineHeight: 1.7 }}>
                    <p>🌐 <b>100% cloud-native</b> – No setup, no server hassles</p>
                    <p>📱 <b>Mobile-first</b> – Works beautifully across devices</p>
                    <p>🔐 <b>Secure &amp; scalable</b> – Enterprise-grade protection, startup-friendly speed</p>
                    <p>🔄 <b>Real-time sync</b> – Everyone stays updated, always</p>
                    <p>🔌 <b>Connect your stack</b> – Plug into WhatsApp, Razorpay, Tally &amp; more</p>
                  </div>
                </div>
                <div className="column_alignment align_self_center" style={{ flex: 1, textAlign: 'center' }}>
                  <img
                    style={{ width: '90%', maxWidth: '450px', alignSelf: 'center', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
                    src={getAssetUrl('images/Why Aasaan Image 2 Business Anywhere.jpg')}
                    onError={(e) => handleImageError(e, 'https://www.aasaanerp.com/static/main/images/Why%20Aasaan%20Image%202%20Business%20Anywhere.jpg')}
                    alt="Your Business Anywhere"
                  />
                </div>
              </div>
            </div>
          )}

          {whyTab === 2 && (
            <div className="column_alignment why_aasaan_tab_content active">
              <div className="row_column_alignment two" style={{ alignItems: 'center', gap: '30px' }}>
                <div className="column_alignment align_self_center" style={{ flex: 1, padding: '0 16px' }}>
                  <span style={{ fontSize: '18px', fontWeight: 600, color: '#212121', marginBottom: '16px' }}>
                    Aasaan ERP isn't just another tool — it's the backbone of 100+ businesses and counting.
                  </span>
                  <div style={{ color: '#495057', fontSize: '15px', lineHeight: 1.7 }}>
                    <p>🏢 <b>Trusted by real businesses</b> – Across retail, waste mgmt, manufacturing &amp; more</p>
                    <p>🚀 <b>Built to grow</b> – Easily handle 10 or 10,000 users</p>
                    <p>⚙️ <b>Flexible architecture</b> – Add new modules or workflows without breaking anything</p>
                    <p>🤝 <b>Support that shows up</b> – Direct help from experts, not bots</p>
                    <p>🔁 <b>Always improving</b> – New features drop regularly, with no disruption</p>
                  </div>
                </div>
                <div className="column_alignment align_self_center" style={{ flex: 1, textAlign: 'center' }}>
                  <img
                    style={{ width: '90%', maxWidth: '450px', alignSelf: 'center', borderRadius: '12px', boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
                    src={getAssetUrl('images/Why Aasaan Image 3 Proven trusted.jpg')}
                    onError={(e) => handleImageError(e, 'https://www.aasaanerp.com/static/main/images/Why%20Aasaan%20Image%203%20Proven%20trusted.jpg')}
                    alt="Proven Powerful Trusted"
                  />
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* ============================================================ */}
      {/* 3. MODULES OF AASAAN ERP                                     */}
      {/* ============================================================ */}
      <div id="modules" className="column_alignment section_wrapper" style={{ background: '#f6fbfe' }}>
        <div className="column_alignment main_content align_self_center">
          <h2 className="page_heading align_self_center" style={{ maxWidth: '700px' }}>
            MODULES OF <b>AASAAN ERP</b>
          </h2>
          <div className="row_alignment wrap align_center" style={{ justifyContent: 'center' }}>
            {modules.map((m, idx) => (
              <div
                key={idx}
                className="modules_section_item column_alignment"
                onClick={() => {
                  if (onNavigate) {
                    onNavigate(`blog/${m.slug}`);
                  } else {
                    window.location.hash = `#/blog/${m.slug}`;
                  }
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                style={{ cursor: 'pointer' }}
                title={`Explore ${m.name} Architecture`}
              >
                <img src={getAssetUrl(m.img)} onError={(e) => handleImageError(e, m.fallback)} alt={m.name} />
                <div className="content column_alignment align_center">
                  <span>{m.name}</span>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 4. OUR CLIENTS                                               */}
      {/* ============================================================ */}
      <div className="column_alignment section_wrapper" style={{ background: 'rgba(211,234,245,0.3)' }}>
        <div className="column_alignment main_content align_self_center">
          <span className="page_heading" style={{ alignSelf: 'flex-start', textAlign: 'left', marginBottom: '8px' }}>
            <b>OUR CLIENTS</b>
          </span>
          <span style={{ alignSelf: 'flex-start', textAlign: 'left', fontSize: '16px', color: '#5f5f5f', maxWidth: '750px', marginBottom: '30px', lineHeight: 1.5 }}>
            The reason Aasaan has been the world's fastest-growing Cloud ERP company for 10 years and counting – we put our customers first.
          </span>

          <div className="row_column_alignment two" style={{ gap: '30px', alignItems: 'center' }}>
            <div className="column_alignment" style={{ flex: 1 }}>
              {clients.map((c, idx) => (
                <div key={c.id} className={`column_alignment client_section_item_wrapper ${clientTab === idx ? 'active' : ''}`} onClick={() => setClientTab(idx)}>
                  <span className="client_name">{c.name}</span>
                  <div className="row_column_alignment two content" style={{ display: clientTab === idx ? 'flex' : 'none', gap: '16px' }}>
                    <div className="column_alignment" style={{ flex: 1 }}>
                      <span className="client_label">Industry</span>
                      <span className="client_label_value">{c.industry}</span>
                    </div>
                    <div className="column_alignment" style={{ flex: 1 }}>
                      <span className="client_label">Aasaan ERP Work</span>
                      <span className="client_label_value">{c.work}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="column_alignment" style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <img
                className="client_section_img"
                src={getAssetUrl(activeClient.img)}
                onError={(e) => handleImageError(e, activeClient.fallback)}
                alt={activeClient.name}
                style={{ display: 'block' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* CTA BANNER                                                   */}
      {/* ============================================================ */}
      <div style={{ background: 'linear-gradient(135deg, #1e95d3 0%, #0d6ea0 60%, #212121 100%)', padding: '52px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '18px' }}>
        <span style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '12px', fontWeight: 700, padding: '4px 14px', borderRadius: '20px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Limited Demo Slots Available
        </span>
        <h2 style={{ color: '#ffffff', fontSize: '30px', fontWeight: 800, margin: 0, lineHeight: 1.3, maxWidth: '640px' }}>
          Ready to Transform Your Business?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '16px', margin: 0, maxWidth: '520px', lineHeight: 1.6 }}>
          See Aasaan ERP in action — live, personalised, and built around your workflows. No commitment required.
        </p>
        <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '8px' }}>
          <button
            onClick={onOpenDemo}
            style={{ background: '#ffffff', color: 'var(--colorAccent)', border: 'none', borderRadius: '8px', padding: '14px 32px', fontSize: '16px', fontWeight: 800, cursor: 'pointer', boxShadow: '0 4px 16px rgba(0,0,0,0.15)', transition: 'all 0.2s ease' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#f0f9ff'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Book a Free Demo →
          </button>
          <a
            href="https://wa.me/917428267616?text=Hi%2C%20I%20want%20to%20book%20a%20demo%20of%20Aasaan%20ERP"
            target="_blank"
            rel="noopener noreferrer"
            style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.35)', borderRadius: '8px', padding: '14px 28px', fontSize: '15px', fontWeight: 600, textDecoration: 'none', transition: 'all 0.2s ease', display: 'flex', alignItems: 'center', gap: '8px' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
          >
            <i className="fab fa-whatsapp" style={{ fontSize: '18px' }}></i> Chat with Us
          </a>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 5. ALL-IN-ONE CLOUD ERP                                      */}
      {/* ============================================================ */}
      <div className="column_alignment section_wrapper instant_go_live_section" style={{ background: '#FFFFFF' }}>
        <div className="column_alignment main_content align_self_center" style={{ textAlign: 'center' }}>
          <h2 className="page_heading" style={{ maxWidth: '750px', alignSelf: 'center', marginBottom: '12px' }}>
            <b>All-in-One Cloud</b> ERP Software for Seamless Business Growth
          </h2>
          <span style={{ maxWidth: '700px', textAlign: 'center', alignSelf: 'center', fontSize: '15px', color: '#5f5f5f', lineHeight: 1.6, marginBottom: '24px' }}>
            Unlock best-in-class, industry-specific solutions designed to adapt and scale with your business—customizable, powerful, and built for success.
          </span>

          <div className="row_column_alignment two" style={{ margin: '16px 0', gap: '24px', justifyContent: 'center' }}>
            <div className="column_alignment" style={{ flex: 1, alignItems: 'center' }}>
              <img
                src={getAssetUrl('images/implementation_img.jpg')}
                onError={(e) => handleImageError(e, 'https://www.aasaanerp.com/static/main/images/implementation_img.jpg')}
                alt="Implementation and Architecture"
                style={{ width: '95%', maxWidth: '540px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)', borderRadius: '8px' }}
              />
            </div>
            <div className="column_alignment" style={{ flex: 1, alignItems: 'center' }}>
              <img
                src={getAssetUrl('images/instant_go_live_img.jpg')}
                onError={(e) => handleImageError(e, 'https://www.aasaanerp.com/static/main/images/instant_go_live_img.jpg')}
                alt="Instant Go Live"
                style={{ width: '95%', maxWidth: '540px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)', borderRadius: '8px' }}
              />
            </div>
          </div>

          <div style={{ marginTop: '24px' }}>
            <button onClick={onOpenDemo} className="accent_button align_self_center" style={{ padding: '14px 32px', fontSize: '16px' }}>
              Schedule Demo
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 6. SEAMLESS INTEGRATION TOOLS                                */}
      {/* ============================================================ */}
      <div className="column_alignment section_wrapper" style={{ background: '#f8f9fa' }}>
        <div className="column_alignment main_content align_self_center">
          <h2 className="page_heading" style={{ maxWidth: '700px', alignSelf: 'center', marginBottom: '8px' }}>
            <b style={{ fontWeight: 600 }}>Seamless Integration with Your</b><br />Existing Tools
          </h2>
          <span style={{ maxWidth: '540px', textAlign: 'center', alignSelf: 'center', fontSize: '15px', color: '#5f5f5f', lineHeight: 1.5, marginBottom: '32px' }}>
            Connects effortlessly with the software you already use — so your data flows freely, and your team works smarter.
          </span>

          <div className="row_alignment" style={{ gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div className="integration_tools_tabs_wrapper">
              {toolCategories.map((t, idx) => (
                <span key={idx} onClick={() => setToolTab(idx)} className={toolTab === idx ? 'active' : ''}>
                  {t.name}
                </span>
              ))}
            </div>
            <div className="column_alignment fill">
              <div className="integration_tools_logo_wrapper">
                {Array.from({ length: currentToolCategory.count }, (_, i) => i + 1).map((num) => (
                  <img
                    key={num}
                    src={getAssetUrl(`tools/${currentToolCategory.dir}/logo_${num}.png`)}
                    onError={(e) => { e.currentTarget.src = `https://www.aasaanerp.com/static/main/images/tools/${currentToolCategory.dir}/logo_${num}.png`; }}
                    alt={`${currentToolCategory.name} Logo ${num}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* FLOATING BUTTONS                                             */}
      {/* ============================================================ */}
      <div style={{ position: 'fixed', bottom: '24px', right: '20px', display: 'flex', flexDirection: 'column', gap: '10px', zIndex: 9000, alignItems: 'flex-end' }}>
        {/* Back to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          title="Back to top"
          style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#ffffff', border: '2px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.12)', cursor: 'pointer', color: '#1e95d3', transition: 'all 0.2s ease' }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#1e95d3'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.border = '2px solid #1e95d3'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.color = '#1e95d3'; e.currentTarget.style.border = '2px solid #e2e8f0'; }}
        >
          <i className="fas fa-chevron-up" style={{ fontSize: '14px' }}></i>
        </button>

        {/* WhatsApp */}
        <a
          href="https://wa.me/917428267616?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Aasaan%20ERP"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px 10px 12px', borderRadius: '28px', background: '#25D366', boxShadow: '0 4px 16px rgba(37,211,102,0.45)', textDecoration: 'none', transition: 'transform 0.2s ease, box-shadow 0.2s ease', color: '#fff', fontWeight: 600, fontSize: '13.5px' }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,211,102,0.6)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(37,211,102,0.45)'; }}
        >
          <i className="fab fa-whatsapp" style={{ fontSize: '22px' }}></i>
          <span>WhatsApp Us</span>
        </a>

        {/* Book Demo */}
        <button
          onClick={onOpenDemo}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px 10px 12px', borderRadius: '28px', background: 'var(--colorAccent)', border: 'none', boxShadow: '0 4px 16px rgba(30,149,211,0.4)', cursor: 'pointer', transition: 'transform 0.2s ease, box-shadow 0.2s ease', color: '#fff', fontWeight: 600, fontSize: '13.5px' }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(30,149,211,0.6)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(30,149,211,0.4)'; }}
        >
          <i className="fas fa-calendar-check" style={{ fontSize: '18px' }}></i>
          <span>Book a Demo</span>
        </button>
      </div>

    </div>
  );
}
