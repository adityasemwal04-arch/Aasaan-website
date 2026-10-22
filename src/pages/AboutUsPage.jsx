import React, { useEffect, useState } from 'react';
import {
  Sparkles,
  ShieldCheck,
  Award,
  Globe,
  Users,
  Target,
  Compass,
  Zap,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  MapPin,
  TrendingUp,
  HeartHandshake,
  Cpu,
  Layers,
  Building2,
  Lock,
  Server,
  Cloud,
  Check,
  X as CloseIcon,
  ChevronDown,
  ChevronUp,
  FileCheck,
  Clock,
  Mail
} from 'lucide-react';
import { getAssetUrl, handleImageError } from '../utils/assetHelper';

export default function AboutUsPage({ onOpenDemo }) {
  const [activeTab, setActiveTab] = useState('comparison'); // 'comparison' | 'tech'
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleFaq = (idx) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  const milestones = [
    {
      year: '2015',
      title: 'Foundation & Core Vision',
      desc: 'Founded in New Delhi by enterprise software veterans with one fundamental objective: dismantle the multi-million-dollar, bloated legacy ERP model and build intuitive business management software that anyone can master.'
    },
    {
      year: '2017',
      title: 'Indian GST Revolution',
      desc: 'Pioneered zero-touch GST e-invoicing, e-Way bills, and multi-state tax reconciliation engines, enabling over 2,000+ Indian manufacturers to navigate the GST transition with zero operational disruption.'
    },
    {
      year: '2018',
      title: 'Global & Middle East Expansion',
      desc: 'Extended operations to the UAE and Middle East. Engineered multi-currency consolidation, GCC VAT compliance, and multi-branch warehouse distribution capabilities.'
    },
    {
      year: '2020',
      title: 'AWM Waste Management Flagship',
      desc: 'Launched AWM (Aasaan Waste Management ERP) — pioneering automated weighbridge gross/tare capture, GPS fleet tracking, and CPCB regulatory compliance for municipal and hazardous waste operators.'
    },
    {
      year: '2022',
      title: 'Cloud-Native Architecture',
      desc: 'Re-engineered the entire technology stack onto AWS cloud microservices, delivering sub-second reporting across millions of records, bank-grade encryption, and native mobile companion apps.'
    },
    {
      year: '2024',
      title: 'AI-Native ERP & ERP Lite',
      desc: 'Introduced AI-driven predictive stock replenishment, automated shop-floor telemetry, and the agile Aasaan ERP Lite suite for fast-growing SMEs with 7-day instant go-live.'
    },
    {
      year: '2026',
      title: 'Agentic AI',
      desc: 'Launched next-generation Agentic AI capabilities — autonomous ERP agents that proactively detect anomalies, trigger approvals, generate reports, and operate workflows with minimal human intervention.'
    }
  ];

  const coreValues = [
    {
      icon: Target,
      color: '#1e95d3',
      title: 'Simplicity by Design',
      desc: 'The Hindi word "Aasaan" means simple. If a warehouse operator or billing clerk cannot learn a module in 30 minutes, it is too complex. We strip out unnecessary jargon and streamline every keystroke.'
    },
    {
      icon: HeartHandshake,
      color: '#ff5b0b',
      title: 'Relentless Customer Advocacy',
      desc: 'We do not operate as a distant software vendor. We act as an extension of your internal operations team. Over 85% of our R&D roadmap is directly influenced by real-world customer feature requests.'
    },
    {
      icon: ShieldCheck,
      color: '#059669',
      title: 'Uncompromising Trust & Compliance',
      desc: 'Your financial and operational data is protected by bank-grade 256-bit AES encryption at rest and in transit. Built-in Indian GST, CPCB, and ISO compliance standards safeguard your statutory requirements.'
    },
    {
      icon: Cpu,
      color: '#7c3aed',
      title: 'Agile & Open Architecture',
      desc: 'Zero proprietary lock-in. Our open RESTful APIs, webhook ecosystem, and modular architecture ensure Aasaan ERP integrates seamlessly with your IoT weighbridges, ecommerce portals, and banking APIs.'
    }
  ];

  const industries = [
    { name: 'Precision Manufacturing', metric: '420+ Plants' },
    { name: 'Waste & Recycling (AWM)', metric: '180+ Facilities' },
    { name: 'Wholesale & 3PL Logistics', metric: '310+ Warehouses' },
    { name: 'Omnichannel Retail Chains', metric: '250+ Stores' },
    { name: 'Food, Dairy & Agriculture', metric: '90+ Depots' },
    { name: 'Chemicals, Oil & Energy', metric: '60+ Sites' }
  ];

  const aboutFaqs = [
    {
      q: "How long has Aasaan Services Solutions been in operation?",
      a: "Aasaan Services Solutions Private Limited was incorporated in 2015 and has been serving enterprise clients for over 10+ continuous years. Over the decade, we have expanded to serve over 5,000+ active deployments across 20+ countries including India, the UAE, the US, and the UK."
    },
    {
      q: "Where is our business data hosted, and how secure is it?",
      a: "All client data is hosted on enterprise-grade AWS Cloud data centers with multi-Availability Zone (AZ) redundancy, automated daily snapshots, and bank-grade 256-bit AES encryption at rest and in transit. We maintain 99.98% high-availability uptime and strict role-based audit logs."
    },
    {
      q: "Does Aasaan support multi-company, multi-GSTIN consolidation?",
      a: "Yes, natively. Aasaan ERP allows large enterprise groups to operate multiple legal entities, branch offices, and separate GSTIN registrations under one unified login, generating both entity-specific ledgers and group consolidated balance sheets with a single click."
    },
    {
      q: "Can we integrate Aasaan with our existing hardware and 3rd party tools?",
      a: "Absolutely. Aasaan provides a fully documented RESTful OpenAPI suite that connects with IoT weighbridges (RS232/IP), barcode label printers, biometric attendance devices, banking APIs, payment gateways, and ecommerce platforms (Shopify, WooCommerce, Amazon)."
    }
  ];

  return (
    <div className="about-page-wrapper" style={{ background: '#f8f9fa', minHeight: '100vh', paddingBottom: '0' }}>
      
      {/* ======================================================== */}
      {/* 1. HERO SECTION WITH GRADIENT MESH                       */}
      {/* ======================================================== */}
      <section style={{
        background: 'linear-gradient(135deg, #0b1e36 0%, #102a45 50%, #1e95d3 100%)',
        color: '#FFFFFF',
        padding: '85px 20px 75px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Ambient glow */}
        <div style={{
          position: 'absolute',
          top: '-15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '750px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(30,149,211,0.25) 0%, rgba(11,30,54,0) 70%)',
          pointerEvents: 'none'
        }} />

        <div style={{ maxWidth: '960px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 255, 255, 0.12)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            padding: '6px 20px',
            borderRadius: '999px',
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.04em',
            color: '#FFFFFF',
            marginBottom: '24px'
          }}>
            <Sparkles size={14} color="#ffbe3d" />
            <span>OUR STORY • OVER A DECADE OF ENTERPRISE INNOVATION (2015 – 2026)</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(32px, 4.8vw, 50px)',
            fontWeight: 900,
            lineHeight: 1.2,
            marginBottom: '22px',
            letterSpacing: '-0.02em',
            color: '#FFFFFF'
          }}>
            Making Enterprise Software Genuinely <span style={{ color: '#38BDF8' }}>Simple, Resilient & Accessible</span>
          </h1>

          <p style={{
            fontSize: '17.5px',
            lineHeight: 1.8,
            color: 'rgba(255, 255, 255, 0.92)',
            maxWidth: '840px',
            margin: '0 auto 36px'
          }}>
            Founded on the conviction that running an enterprise shouldn’t require expensive consultants, cryptic user interfaces, or endless delays. We engineer cloud ERP that combines enterprise muscle with everyday simplicity.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px' }}>
            <button
              onClick={onOpenDemo}
              style={{
                background: '#ff5b0b',
                color: '#FFFFFF',
                border: 'none',
                padding: '14px 36px',
                fontSize: '15.5px',
                fontWeight: 800,
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 8px 24px rgba(255, 91, 11, 0.35)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.background = '#e04a00';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = '#ff5b0b';
              }}
            >
              Experience Aasaan ERP <ArrowRight size={18} />
            </button>

            <a
              href="tel:+917428267616"
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                padding: '14px 28px',
                fontSize: '15px',
                fontWeight: 700,
                borderRadius: '8px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)')}
            >
              <PhoneCall size={16} /> Contact Team: +91 74282 67616
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. PROVEN IMPACT STATS STRIP                             */}
      {/* ======================================================== */}
      <section style={{
        marginTop: '-35px',
        padding: '0 20px',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{
          maxWidth: '1150px',
          margin: '0 auto',
          background: '#FFFFFF',
          borderRadius: '18px',
          padding: '30px 24px',
          boxShadow: '0 12px 36px rgba(0, 0, 0, 0.08)',
          border: '1px solid #E2E8F0',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
          gap: '24px',
          textAlign: 'center'
        }}>
          <div>
            <div style={{ fontSize: '36px', fontWeight: 900, color: 'var(--primary-blue)', marginBottom: '4px' }}>10+</div>
            <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#1E293B', marginBottom: '2px' }}>Years of Experience</div>
            <div style={{ fontSize: '12px', color: '#64748B' }}>Founded in 2015</div>
          </div>
          <div>
            <div style={{ fontSize: '36px', fontWeight: 900, color: 'var(--primary-blue)', marginBottom: '4px' }}>20+</div>
            <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#1E293B', marginBottom: '2px' }}>Global Regions</div>
            <div style={{ fontSize: '12px', color: '#64748B' }}>India, UAE, US & Beyond</div>
          </div>
          <div>
            <div style={{ fontSize: '36px', fontWeight: 900, color: 'var(--primary-blue)', marginBottom: '4px' }}>5,000+</div>
            <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#1E293B', marginBottom: '2px' }}>Active Deployments</div>
            <div style={{ fontSize: '12px', color: '#64748B' }}>SMEs to Large Enterprises</div>
          </div>
          <div>
            <div style={{ fontSize: '36px', fontWeight: 900, color: '#059669', marginBottom: '4px' }}>98.5%</div>
            <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#1E293B', marginBottom: '2px' }}>Client Retention</div>
            <div style={{ fontSize: '12px', color: '#64748B' }}>Unmatched Support Record</div>
          </div>
          <div>
            <div style={{ fontSize: '36px', fontWeight: 900, color: '#ff5b0b', marginBottom: '4px' }}>85%</div>
            <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#1E293B', marginBottom: '2px' }}>R&D Focus</div>
            <div style={{ fontSize: '12px', color: '#64748B' }}>Customer-Driven Features</div>
          </div>
          <div>
            <div style={{ fontSize: '36px', fontWeight: 900, color: '#7c3aed', marginBottom: '4px' }}>99.98%</div>
            <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#1E293B', marginBottom: '2px' }}>High-Availability Uptime</div>
            <div style={{ fontSize: '12px', color: '#64748B' }}>Multi-AZ AWS Architecture</div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. ABOUT OUR PHILOSOPHY & HEAD BANNER                     */}
      {/* ======================================================== */}
      <section style={{ padding: '80px 20px 60px' }}>
        <div style={{ maxWidth: '1150px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '50px'
          }}>
            <div style={{ flex: '1 1 500px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--primary-blue)',
                background: '#EFF6FF',
                padding: '4px 12px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '14px'
              }}>
                <Award size={14} /> The Aasaan Philosophy
              </div>

              <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 38px)', fontWeight: 900, color: '#0F172A', marginBottom: '18px', lineHeight: 1.25 }}>
                We Build Software for the People Who Actually Run the Business.
              </h2>

              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#475569', marginBottom: '16px' }}>
                Most legacy enterprise ERPs were built thirty years ago for financial accountants and IT administrators. On actual factory floors, dispatch docks, and retail counters, employees find them frustratingly slow, unintuitive, and convoluted.
              </p>

              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#475569', marginBottom: '20px' }}>
                At <strong>Aasaan ERP</strong>, our design philosophy begins where real work happens. We believe that true digital transformation isn’t about flashy slide decks or bloated consulting contracts — it’s about providing warehouse staff, procurement managers, plant supervisors, and CFOs with a fast, reliable, beautiful interface that works without hiccups.
              </p>

              <div style={{
                background: '#F8FAFC',
                borderLeft: '4px solid var(--primary-blue)',
                padding: '16px 20px',
                borderRadius: '0 12px 12px 0',
                marginBottom: '24px'
              }}>
                <p style={{ margin: 0, fontSize: '15px', fontStyle: 'italic', color: '#1E293B', fontWeight: 600 }}>
                  "If your employees have to fight their software just to dispatch an invoice or log raw material consumption, the software has failed. We make ERP genuinely simple."
                </p>
              </div>

              <button
                onClick={onOpenDemo}
                style={{
                  background: 'var(--primary-blue)',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '12px 28px',
                  fontSize: '14.5px',
                  fontWeight: 700,
                  borderRadius: '8px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#007bb5')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--primary-blue)')}
              >
                Schedule Architecture Walkthrough <ArrowRight size={16} />
              </button>
            </div>

            <div style={{ flex: '1 1 480px', display: 'flex', justifyContent: 'center' }}>
              <div style={{ position: 'relative', width: '100%', maxWidth: '520px' }}>
                <img
                  src={getAssetUrl('images/about_page_head_img.jpg')}
                  alt="Aasaan ERP Engineering & Support Team"
                  onError={(e) => handleImageError(e, 'https://www.aasaanerp.com/static/main/images/about_page_head_img.jpg')}
                  style={{
                    width: '100%',
                    borderRadius: '20px',
                    boxShadow: '0 20px 45px rgba(0,0,0,0.12)',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '-15px',
                  right: '20px',
                  background: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '12px 20px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  border: '1px solid #E2E8F0'
                }}>
                  <Building2 size={24} color="var(--primary-blue)" />
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 800, color: '#0F172A' }}>Headquarters: New Delhi</div>
                    <div style={{ fontSize: '11.5px', color: '#64748B' }}>17A/35, Fourth Floor, West Punjabi Bagh, New Delhi 110026</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. MISSION & VISION EXECUTIVE CARDS                      */}
      {/* ======================================================== */}
      <section style={{ padding: '60px 20px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1150px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', fontWeight: 900, color: '#0F172A', marginBottom: '12px' }}>
              Our Guiding Purpose & Future Vision
            </h2>
            <p style={{ fontSize: '16px', color: '#64748B', maxWidth: '650px', margin: '0 auto' }}>
              Rooted in customer empowerment, transparent pricing, and continuous engineering excellence.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}>
            {/* Vision Card */}
            <div style={{
              background: 'linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%)',
              borderRadius: '20px',
              padding: '36px 32px',
              border: '1px solid #BFDBFE',
              boxShadow: '0 8px 25px rgba(30, 149, 211, 0.08)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'var(--primary-blue)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <Compass size={24} />
              </div>

              <div style={{ fontSize: '12px', fontWeight: 800, color: 'var(--primary-blue)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
                Long-Term Horizon
              </div>

              <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#0F172A', marginBottom: '16px' }}>
                Our Vision
              </h3>

              <p style={{ fontSize: '15.5px', lineHeight: 1.8, color: '#334155', flex: 1 }}>
                To revolutionize how businesses across the globe manage their operations by making enterprise-grade software accessible, adaptable, and effortless. We envision a future where managing high-volume supply chains, multi-entity accounting, and statutory compliance requires zero manual friction — because running your business should truly be <strong>Aasaan</strong>.
              </p>

              <div style={{ borderTop: '1px solid rgba(191, 219, 254, 0.6)', paddingTop: '16px', marginTop: '20px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 700, color: 'var(--primary-blue)' }}>
                <CheckCircle2 size={16} /> Accessible • Adaptable • Effortless
              </div>
            </div>

            {/* Mission Card */}
            <div style={{
              background: 'linear-gradient(135deg, #F8FAFC 0%, #FFF7ED 100%)',
              borderRadius: '20px',
              padding: '36px 32px',
              border: '1px solid #FED7AA',
              boxShadow: '0 8px 25px rgba(255, 91, 11, 0.08)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: '#ff5b0b',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <Target size={24} />
              </div>

              <div style={{ fontSize: '12px', fontWeight: 800, color: '#ff5b0b', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
                Everyday Execution
              </div>

              <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#0F172A', marginBottom: '16px' }}>
                Our Mission
              </h3>

              <p style={{ fontSize: '15.5px', lineHeight: 1.8, color: '#334155', flex: 1 }}>
                To design and deliver a lightning-fast, user-centric ERP ecosystem that simplifies complex operational processes without compromising on depth. With over 85% of our resources dedicated to engineering and customer-led R&D, we commit to long-term partnerships, 7-day rapid deployments, and personalized, high-touch support that helps our clients outperform their competitors.
              </p>

              <div style={{ borderTop: '1px solid rgba(254, 215, 170, 0.6)', paddingTop: '16px', marginTop: '20px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 700, color: '#ff5b0b' }}>
                <CheckCircle2 size={16} /> Rapid Deployment • R&D Driven • Customer First
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. AASAAN VS LEGACY SYSTEMS COMPARISON MATRIX            */}
      {/* ======================================================== */}
      <section style={{ padding: '80px 20px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1150px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: '#EFF6FF',
              color: 'var(--primary-blue)',
              padding: '6px 16px',
              borderRadius: '20px',
              fontSize: '12.5px',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              marginBottom: '12px'
            }}>
              <Zap size={14} /> Clear Competitive Advantage
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 38px)', fontWeight: 900, color: '#0F172A', marginBottom: '14px' }}>
              Why Modern Enterprises Choose Aasaan ERP
            </h2>
            <p style={{ fontSize: '16px', color: '#64748B', maxWidth: '680px', margin: '0 auto' }}>
              Compare how Aasaan stacks up against outdated legacy monoliths and entry-level accounting tools.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
            gap: '24px'
          }}>
            {/* Column 1: Legacy Monoliths */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              padding: '30px 24px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
            }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#DC2626', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
                Outdated Approach
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', marginBottom: '14px' }}>
                Heavy Legacy ERPs
              </h3>
              <p style={{ fontSize: '13px', color: '#64748B', marginBottom: '20px', lineHeight: 1.6 }}>
                SAP ECC / Oracle / Legacy On-Premise systems that require massive server rooms and consultants.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: '#475569' }}>
                <div style={{ display: 'flex', gap: '8px' }}><CloseIcon size={16} color="#DC2626" style={{ flexShrink: 0 }} /> <span>6 to 18 months painful deployment</span></div>
                <div style={{ display: 'flex', gap: '8px' }}><CloseIcon size={16} color="#DC2626" style={{ flexShrink: 0 }} /> <span>Crores in consulting & license lock-ins</span></div>
                <div style={{ display: 'flex', gap: '8px' }}><CloseIcon size={16} color="#DC2626" style={{ flexShrink: 0 }} /> <span>Cryptic menus that take months to learn</span></div>
                <div style={{ display: 'flex', gap: '8px' }}><CloseIcon size={16} color="#DC2626" style={{ flexShrink: 0 }} /> <span>Difficult, high-cost version upgrades</span></div>
              </div>
            </div>

            {/* Column 2: Entry-Level Accounting */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              padding: '30px 24px',
              border: '1px solid #E2E8F0',
              boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
            }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#D97706', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
                Basic Tools
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', marginBottom: '14px' }}>
                Desktop Accounting
              </h3>
              <p style={{ fontSize: '13px', color: '#64748B', marginBottom: '20px', lineHeight: 1.6 }}>
                Tally / Busy / Excel spreadsheets designed primarily for bookkeeping, not operations.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: '#475569' }}>
                <div style={{ display: 'flex', gap: '8px' }}><CloseIcon size={16} color="#D97706" style={{ flexShrink: 0 }} /> <span>No real-time shop-floor BOM routing</span></div>
                <div style={{ display: 'flex', gap: '8px' }}><CloseIcon size={16} color="#D97706" style={{ flexShrink: 0 }} /> <span>No automated multi-bin warehouse tracking</span></div>
                <div style={{ display: 'flex', gap: '8px' }}><CloseIcon size={16} color="#D97706" style={{ flexShrink: 0 }} /> <span>Lacks IoT weighbridge & camera integrations</span></div>
                <div style={{ display: 'flex', gap: '8px' }}><CloseIcon size={16} color="#D97706" style={{ flexShrink: 0 }} /> <span>Single-user desktop bottlenecks</span></div>
              </div>
            </div>

            {/* Column 3: The Aasaan Difference (Hero Card) */}
            <div style={{
              background: 'linear-gradient(135deg, #FFFFFF 0%, #F0F9FF 100%)',
              borderRadius: '16px',
              padding: '30px 24px',
              border: '2px solid var(--primary-blue)',
              boxShadow: '0 12px 30px rgba(30, 149, 211, 0.15)',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '-12px',
                right: '20px',
                background: 'var(--primary-blue)',
                color: '#FFFFFF',
                padding: '3px 12px',
                borderRadius: '12px',
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.04em'
              }}>
                MODERN ENTERPRISE STANDARD
              </div>

              <div style={{ fontSize: '12px', fontWeight: 800, color: 'var(--primary-blue)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
                The Right Solution
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', marginBottom: '14px' }}>
                Aasaan Cloud ERP
              </h3>
              <p style={{ fontSize: '13px', color: '#475569', marginBottom: '20px', lineHeight: 1.6 }}>
                Fast, agile, AI-driven cloud ERP with complete Indian statutory compliance and 7-day rollout.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: '#1E293B', fontWeight: 600 }}>
                <div style={{ display: 'flex', gap: '8px' }}><Check size={16} color="var(--primary-blue)" style={{ flexShrink: 0 }} /> <span><strong>Instant 7-Day SME Go-Live</strong></span></div>
                <div style={{ display: 'flex', gap: '8px' }}><Check size={16} color="var(--primary-blue)" style={{ flexShrink: 0 }} /> <span><strong>Zero infrastructure or server hardware cost</strong></span></div>
                <div style={{ display: 'flex', gap: '8px' }}><Check size={16} color="var(--primary-blue)" style={{ flexShrink: 0 }} /> <span><strong>30-minute floor operator learning curve</strong></span></div>
                <div style={{ display: 'flex', gap: '8px' }}><Check size={16} color="var(--primary-blue)" style={{ flexShrink: 0 }} /> <span><strong>Native GST, e-Invoicing, CPCB & Weighbridge hooks</strong></span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. 12-YEAR MILESTONES TIMELINE (2014 – 2026)             */}
      {/* ======================================================== */}
      <section style={{ padding: '80px 20px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1050px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: '#EFF6FF',
              color: 'var(--primary-blue)',
              padding: '6px 16px',
              borderRadius: '20px',
              fontSize: '12.5px',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              marginBottom: '12px'
            }}>
              <TrendingUp size={14} /> A Decade of Innovation
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 38px)', fontWeight: 900, color: '#0F172A', marginBottom: '14px' }}>
              Key Milestones in the Aasaan ERP Journey
            </h2>
            <p style={{ fontSize: '16px', color: '#64748B', maxWidth: '650px', margin: '0 auto' }}>
              From a boutique New Delhi engineering studio to a multi-national platform supporting over 5,000+ enterprise installations.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            {milestones.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: '#F8FAFC',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                  transition: 'all 0.2s ease',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(30, 149, 211, 0.12)';
                  e.currentTarget.style.borderColor = 'var(--primary-blue-border)';
                  e.currentTarget.style.background = '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.03)';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                  e.currentTarget.style.background = '#F8FAFC';
                }}
              >
                <div style={{
                  display: 'inline-block',
                  background: 'var(--primary-blue)',
                  color: '#FFFFFF',
                  fontSize: '13px',
                  fontWeight: 800,
                  padding: '4px 12px',
                  borderRadius: '6px',
                  marginBottom: '14px'
                }}>
                  {item.year}
                </div>

                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', marginBottom: '10px' }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#64748B', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 7. OUR FOUR CORE VALUES                                  */}
      {/* ======================================================== */}
      <section style={{ padding: '80px 20px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1150px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 38px)', fontWeight: 900, color: '#0F172A', marginBottom: '12px' }}>
              The Core Values That Drive Every Line of Code
            </h2>
            <p style={{ fontSize: '16px', color: '#64748B', maxWidth: '650px', margin: '0 auto' }}>
              Our values dictate how we design features, price our services, and support our users.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px'
          }}>
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '16px',
                    padding: '30px 24px',
                    border: '1px solid #E2E8F0',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.06)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: `${val.color}15`,
                    color: val.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px'
                  }}>
                    <Icon size={22} />
                  </div>

                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', marginBottom: '10px' }}>
                    {val.title}
                  </h3>

                  <p style={{ fontSize: '13.5px', lineHeight: 1.7, color: '#64748B', margin: 0 }}>
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 9. TRUSTED WORLDWIDE STRIP WITH BEST SOFTWARE TAG        */}
      {/* ======================================================== */}
      <section style={{
        background: 'linear-gradient(135deg, #EFF6FF 0%, #E0F2FE 100%)',
        padding: '50px 20px',
        borderTop: '1px solid #BAE6FD',
        borderBottom: '1px solid #BAE6FD'
      }}>
        <div style={{
          maxWidth: '1050px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '36px'
        }}>
          <img
            src={getAssetUrl('images/best_software_tag.png')}
            alt="Best Enterprise Software Award Tag"
            onError={(e) => handleImageError(e, 'https://www.aasaanerp.com/static/main/images/best_software_tag.png')}
            style={{ width: '130px', height: 'auto', objectFit: 'contain' }}
          />
          <div style={{ flex: '1 1 550px' }}>
            <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
              Recognized Across India & Globally for Operational Excellence
            </h3>
            <p style={{ fontSize: '15px', lineHeight: 1.7, color: '#334155', margin: 0 }}>
              From ISO-certified automotive manufacturing plants to government-authorized waste recycling facilities and multi-state retail distribution networks — Aasaan ERP empowers organizations to scale with total peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 10. FREQUENTLY ASKED QUESTIONS (FAQ) ACCORDION           */}
      {/* ======================================================== */}
      <section style={{ padding: '80px 20px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', fontWeight: 900, color: '#0F172A', marginBottom: '12px' }}>
              Frequently Asked Questions About Aasaan ERP
            </h2>
            <p style={{ fontSize: '15.5px', color: '#64748B' }}>
              Learn more about our heritage, infrastructure, and enterprise deployment options.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {aboutFaqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '12px',
                    border: '1px solid #E2E8F0',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease',
                    boxShadow: isOpen ? '0 6px 18px rgba(0,0,0,0.06)' : 'none'
                  }}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      background: 'none',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      cursor: 'pointer',
                      gap: '16px'
                    }}
                  >
                    <span style={{ fontSize: '16px', fontWeight: 700, color: isOpen ? 'var(--primary-blue)' : '#0F172A' }}>
                      {faq.q}
                    </span>
                    {isOpen ? <ChevronUp size={20} color="var(--primary-blue)" /> : <ChevronDown size={20} color="#94A3B8" />}
                  </button>

                  {isOpen && (
                    <div style={{
                      padding: '0 24px 22px',
                      fontSize: '14.5px',
                      lineHeight: 1.7,
                      color: '#475569',
                      borderTop: '1px solid #F1F5F9'
                    }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 11. CORPORATE HEADQUARTERS & CONTACT FOOTPRINT           */}
      {/* ======================================================== */}
      <section style={{ padding: '70px 20px', background: '#FFFFFF', borderTop: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{
            background: 'linear-gradient(135deg, #0b1e36 0%, #173b5f 100%)',
            color: '#FFFFFF',
            borderRadius: '20px',
            padding: '40px 36px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '30px'
          }}>
            <div style={{ flex: '1 1 450px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#38BDF8', fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                <Building2 size={16} /> Corporate Headquarters
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 12px', color: '#FFFFFF' }}>
                Aasaan Services Solutions Private Limited
              </h3>
              <p style={{ fontSize: '14.5px', lineHeight: 1.7, color: 'rgba(255, 255, 255, 0.85)', margin: '0 0 20px' }}>
                17A/35, Fourth Floor, West Punjabi Bagh, New Delhi, Delhi 110026, India.<br />
                Regional presence & partner distribution across Mumbai, Bengaluru, Ahmedabad, and Dubai (UAE).
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '14px', color: '#E2E8F0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <PhoneCall size={15} color="#38BDF8" /> +91 74282 67616
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Mail size={15} color="#38BDF8" /> contactus@aasaanservices.in
                </div>
              </div>
            </div>

            <div style={{ flex: '0 0 auto' }}>
              <button
                onClick={onOpenDemo}
                style={{
                  background: '#ff5b0b',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '14px 32px',
                  borderRadius: '8px',
                  fontSize: '15px',
                  fontWeight: 800,
                  cursor: 'pointer',
                  boxShadow: '0 6px 20px rgba(255,91,11,0.3)',
                  transition: 'all 0.2s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.background = '#e04a00';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = '#ff5b0b';
                }}
              >
                Schedule Guided Demo <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 12. BOTTOM CONVERSION CTA BANNER                         */}
      {/* ======================================================== */}
      <section style={{
        background: 'linear-gradient(135deg, #0b1e36 0%, #1e95d3 100%)',
        padding: '75px 20px',
        textAlign: 'center',
        color: '#FFFFFF'
      }}>
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(255, 255, 255, 0.15)',
            padding: '5px 16px',
            borderRadius: '20px',
            fontSize: '13px',
            fontWeight: 700,
            marginBottom: '20px'
          }}>
            <Sparkles size={14} color="#ffbe3d" /> Experience the Aasaan Difference
          </div>

          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 900,
            lineHeight: 1.3,
            marginBottom: '20px',
            color: '#FFFFFF'
          }}>
            Ready to Build a Smarter, Faster & Truly Resilient Enterprise?
          </h2>

          <p style={{
            fontSize: '16.5px',
            lineHeight: 1.6,
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '36px',
            maxWidth: '700px',
            margin: '0 auto 36px'
          }}>
            Join over 5,000+ high-growth businesses running on Aasaan. Schedule a 1-on-1 guided architecture walkthrough with our solutions team.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', alignItems: 'center' }}>
            <button
              onClick={onOpenDemo}
              style={{
                background: '#ff5b0b',
                color: '#FFFFFF',
                border: 'none',
                padding: '16px 40px',
                fontSize: '16px',
                fontWeight: 800,
                borderRadius: '8px',
                cursor: 'pointer',
                boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
                transition: 'all 0.2s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.background = '#e04a00';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = '#ff5b0b';
              }}
            >
              Schedule Guided Demo <ArrowRight size={18} />
            </button>

            <a
              href="mailto:contactus@aasaanservices.in"
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                padding: '15px 28px',
                fontSize: '15px',
                fontWeight: 700,
                borderRadius: '8px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)')}
            >
              Email: contactus@aasaanservices.in
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
