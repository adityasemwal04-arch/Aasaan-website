import React, { useEffect, useState } from 'react';
import {
  Compass,
  Rocket,
  Headphones,
  Code2,
  Server,
  GraduationCap,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Zap,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Sparkles,
  PhoneCall,
  Check,
  Building,
  RefreshCw,
  Award
} from 'lucide-react';
import { getAssetUrl, handleImageError } from '../utils/assetHelper';

export default function ServicesPage({ onOpenDemo }) {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeSlaTab, setActiveSlaTab] = useState('enterprise');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (id, e) => {
    if (e) e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const servicePillars = [
    { id: 'implementation-planning', label: 'Implementation Planning', icon: Compass },
    { id: 'instant-go-live', label: 'Instant 7-Day Go-Live', icon: Rocket },
    { id: 'support', label: '24/7 Enterprise Support', icon: Headphones },
    { id: 'customization', label: 'Bespoke Customization', icon: Code2 },
    { id: 'cloud-infrastructure', label: 'Cloud & Data Security', icon: Server },
    { id: 'training', label: 'Training & Change Mgmt', icon: GraduationCap }
  ];

  const faqs = [
    {
      q: 'How does Aasaan migrate data from Tally, Busy, or legacy Excel sheets?',
      a: 'We use automated ETL migration scripts that extract your existing master data (Chart of Accounts, Vendor & Customer ledgers, Bill of Materials, Inventory SKUs with opening stock, GSTIN numbers). Our migration team cleanses, verifies checksums, and imports the data into a pre-cutover sandbox environment with 99.8%+ audited accuracy.'
    },
    {
      q: 'Will our ongoing factory or retail store operations experience downtime?',
      a: 'Zero operational downtime. We run our sandbox and parallel simulation during regular business hours. Final cutover is executed over a scheduled off-peak window (typically Saturday evening or Sunday), so your floor operators and billing counters start fresh on Monday morning with zero interruption.'
    },
    {
      q: 'Can Aasaan customize specific GST invoices, e-Way bills, and weighbridge slips?',
      a: 'Yes, 100%. Our dedicated customization team configures print formats, barcode labels, automated e-Invoicing/e-Way bill generation with NIC portal API, and hardware integrations (weighbridges, POS scanners, biometric machines) tailored specifically to your business standards.'
    },
    {
      q: 'What kind of training is provided for floor operators with basic computer skills?',
      a: 'We believe ERP should be Aasaan (easy). We conduct hands-on, role-based interactive workshops in Hindi and English for warehouse, production floor, and billing staff. Each operator receives 1-page visual cheat-sheets and step-by-step video walk-throughs.'
    },
    {
      q: 'What is included in the 24/7 Enterprise Support SLA?',
      a: 'Enterprise SLA includes a guaranteed 15-minute response window for critical production-halting incidents, dedicated WhatsApp and phone hotlines with assigned senior solutions architects, quarterly health audits, and automatic statutory tax updates.'
    }
  ];

  const implementationPhases = [
    {
      phase: 'Phase 1',
      duration: 'Days 1 - 2',
      title: 'Discovery & Blueprinting',
      desc: 'Our certified solutions architects analyze your existing workflows, chart of accounts, tax structure, and approval hierarchies to create a comprehensive digital blueprint.',
      deliverables: ['Workflow Gap Analysis', 'Custom Chart of Accounts', 'Role Matrix Blueprint']
    },
    {
      phase: 'Phase 2',
      duration: 'Days 3 - 4',
      title: 'Automated ETL Migration',
      desc: 'Extract, clean, and validate legacy records from Tally, Busy, Excel, or legacy ERPs. Opening balances, customer balances, and batch inventories are reconciled.',
      deliverables: ['Automated Data Extraction', 'Checksum Verification', 'Data Hygiene Cleansing']
    },
    {
      phase: 'Phase 3',
      duration: 'Days 5 - 6',
      title: 'Sandbox Validation & Training',
      desc: 'System deployment in an isolated staging environment. Hands-on training for department heads, billing clerks, store keepers, and finance managers.',
      deliverables: ['Role-Based User Training', 'Simulated Billing Runs', 'Custom Invoice Templates']
    },
    {
      phase: 'Phase 4',
      duration: 'Day 7 & Beyond',
      title: 'Cutover & Instant Go-Live',
      desc: 'Flawless production deployment with on-ground and virtual support engineers monitoring live transactions, GST e-invoices, and stock adjustments.',
      deliverables: ['Live System Handover', 'Dedicated WhatsApp Hotline', '30-Day Hypercare Support']
    }
  ];

  return (
    <div className="services-page-wrapper" style={{ background: '#f8f9fa', minHeight: '100vh', paddingBottom: '0' }}>
      
      {/* ======================================================== */}
      {/* 1. HERO SECTION                                          */}
      {/* ======================================================== */}
      <section style={{
        background: 'linear-gradient(135deg, #0b1e36 0%, #102a45 50%, #1e95d3 100%)',
        color: '#FFFFFF',
        padding: '80px 20px 70px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle decorative background glow */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '400px',
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
            padding: '6px 18px',
            borderRadius: '999px',
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.04em',
            color: '#FFFFFF',
            marginBottom: '24px'
          }}>
            <Sparkles size={14} color="#ffbe3d" />
            <span>ENTERPRISE LIFECYCLE SERVICES • 99.98% SLA GUARANTEED</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(30px, 4.5vw, 48px)',
            fontWeight: 900,
            lineHeight: 1.2,
            marginBottom: '20px',
            letterSpacing: '-0.02em',
            color: '#FFFFFF'
          }}>
            End-to-End Enterprise Services That Guarantee <span style={{ color: '#38BDF8' }}>Measurable Business ROI</span>
          </h1>

          <p style={{
            fontSize: '17px',
            lineHeight: 1.7,
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '820px',
            margin: '0 auto 36px'
          }}>
            From architecture blueprinting and 7-day rapid onboarding to bespoke API integrations and 24/7 dedicated support engineers — we ensure your ERP scales seamlessly with your business, without delays or operational friction.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '14px', marginBottom: '50px' }}>
            <button
              onClick={onOpenDemo}
              style={{
                background: '#ff5b0b',
                color: '#FFFFFF',
                border: 'none',
                padding: '14px 34px',
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
              Book Architecture Walkthrough <ArrowRight size={18} />
            </button>

            <a
              href="#implementation-planning"
              onClick={(e) => scrollToSection('implementation-planning', e)}
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
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
              }}
            >
              Explore Service Pillars <ChevronDown size={16} />
            </a>
          </div>

          {/* Trust Metric Counters Strip */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '20px',
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '16px',
            padding: '24px 20px',
            textAlign: 'center'
          }}>
            <div>
              <div style={{ fontSize: '32px', fontWeight: 900, color: '#38BDF8', marginBottom: '4px' }}>7 Days</div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.8)' }}>Average SME Go-Live Time</div>
            </div>
            <div>
              <div style={{ fontSize: '32px', fontWeight: 900, color: '#38BDF8', marginBottom: '4px' }}>99.8%</div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.8)' }}>Migration Accuracy Rate</div>
            </div>
            <div>
              <div style={{ fontSize: '32px', fontWeight: 900, color: '#38BDF8', marginBottom: '4px' }}>15 Mins</div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.8)' }}>Critical SLA Response Time</div>
            </div>
            <div>
              <div style={{ fontSize: '32px', fontWeight: 900, color: '#38BDF8', marginBottom: '4px' }}>1,250+</div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255, 255, 255, 0.8)' }}>Enterprise Deployments</div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. SUB-NAVIGATION ANCHOR PILLS                           */}
      {/* ======================================================== */}
      <section style={{
        background: '#FFFFFF',
        borderBottom: '1px solid #E2E8F0',
        padding: '16px 20px',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px'
        }}>
          {servicePillars.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(item.id, e)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: '#F1F5F9',
                  color: '#1E293B',
                  padding: '8px 16px',
                  borderRadius: '30px',
                  fontWeight: 600,
                  fontSize: '13.5px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  border: '1px solid transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#EFF6FF';
                  e.currentTarget.style.color = 'var(--primary-blue)';
                  e.currentTarget.style.borderColor = 'var(--primary-blue-border)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#F1F5F9';
                  e.currentTarget.style.color = '#1E293B';
                  e.currentTarget.style.borderColor = 'transparent';
                }}
              >
                <Icon size={15} color="var(--primary-blue)" />
                {item.label}
              </a>
            );
          })}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. FOUR CORE SERVICE PILLARS WITH RICH DETAILS           */}
      {/* ======================================================== */}

      {/* Pillar 1: Implementation & Planning */}
      <section id="implementation-planning" style={{ padding: '70px 20px', scrollMarginTop: '80px' }}>
        <div style={{
          maxWidth: '1150px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '50px'
        }}>
          <div style={{ flex: '1 1 480px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '520px' }}>
              <img
                src={getAssetUrl('images/implementation_side_banner.jpg')}
                alt="Implementation & Planning"
                onError={(e) => handleImageError(e, 'https://www.aasaanerp.com/static/main/images/implementation_side_banner.jpg')}
                style={{
                  width: '100%',
                  borderRadius: '20px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: '-15px',
                right: '20px',
                background: '#FFFFFF',
                borderRadius: '12px',
                padding: '12px 18px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                border: '1px solid #E2E8F0'
              }}>
                <ShieldCheck size={24} color="#059669" />
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 800, color: '#0F172A' }}>Certified VAR Matching</div>
                  <div style={{ fontSize: '11.5px', color: '#64748B' }}>Domain Experts for Your Industry</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ flex: '1 1 480px' }}>
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
              marginBottom: '12px'
            }}>
              <Compass size={14} /> Service Pillar 01
            </div>

            <h2 style={{ fontSize: 'clamp(26px, 3vw, 34px)', fontWeight: 800, color: '#0F172A', marginBottom: '16px', lineHeight: 1.25 }}>
              Precision Implementation & Architecture Planning
            </h2>

            <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#475569', marginBottom: '20px' }}>
              We pair your organization with an accredited Value-Added Reseller (VAR) partner who possesses battle-tested experience in your specific industry. From mapping multi-entity financial structures to configuring automated factory routing, we build a rollout plan that fits your workflows.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', marginBottom: '28px' }}>
              {[
                'Tailored workflow gap analysis',
                'Comprehensive Chart of Accounts mapping',
                'Zero-data-loss legacy audit & ETL',
                'Role-based access matrix configuration',
                'Departmental sign-off checkpoints',
                '30-day post-launch hypercare included'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#334155', fontWeight: 500 }}>
                  <CheckCircle2 size={16} color="var(--primary-blue)" style={{ flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenDemo}
              style={{
                background: 'var(--primary-blue)',
                color: '#FFFFFF',
                border: 'none',
                padding: '12px 24px',
                fontSize: '14px',
                fontWeight: 700,
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#007bb5'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'var(--primary-blue)'}
            >
              Request Implementation Scope <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Pillar 2: Instant Go-Live */}
      <section id="instant-go-live" style={{ padding: '70px 20px', scrollMarginTop: '80px', background: '#FFFFFF' }}>
        <div style={{
          maxWidth: '1150px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap-reverse',
          gap: '50px'
        }}>
          <div style={{ flex: '1 1 480px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#D97706',
              background: '#FEF3C7',
              padding: '4px 12px',
              borderRadius: '6px',
              fontSize: '12px',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '12px'
            }}>
              <Rocket size={14} /> Service Pillar 02
            </div>

            <h2 style={{ fontSize: 'clamp(26px, 3vw, 34px)', fontWeight: 800, color: '#0F172A', marginBottom: '16px', lineHeight: 1.25 }}>
              Instant 7-Day Go-Live & Automated Migration
            </h2>

            <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#475569', marginBottom: '20px' }}>
              Traditional ERP deployments take 6 to 18 months of painful delays. With Aasaan ERP Lite and our pre-engineered industry modules, your business goes live in days, not quarters. Our proprietary data pipeline imports your existing books directly from Tally, Busy, SAP B1, or Excel spreadsheets with 100% integrity.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', marginBottom: '28px' }}>
              {[
                'Direct Tally & Busy automated XML sync',
                'Excel bulk-importers with schema validator',
                'Ready-to-use Indian GST tax templates',
                'Pre-configured e-Invoicing & e-Way bill keys',
                'Instant barcode label printer binding',
                'Weekend cutover with zero downtime'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#334155', fontWeight: 500 }}>
                  <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenDemo}
              style={{
                background: '#0F172A',
                color: '#FFFFFF',
                border: 'none',
                padding: '12px 24px',
                fontSize: '14px',
                fontWeight: 700,
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#1E293B'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#0F172A'}
            >
              See Go-Live Readiness Checklist <ArrowRight size={16} />
            </button>
          </div>

          <div style={{ flex: '1 1 480px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '520px' }}>
              <img
                src={getAssetUrl('images/Instant_go_live_image.jpg')}
                alt="Instant Go-Live"
                onError={(e) => handleImageError(e, 'https://www.aasaanerp.com/static/main/images/Instant%20go%20live%20image.jpg')}
                style={{
                  width: '100%',
                  borderRadius: '20px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute',
                top: '-15px',
                left: '20px',
                background: '#0F172A',
                color: '#FFFFFF',
                borderRadius: '12px',
                padding: '10px 16px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Zap size={18} color="#ffbe3d" />
                <span style={{ fontSize: '13px', fontWeight: 700 }}>Record 7-Day SME Cutover</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 3: Support */}
      <section id="support" style={{ padding: '70px 20px', scrollMarginTop: '80px' }}>
        <div style={{
          maxWidth: '1150px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '50px'
        }}>
          <div style={{ flex: '1 1 480px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '520px' }}>
              <img
                src={getAssetUrl('images/support_banner.jpg')}
                alt="24/7 Support"
                onError={(e) => handleImageError(e, 'https://www.aasaanerp.com/static/main/images/support_banner.jpg')}
                style={{
                  width: '100%',
                  borderRadius: '20px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: '-15px',
                left: '20px',
                background: '#FFFFFF',
                borderRadius: '12px',
                padding: '12px 18px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                border: '1px solid #E2E8F0'
              }}>
                <Clock size={22} color="var(--primary-blue)" />
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 800, color: '#0F172A' }}>15-Min Critical SLA</div>
                  <div style={{ fontSize: '11.5px', color: '#64748B' }}>Direct Engineer Hotline</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ flex: '1 1 480px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#059669',
              background: '#ECFDF5',
              padding: '4px 12px',
              borderRadius: '6px',
              fontSize: '12px',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '12px'
            }}>
              <Headphones size={14} /> Service Pillar 03
            </div>

            <h2 style={{ fontSize: 'clamp(26px, 3vw, 34px)', fontWeight: 800, color: '#0F172A', marginBottom: '16px', lineHeight: 1.25 }}>
              Dedicated 24/7/365 Enterprise Support & SLA
            </h2>

            <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#475569', marginBottom: '20px' }}>
              We never leave you on hold with generic automated bots. Every enterprise client is assigned a designated Solutions Engineer and access to our priority escalation matrix. From month-end financial reconciliations to sudden GST statutory updates, our team resolves issues swiftly.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', marginBottom: '28px' }}>
              {[
                'Designated Technical Account Manager',
                'Enterprise WhatsApp priority support desk',
                'Screen-share & remote diagnostic sessions',
                'Statutory tax & GST compliance updates',
                'Continuous database optimization audits',
                '99.98% cloud uptime SLA backing'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#334155', fontWeight: 500 }}>
                  <CheckCircle2 size={16} color="var(--primary-blue)" style={{ flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenDemo}
              style={{
                background: 'var(--primary-blue)',
                color: '#FFFFFF',
                border: 'none',
                padding: '12px 24px',
                fontSize: '14px',
                fontWeight: 700,
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#007bb5'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'var(--primary-blue)'}
            >
              Explore SLA Agreement Tiers <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Pillar 4: Customization */}
      <section id="customization" style={{ padding: '70px 20px', scrollMarginTop: '80px', background: '#FFFFFF' }}>
        <div style={{
          maxWidth: '1150px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap-reverse',
          gap: '50px'
        }}>
          <div style={{ flex: '1 1 480px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#7C3AED',
              background: '#F5F3FF',
              padding: '4px 12px',
              borderRadius: '6px',
              fontSize: '12px',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '12px'
            }}>
              <Code2 size={14} /> Service Pillar 04
            </div>

            <h2 style={{ fontSize: 'clamp(26px, 3vw, 34px)', fontWeight: 800, color: '#0F172A', marginBottom: '16px', lineHeight: 1.25 }}>
              Bespoke Customization, REST APIs & IoT Telemetry
            </h2>

            <p style={{ fontSize: '16px', lineHeight: 1.75, color: '#475569', marginBottom: '20px' }}>
              Your competitive advantage lies in your unique workflows. Rather than forcing you into rigid templates, Aasaan ERP provides an open, extensible architecture. Our in-house engineering team crafts bespoke modules, custom business logic, automated webhooks, and direct hardware connectors.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', marginBottom: '28px' }}>
              {[
                'Custom MIS dashboards & executive reports',
                'IoT Weighbridge RS232 & IP camera sync',
                'Payment gateway & banking API webhooks',
                'E-commerce & Shopify / WooCommerce sync',
                'Custom approval hierarchies & audit trails',
                'Complete RESTful OpenAPI documentation'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#334155', fontWeight: 500 }}>
                  <CheckCircle2 size={16} color="#7C3AED" style={{ flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenDemo}
              style={{
                background: '#7C3AED',
                color: '#FFFFFF',
                border: 'none',
                padding: '12px 24px',
                fontSize: '14px',
                fontWeight: 700,
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#6D28D9'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#7C3AED'}
            >
              Discuss Custom Module Requirements <ArrowRight size={16} />
            </button>
          </div>

          <div style={{ flex: '1 1 480px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '520px' }}>
              <img
                src={getAssetUrl('images/customization_banner.jpg')}
                alt="Customization & Integration"
                onError={(e) => handleImageError(e, 'https://www.aasaanerp.com/static/main/images/customization_banner.jpg')}
                style={{
                  width: '100%',
                  borderRadius: '20px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: '-15px',
                right: '20px',
                background: '#FFFFFF',
                borderRadius: '12px',
                padding: '12px 18px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                border: '1px solid #E2E8F0'
              }}>
                <Code2 size={22} color="#7C3AED" />
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 800, color: '#0F172A' }}>Open REST API</div>
                  <div style={{ fontSize: '11.5px', color: '#64748B' }}>Seamless 3rd-Party Hooks</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. FOUR-PHASE IMPLEMENTATION ROADMAP                     */}
      {/* ======================================================== */}
      <section style={{ padding: '80px 20px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1150px', margin: '0 auto' }}>
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
              <Clock size={14} /> Proven 7-Day Methodology
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 38px)', fontWeight: 900, color: '#0F172A', marginBottom: '16px' }}>
              How We Take You from Legacy Chaos to Live in 7 Days
            </h2>
            <p style={{ fontSize: '16px', color: '#64748B', maxWidth: '720px', margin: '0 auto' }}>
              A disciplined, sprint-based deployment framework developed across 1,250+ enterprise installations to guarantee zero downtime.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px'
          }}>
            {implementationPhases.map((phase, idx) => (
              <div
                key={idx}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(30, 149, 211, 0.12)';
                  e.currentTarget.style.borderColor = 'var(--primary-blue-border)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.04)';
                  e.currentTarget.style.borderColor = '#E2E8F0';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <span style={{
                    fontSize: '12px',
                    fontWeight: 800,
                    color: 'var(--primary-blue)',
                    background: '#EFF6FF',
                    padding: '4px 10px',
                    borderRadius: '6px'
                  }}>
                    {phase.phase}
                  </span>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748B' }}>
                    {phase.duration}
                  </span>
                </div>

                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', marginBottom: '10px' }}>
                  {phase.title}
                </h3>

                <p style={{ fontSize: '13.5px', lineHeight: 1.6, color: '#64748B', marginBottom: '20px', flex: 1 }}>
                  {phase.desc}
                </p>

                <div style={{ borderTop: '1px solid #F1F5F9', paddingTop: '16px' }}>
                  <div style={{ fontSize: '11.5px', fontWeight: 800, color: '#94A3B8', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Key Deliverables:
                  </div>
                  {phase.deliverables.map((del, dIdx) => (
                    <div key={dIdx} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12.5px', color: '#334155', marginBottom: '4px', fontWeight: 500 }}>
                      <Check size={13} color="#059669" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. ENTERPRISE SUPPORT SLA MATRIX                         */}
      {/* ======================================================== */}
      <section style={{ padding: '80px 20px', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1050px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', fontWeight: 900, color: '#0F172A', marginBottom: '12px' }}>
              Transparent Enterprise SLA Tiers
            </h2>
            <p style={{ fontSize: '15.5px', color: '#64748B', maxWidth: '650px', margin: '0 auto' }}>
              Choose the support level tailored to your operational velocity and internal technical capability.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
            gap: '24px'
          }}>
            {/* Standard Tier */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '30px 26px',
              border: '1px solid #E2E8F0',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', marginBottom: '6px' }}>Standard Tier</div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>Business Hours</h3>
              <p style={{ fontSize: '13px', color: '#64748B', marginBottom: '20px' }}>Ideal for growing SMEs needing steady maintenance and regular business support.</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '30px', flex: 1 }}>
                <div style={{ display: 'flex', gap: '8px', fontSize: '13.5px', color: '#334155' }}><Check size={16} color="#059669" /> <span>9:00 AM – 6:30 PM (Mon-Sat)</span></div>
                <div style={{ display: 'flex', gap: '8px', fontSize: '13.5px', color: '#334155' }}><Check size={16} color="#059669" /> <span>Email & Web Portal Ticketing</span></div>
                <div style={{ display: 'flex', gap: '8px', fontSize: '13.5px', color: '#334155' }}><Check size={16} color="#059669" /> <span>4-Hour Incident Response SLA</span></div>
                <div style={{ display: 'flex', gap: '8px', fontSize: '13.5px', color: '#334155' }}><Check size={16} color="#059669" /> <span>Regular GST Statutory Patching</span></div>
              </div>

              <button
                onClick={onOpenDemo}
                style={{
                  width: '100%',
                  background: '#FFFFFF',
                  color: '#0F172A',
                  border: '1px solid #CBD5E1',
                  padding: '10px 0',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '13.5px',
                  cursor: 'pointer'
                }}
              >
                Inquire Standard
              </button>
            </div>

            {/* Enterprise Tier (Featured) */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              padding: '30px 26px',
              border: '2px solid var(--primary-blue)',
              boxShadow: '0 12px 30px rgba(30, 149, 211, 0.15)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{
                position: 'absolute',
                top: '-13px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'var(--primary-blue)',
                color: '#FFFFFF',
                padding: '4px 14px',
                borderRadius: '20px',
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}>
                MOST POPULAR FOR ENTERPRISES
              </div>

              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--primary-blue)', textTransform: 'uppercase', marginBottom: '6px' }}>Enterprise Priority</div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>24/7 Rapid Response</h3>
              <p style={{ fontSize: '13px', color: '#64748B', marginBottom: '20px' }}>Designed for multi-shift factories, 24/7 retail networks, and waste operations.</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '30px', flex: 1 }}>
                <div style={{ display: 'flex', gap: '8px', fontSize: '13.5px', color: '#334155' }}><Check size={16} color="var(--primary-blue)" /> <span><strong>24/7/365 Continuous Coverage</strong></span></div>
                <div style={{ display: 'flex', gap: '8px', fontSize: '13.5px', color: '#334155' }}><Check size={16} color="var(--primary-blue)" /> <span><strong>Dedicated WhatsApp Hotline & Phone</strong></span></div>
                <div style={{ display: 'flex', gap: '8px', fontSize: '13.5px', color: '#334155' }}><Check size={16} color="var(--primary-blue)" /> <span><strong>15-Minute Critical Incident SLA</strong></span></div>
                <div style={{ display: 'flex', gap: '8px', fontSize: '13.5px', color: '#334155' }}><Check size={16} color="var(--primary-blue)" /> <span>Assigned Technical Account Manager</span></div>
                <div style={{ display: 'flex', gap: '8px', fontSize: '13.5px', color: '#334155' }}><Check size={16} color="var(--primary-blue)" /> <span>Monthly Performance & DB Optimization</span></div>
              </div>

              <button
                onClick={onOpenDemo}
                style={{
                  width: '100%',
                  background: 'var(--primary-blue)',
                  color: '#FFFFFF',
                  border: 'none',
                  padding: '11px 0',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '14px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 14px rgba(30, 149, 211, 0.3)'
                }}
              >
                Inquire Enterprise SLA
              </button>
            </div>

            {/* Mission Critical Tier */}
            <div style={{
              background: '#F8FAFC',
              borderRadius: '16px',
              padding: '30px 26px',
              border: '1px solid #E2E8F0',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase', marginBottom: '6px' }}>Mission Critical Tier</div>
              <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>Dedicated Resident Eng</h3>
              <p style={{ fontSize: '13px', color: '#64748B', marginBottom: '20px' }}>For large corporate groups requiring on-premise engineers and bespoke dev sprints.</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '30px', flex: 1 }}>
                <div style={{ display: 'flex', gap: '8px', fontSize: '13.5px', color: '#334155' }}><Check size={16} color="#059669" /> <span>On-Site or Dedicated Resident Engineer</span></div>
                <div style={{ display: 'flex', gap: '8px', fontSize: '13.5px', color: '#334155' }}><Check size={16} color="#059669" /> <span>Custom Feature Sprints Every Month</span></div>
                <div style={{ display: 'flex', gap: '8px', fontSize: '13.5px', color: '#334155' }}><Check size={16} color="#059669" /> <span>Multi-AZ Disaster Recovery Drills</span></div>
                <div style={{ display: 'flex', gap: '8px', fontSize: '13.5px', color: '#334155' }}><Check size={16} color="#059669" /> <span>Executive Architectural Advisory Board</span></div>
              </div>

              <button
                onClick={onOpenDemo}
                style={{
                  width: '100%',
                  background: '#FFFFFF',
                  color: '#0F172A',
                  border: '1px solid #CBD5E1',
                  padding: '10px 0',
                  borderRadius: '8px',
                  fontWeight: 700,
                  fontSize: '13.5px',
                  cursor: 'pointer'
                }}
              >
                Inquire Mission Critical
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. FREQUENTLY ASKED QUESTIONS (FAQ) ACCORDION            */}
      {/* ======================================================== */}
      <section style={{ padding: '80px 20px', background: '#F8FAFC', borderTop: '1px solid #E2E8F0' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', fontWeight: 900, color: '#0F172A', marginBottom: '12px' }}>
              Implementation & Support FAQs
            </h2>
            <p style={{ fontSize: '15.5px', color: '#64748B' }}>
              Common questions answered by our solutions engineering team.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {faqs.map((faq, idx) => {
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
      {/* 7. BOTTOM CTA SECTION                                    */}
      {/* ======================================================== */}
      <section style={{
        background: 'linear-gradient(135deg, #0b1e36 0%, #1e95d3 100%)',
        padding: '70px 20px',
        textAlign: 'center',
        color: '#FFFFFF',
        position: 'relative'
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
            <Sparkles size={14} color="#ffbe3d" /> Ready to Modernize Your Operations?
          </div>

          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 900,
            lineHeight: 1.3,
            marginBottom: '20px',
            color: '#FFFFFF'
          }}>
            Unlock New Possibilities with Growth-Driven Technology and Dedicated Support.
          </h2>

          <p style={{
            fontSize: '16.5px',
            lineHeight: 1.6,
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '36px',
            maxWidth: '700px',
            margin: '0 auto 36px'
          }}>
            Talk to an Aasaan Enterprise Architect today. We will evaluate your current workflow and provide a clear, risk-free 7-day migration roadmap.
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
              href="tel:+919289238814"
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
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'}
            >
              <PhoneCall size={17} /> Direct Desk: +91 92892 38814
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
