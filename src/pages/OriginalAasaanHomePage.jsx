import React, { useState } from 'react';
import { getAssetUrl, handleImageError } from '../utils/assetHelper';

export default function OriginalAasaanHomePage({ onOpenDemo, onNavigate }) {
  // Why Aasaan Tabs (0: Effortless to Use, 1: Your Business Anywhere, 2: Proven. Powerful. Trusted.)
  const [whyTab, setWhyTab] = useState(0);

  // Client Tabs (0 to 4)
  const [clientTab, setClientTab] = useState(0);

  // Integration Tool Tabs (0 to 9)
  const [toolTab, setToolTab] = useState(0);

  const clients = [
    {
      id: 0,
      name: 'Tadweeer',
      industry: 'Recycling & Waste Management',
      work: 'Recycling operations management.',
      img: 'media/Taqdweer_11.png',
      fallback: 'https://www.aasaanerp.com/media/solutions/Taqdweer_11.png'
    },
    {
      id: 1,
      name: 'Resustainability',
      industry: 'Environmental Services & Sustainability Solutions',
      work: 'Sustainability project tracking',
      img: 'media/Resustainability_11.png',
      fallback: 'https://www.aasaanerp.com/media/solutions/Resustainability_11.png'
    },
    {
      id: 2,
      name: 'Galaxy Tools',
      industry: 'Industrial Tools & Equipment Manufacturing',
      work: 'Production and inventory',
      img: 'media/Galaxy_Tools1_MYqjHU9.png',
      fallback: 'https://www.aasaanerp.com/media/solutions/Galaxy_Tools1_MYqjHU9.png'
    },
    {
      id: 3,
      name: 'Shofu Dental',
      industry: 'Dental Products & Medical Equipment',
      work: 'Stock and order management',
      img: 'media/Shofu_Dental_1.png',
      fallback: 'https://www.aasaanerp.com/media/solutions/Shofu_Dental_1.png'
    },
    {
      id: 4,
      name: 'Miranay Trading and Investment',
      industry: 'Trading & Investment Services',
      work: 'Financial operations management',
      img: 'media/Miranay_Trading_and_Investment_11.png',
      fallback: 'https://www.aasaanerp.com/media/solutions/Miranay_Trading_and_Investment_11.png'
    }
  ];

  const modules = [
    {
      name: 'Financial Management',
      desc: 'A full suite of accounting functions and reporting tools, to meet the needs of growing companies.',
      img: 'media/Group_1281.png',
      fallback: 'https://www.aasaanerp.com/media/solutions/Group_1281.png'
    },
    {
      name: 'Stock Control',
      desc: 'Effortlessly manage inventory with AASAAN ERP’s smart Stock Control module.',
      img: 'media/Group_1282.png',
      fallback: 'https://www.aasaanerp.com/media/solutions/Group_1282.png'
    },
    {
      name: 'CRM',
      desc: 'Seamlessly manage leads, track customer interactions, and boost sales conversions.',
      img: 'media/Group_1283.png',
      fallback: 'https://www.aasaanerp.com/media/solutions/Group_1283.png'
    },
    {
      name: 'Purchasing',
      desc: "Streamline vendor management and optimize procurement with Aasaan ERP's smart Purchasing module.",
      img: 'media/Group_1287.png',
      fallback: 'https://www.aasaanerp.com/media/solutions/Group_1287.png'
    },
    {
      name: 'Sales',
      desc: 'Effortlessly manage your entire sales cycle with AASAAN ERP – from lead to deal!',
      img: 'media/Group_1284.png',
      fallback: 'https://www.aasaanerp.com/media/solutions/Group_1284.png'
    },
    {
      name: 'Service',
      desc: "Streamline your operations and elevate customer satisfaction with AASAAN ERP's smart Service module.",
      img: 'media/Group_1285.png',
      fallback: 'https://www.aasaanerp.com/media/solutions/Group_1285.png'
    },
    {
      name: 'Reporting',
      desc: 'Comprehensive, real-time insights at your fingertips with AASAAN ERP Reporting.',
      img: 'media/Group_1286.png',
      fallback: 'https://www.aasaanerp.com/media/solutions/Group_1286.png'
    },
    {
      name: 'Manufacturing',
      desc: "Streamline your production process with AASAAN ERP's intelligent Manufacturing module.",
      img: 'media/Group_1288.png',
      fallback: 'https://www.aasaanerp.com/media/solutions/Group_1288.png'
    },
    {
      name: 'Waste Management',
      desc: 'AWM is tailored for businesses in the waste management sector, offering comprehensive tools for inventory tracking, bin management, and order fulfillment.',
      img: 'media/Waste_Management_pic.png',
      fallback: 'https://www.aasaanerp.com/media/solutions/Waste_Management_pic.png'
    }
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

      {/* ----------------------------------------------------------- */}
      {/* TRUST / STATS BAR                                           */}
      {/* ----------------------------------------------------------- */}
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
          { value: '9', label: 'ERP Modules', icon: 'fas fa-cubes' },
          { value: '10+', label: 'Years of Innovation', icon: 'fas fa-award' },
          { value: '24/7', label: 'Expert Support', icon: 'fas fa-headset' },
        ].map((stat, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <i className={stat.icon} style={{ fontSize: '18px', color: 'rgba(255,255,255,0.75)' }}></i>
            <span style={{ fontSize: '22px', fontWeight: 800, color: '#fff' }}>{stat.value}</span>
            <span style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>{stat.label}</span>
            {i < 3 && <span style={{ color: 'rgba(255,255,255,0.35)', marginLeft: '8px' }}>|</span>}
          </div>
        ))}
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 1. HERO HEADER VIDEO / BANNER                                 */}
      {/* ------------------------------------------------------------- */}
      <div className="column_alignment" style={{ background: '#f8f9fa' }}>
        
        {/* Video / Banner Container */}
        <div className="column_alignment" style={{ position: 'relative', width: '100%', overflow: 'hidden', minHeight: '380px', background: '#f8f9fa' }}>
          <div
            onClick={onOpenDemo}
            style={{ position: 'relative', zIndex: 2, cursor: 'pointer', width: '100%' }}
          >
            <video
              className="header_video"
              autoPlay
              playsInline
              loop
              muted
              poster={getAssetUrl('images/aasaan_erp_header_desktop.png')}
              style={{ width: '100%', maxHeight: '550px', objectFit: 'cover', display: 'block' }}
            >
              <source src={getAssetUrl('images/aasaan_header_video.mp4')} type="video/mp4" />
              <source src="https://www.aasaanerp.com/static/main/images/aasaan_header_video.mp4" type="video/mp4" />
              <img
                src={getAssetUrl('images/aasaan_erp_header_desktop.png')}
                onError={(e) => handleImageError(e, 'https://www.aasaanerp.com/static/main/images/aasaan_erp_header_desktop.png')}
                alt="Aasaan ERP Header"
                style={{ width: '100%' }}
              />
            </video>
          </div>
        </div>

        {/* Community & Tagline Section */}
        <div className="column_alignment">
          <div
            className="row_column_alignment align_self_center align_center"
            style={{ width: '90%', maxWidth: '850px', padding: '36px 0', gap: '20px' }}
          >
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

          {/* AI-Driven ERP Banner */}
          <div className="main_content align_self_center" style={{ padding: '0 16px', marginBottom: '40px' }}>
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
                    Aasaan ERP is more than software — it’s your intelligent business co-pilot. Powered by AI, driven by your data, and always learning.
                  </span>
                  <ul>
                    <li><b>Smart Recommendations –</b> Get AI-powered insights for pricing, inventory, customer follow-ups & more</li>
                    <li><b>Predictive Automation –</b> Forecast demand, auto-suggest purchase orders, detect anomalies before they happen</li>
                    <li><b>Conversational UI –</b> Use voice or chat to pull reports, assign tasks, or create records — just like messaging a teammate</li>
                    <li><b>Real-Time Decision Support –</b> AI helps you make faster, data-backed decisions across finance, ops, and sales</li>
                    <li><b>Self-optimizing Workflows –</b> The system learns from how your team works and suggests better ways</li>
                    <li style={{ borderBottom: 'none' }}><b>With Aasaan ERP, AI isn’t a buzzword —</b> it’s baked into the DNA of your business operations.</li>
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

        {/* ------------------------------------------------------------- */}
        {/* 2. WHY AASAAN ERP SECTION WITH INTERACTIVE TABS               */}
        {/* ------------------------------------------------------------- */}
        <div className="column_alignment section_wrapper" style={{ background: '#FFFFFF' }}>
          <div className="column_alignment main_content align_self_center">
            
            <h2 className="page_heading">
              Why <b>AASAAN</b><br />ENTERPRISE Resource Planning (ERP)?
            </h2>

            {/* Desktop Tabs */}
            <div className="why_aasaan_tabs_wrapper">
              <span
                onClick={() => setWhyTab(0)}
                className={whyTab === 0 ? 'active' : ''}
              >
                Effortless to Use
              </span>
              <span
                onClick={() => setWhyTab(1)}
                className={whyTab === 1 ? 'active' : ''}
              >
                Your Business, Anywhere
              </span>
              <span
                onClick={() => setWhyTab(2)}
                className={whyTab === 2 ? 'active' : ''}
              >
                Proven. Powerful. Trusted.
              </span>
            </div>

            {/* Tab 0 Content */}
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

            {/* Tab 1 Content */}
            {whyTab === 1 && (
              <div className="column_alignment why_aasaan_tab_content active">
                <div className="row_column_alignment two" style={{ alignItems: 'center', gap: '30px' }}>
                  <div className="column_alignment align_self_center" style={{ flex: 1, padding: '0 16px' }}>
                    <span style={{ fontSize: '18px', fontWeight: 600, color: '#212121', marginBottom: '16px' }}>
                      Whether you’re in the office, on-site, or halfway across the world — your ERP moves with you.
                    </span>
                    <div style={{ color: '#495057', fontSize: '15px', lineHeight: 1.7 }}>
                      <p>🌐 <b>100% cloud-native</b> – No setup, no server hassles</p>
                      <p>📱 <b>Mobile-first</b> – Works beautifully across devices</p>
                      <p>🔐 <b>Secure & scalable</b> – Enterprise-grade protection, startup-friendly speed</p>
                      <p>🔄 <b>Real-time sync</b> – Everyone stays updated, always</p>
                      <p>🔌 <b>Connect your stack</b> – Plug into WhatsApp, Razorpay, Tally & more</p>
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

            {/* Tab 2 Content */}
            {whyTab === 2 && (
              <div className="column_alignment why_aasaan_tab_content active">
                <div className="row_column_alignment two" style={{ alignItems: 'center', gap: '30px' }}>
                  <div className="column_alignment align_self_center" style={{ flex: 1, padding: '0 16px' }}>
                    <span style={{ fontSize: '18px', fontWeight: 600, color: '#212121', marginBottom: '16px' }}>
                      Aasaan ERP isn’t just another tool — it’s the backbone of 100+ businesses and counting.
                    </span>
                    <div style={{ color: '#495057', fontSize: '15px', lineHeight: 1.7 }}>
                      <p>🏢 <b>Trusted by real businesses</b> – Across retail, waste mgmt, manufacturing & more</p>
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

        {/* ------------------------------------------------------------- */}
        {/* 3. MODULES OF AASAAN ERP SECTION                              */}
        {/* ------------------------------------------------------------- */}
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
                  onClick={onOpenDemo}
                >
                  <img
                    src={getAssetUrl(m.img)}
                    onError={(e) => handleImageError(e, m.fallback)}
                    alt={m.name}
                  />
                  <div className="content column_alignment align_center">
                    <span>{m.name}</span>
                    <p>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 4. OUR CLIENTS SECTION                                        */}
        {/* ------------------------------------------------------------- */}
        <div className="column_alignment section_wrapper" style={{ background: 'rgba(211,234,245,0.3)' }}>
          <div className="column_alignment main_content align_self_center">
            
            <span className="page_heading" style={{ alignSelf: 'flex-start', textAlign: 'left', marginBottom: '8px' }}>
              <b>OUR CLIENTS</b>
            </span>
            <span
              style={{
                alignSelf: 'flex-start',
                textAlign: 'left',
                fontSize: '16px',
                color: '#5f5f5f',
                maxWidth: '750px',
                marginBottom: '30px',
                lineHeight: 1.5
              }}
            >
              The reason Aasaan has been the world’s fastest-growing Cloud ERP company for 10 years and counting – we put our customers first.
            </span>

            <div className="row_column_alignment two" style={{ gap: '30px', alignItems: 'center' }}>
              
              {/* Left Column: Client Selector List */}
              <div className="column_alignment" style={{ flex: 1 }}>
                {clients.map((c, idx) => (
                  <div
                    key={c.id}
                    className={`column_alignment client_section_item_wrapper ${clientTab === idx ? 'active' : ''}`}
                    onClick={() => setClientTab(idx)}
                  >
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

              {/* Right Column: Active Client Showcase Image */}
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

        {/* ------------------------------------------------------------- */}
        {/* 5. ALL-IN-ONE CLOUD ERP / INSTANT GO LIVE SECTION            */}
        {/* ------------------------------------------------------------- */}
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
              <button
                onClick={onOpenDemo}
                className="accent_button align_self_center"
                style={{ padding: '14px 32px', fontSize: '16px' }}
              >
                Schedule Demo
              </button>
            </div>

          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 6. SEAMLESS INTEGRATION WITH YOUR EXISTING TOOLS              */}
        {/* ------------------------------------------------------------- */}
        <div className="column_alignment section_wrapper" style={{ background: '#f8f9fa' }}>
          <div className="column_alignment main_content align_self_center">
            
            <h2 className="page_heading" style={{ maxWidth: '700px', alignSelf: 'center', marginBottom: '8px' }}>
              <b style={{ fontWeight: 600 }}>Seamless Integration with Your</b><br />Existing Tools
            </h2>
            <span style={{ maxWidth: '540px', textAlign: 'center', alignSelf: 'center', fontSize: '15px', color: '#5f5f5f', lineHeight: 1.5, marginBottom: '32px' }}>
              Connects effortlessly with the software you already use — so your data flows freely, and your team works smarter.
            </span>

            <div className="row_alignment" style={{ gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              
              {/* Category Tabs on Left */}
              <div className="integration_tools_tabs_wrapper">
                {toolCategories.map((t, idx) => (
                  <span
                    key={idx}
                    onClick={() => setToolTab(idx)}
                    className={toolTab === idx ? 'active' : ''}
                  >
                    {t.name}
                  </span>
                ))}
              </div>

              {/* Logo Grid on Right */}
              <div className="column_alignment fill">
                <div className="integration_tools_logo_wrapper">
                  {Array.from({ length: currentToolCategory.count }, (_, i) => i + 1).map((num) => (
                    <img
                      key={num}
                      src={getAssetUrl(`tools/${currentToolCategory.dir}/logo_${num}.png`)}
                      onError={(e) => {
                        e.currentTarget.src = `https://www.aasaanerp.com/static/main/images/tools/${currentToolCategory.dir}/logo_${num}.png`;
                      }}
                      alt={`${currentToolCategory.name} Logo ${num}`}
                    />
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* ----------------------------------------------------------- */}
      {/* FLOATING BUTTONS: WhatsApp + Demo CTA + Back to Top         */}
      {/* ----------------------------------------------------------- */}
      <div style={{
        position: 'fixed',
        bottom: '24px',
        right: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        zIndex: 9000,
        alignItems: 'flex-end'
      }}>
        {/* Back to Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          title="Back to top"
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: '#ffffff',
            border: '2px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 10px rgba(0,0,0,0.12)',
            cursor: 'pointer',
            color: '#1e95d3',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#1e95d3'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.border = '2px solid #1e95d3'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.color = '#1e95d3'; e.currentTarget.style.border = '2px solid #e2e8f0'; }}
        >
          <i className="fas fa-chevron-up" style={{ fontSize: '14px' }}></i>
        </button>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/917428267616?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Aasaan%20ERP"
          target="_blank"
          rel="noopener noreferrer"
          title="Chat on WhatsApp"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 16px 10px 12px',
            borderRadius: '28px',
            background: '#25D366',
            boxShadow: '0 4px 16px rgba(37, 211, 102, 0.45)',
            textDecoration: 'none',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            color: '#fff',
            fontWeight: 600,
            fontSize: '13.5px'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,211,102,0.6)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(37,211,102,0.45)'; }}
        >
          <i className="fab fa-whatsapp" style={{ fontSize: '22px' }}></i>
          <span>WhatsApp Us</span>
        </a>

        {/* Schedule Demo Button */}
        <button
          onClick={onOpenDemo}
          title="Schedule a Demo"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 16px 10px 12px',
            borderRadius: '28px',
            background: 'var(--colorAccent2)',
            border: 'none',
            boxShadow: '0 4px 16px rgba(255, 91, 11, 0.4)',
            cursor: 'pointer',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            color: '#fff',
            fontWeight: 600,
            fontSize: '13.5px'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(255,91,11,0.6)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(255,91,11,0.4)'; }}
        >
          <i className="fas fa-calendar-check" style={{ fontSize: '18px' }}></i>
          <span>Book a Demo</span>
        </button>
      </div>

    </div>
  );
}
