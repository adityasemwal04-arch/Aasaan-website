import React from 'react';
import {
  ArrowRight,
  Zap,
  Globe,
  ShieldCheck,
  BarChart3,
  Settings,
  Users,
  Layers,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Database,
  Lock,
  RefreshCw,
  MessageSquare,
  Star,
  Award
} from 'lucide-react';

export default function ServicesPage({ onOpenDemo }) {
  const services = [
    {
      icon: Layers,
      color: '#1e95d3',
      bg: 'rgba(30,149,211,0.08)',
      title: 'ERP Implementation & Deployment',
      tag: 'Core Service',
      desc: 'End-to-end ERP rollout with business process mapping, data migration, UAT testing, and a dedicated go-live support team ensuring zero operational disruption.',
      features: ['Business Process Mapping', 'Historical Data Migration', 'UAT & Acceptance Testing', 'Go-Live Support (7 Days)', 'Cutover & Parallel Run Strategy']
    },
    {
      icon: Settings,
      color: '#6366f1',
      bg: 'rgba(99,102,241,0.08)',
      title: 'Custom Module Development',
      tag: 'Development',
      desc: 'Tailor Aasaan ERP to your exact industry workflows — from custom approval hierarchies and unique report formats to specialised industry-specific integrations.',
      features: ['Custom Workflow Builder', 'Bespoke Report Designer', 'Role & Permission Engine', 'Industry-Specific Add-ons', 'API Extension Development']
    },
    {
      icon: Database,
      color: '#0284c7',
      bg: 'rgba(2,132,199,0.08)',
      title: 'Cloud Infrastructure & Hosting',
      tag: 'Cloud Ops',
      desc: 'AWS-hosted enterprise infrastructure with auto-scaling, encrypted backups, disaster recovery, and 99.99% uptime SLA — managed entirely by our DevOps team.',
      features: ['AWS Multi-Region Hosting', 'Auto-Scaling Architecture', 'AES-256 Encrypted Backups', 'Disaster Recovery Planning', '99.99% Uptime SLA']
    },
    {
      icon: BarChart3,
      color: '#f59e0b',
      bg: 'rgba(245,158,11,0.08)',
      title: 'Business Intelligence & Analytics',
      tag: 'Data & BI',
      desc: 'Transform raw ERP data into executive decision intelligence — live KPI dashboards, drill-down financial reports, and predictive operational forecasting.',
      features: ['300+ Pre-Built Reports', 'Executive KPI Dashboards', 'Drill-Down Ledger Analysis', 'Predictive Demand Forecasting', 'Power BI / Looker Integration']
    },
    {
      icon: Cpu,
      color: '#10b981',
      bg: 'rgba(16,185,129,0.08)',
      title: 'AI & Automation Consulting',
      tag: 'AI-Powered',
      desc: 'Deploy machine learning models inside your ERP to automate anomaly detection, intelligent purchase order recommendations, and conversational workflow triggers.',
      features: ['Anomaly Detection Engine', 'AI Purchase Recommendations', 'Natural Language Reporting', 'Self-Learning Workflows', 'Predictive Cash Flow Alerts']
    },
    {
      icon: Users,
      color: '#8b5cf6',
      bg: 'rgba(139,92,246,0.08)',
      title: 'Training & Change Management',
      tag: 'People',
      desc: 'Structured onboarding and role-based training programmes that ensure 100% team adoption — from C-suite ERP strategy workshops to ground-level operator sessions.',
      features: ['Role-Based Training Modules', 'Video Tutorial Library', 'Live Virtual Workshops', 'Adoption KPI Tracking', 'Ongoing Coaching Sessions']
    },
    {
      icon: ShieldCheck,
      color: '#0f172a',
      bg: 'rgba(15,23,42,0.06)',
      title: 'Annual Maintenance & Support',
      tag: 'Post-Live',
      desc: 'Dedicated 24/7 SLA-backed helpdesk, proactive system health monitoring, regulatory patch updates (GST, TDS, EPF), and quarterly business review meetings.',
      features: ['24/7 Priority Helpdesk', 'Proactive Health Monitoring', 'Statutory Compliance Patches', 'Quarterly Business Reviews', 'Dedicated Account Manager']
    },
    {
      icon: Globe,
      color: '#0369a1',
      bg: 'rgba(3,105,161,0.08)',
      title: 'Multi-Entity & Global Rollout',
      tag: 'Enterprise Scale',
      desc: 'Unified ERP across multiple legal entities, countries, and currencies — with consolidated reporting, intercompany transactions, and local tax compliance.',
      features: ['Multi-Company Architecture', 'Multi-Currency & Forex', 'Intercompany Transactions', 'Local Tax Localisation', 'Cross-Border Consolidation']
    },
    {
      icon: Lock,
      color: '#dc2626',
      bg: 'rgba(220,38,38,0.07)',
      title: 'Security & Compliance Audit',
      tag: 'Security',
      desc: 'ISO 27001-aligned security reviews, VAPT testing, user access audits, GDPR/PDPA data compliance, and hardened role-based access control configuration.',
      features: ['ISO 27001 Alignment', 'VAPT & Pen Testing', 'GDPR / PDPA Compliance', 'Role Access Audit Reports', 'Data Masking Configuration']
    }
  ];

  const stats = [
    { value: '100+', label: 'Successful ERP Deployments' },
    { value: '7 Days', label: 'Average Go-Live Duration' },
    { value: '98.7%', label: 'Client Retention Rate' },
    { value: '24/7', label: 'Support Availability' }
  ];

  return (
    <div style={{ marginTop: '106px' }}>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <div style={{
        background: 'linear-gradient(135deg, #0d1b2a 0%, #1a3a54 50%, #1e95d3 100%)',
        padding: '80px 24px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(255,255,255,0.12)',
            color: '#93c5fd',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '6px 16px',
            borderRadius: '20px',
            marginBottom: '20px'
          }}>
            <Star size={13} /> Enterprise ERP Services
          </span>
          <h1 style={{ fontSize: '46px', fontWeight: 900, color: '#ffffff', margin: '0 0 18px', lineHeight: 1.15 }}>
            Complete ERP Services —{' '}
            <span style={{ background: 'linear-gradient(90deg, #38bdf8, #67e8f9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              From Blueprint to Business Outcomes
            </span>
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, maxWidth: '680px', margin: '0 auto 32px' }}>
            Aasaan ERP offers a full lifecycle of enterprise services — implementation, customisation, cloud ops, AI enablement, training, and post-live managed support.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenDemo}
              style={{
                background: '#ffffff',
                color: '#1e95d3',
                border: 'none',
                borderRadius: '10px',
                padding: '14px 30px',
                fontSize: '15px',
                fontWeight: 800,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#f0f9ff'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Schedule a Consultation <ArrowRight size={16} />
            </button>
            <a
              href="https://wa.me/917428267616?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20Aasaan%20ERP%20services"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'rgba(255,255,255,0.1)',
                color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: '10px',
                padding: '14px 28px',
                fontSize: '15px',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <i className="fab fa-whatsapp" style={{ fontSize: '18px' }}></i> Chat with Us
            </a>
          </div>
        </div>
      </div>

      {/* ── STATS ────────────────────────────────────────────────────── */}
      <div style={{
        background: 'linear-gradient(90deg, #1e95d3 0%, #0d6ea0 100%)',
        padding: '28px 24px'
      }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '24px',
          textAlign: 'center'
        }}>
          {stats.map((s, i) => (
            <div key={i}>
              <div style={{ fontSize: '30px', fontWeight: 900, color: '#ffffff' }}>{s.value}</div>
              <div style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.8)', fontWeight: 500, marginTop: '2px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SERVICES GRID ────────────────────────────────────────────── */}
      <div style={{ background: '#f8fafc', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 800, color: '#0f172a', margin: '0 0 14px' }}>
              Our <span style={{ color: '#1e95d3' }}>Service Portfolio</span>
            </h2>
            <p style={{ fontSize: '16px', color: '#64748b', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
              Everything you need to plan, deploy, scale, and continuously optimise your Aasaan ERP investment.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '24px'
          }}>
            {services.map((svc, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '20px',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
                  transition: 'all 0.25s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 44px rgba(30,149,211,0.12)';
                  e.currentTarget.style.borderColor = 'rgba(30,149,211,0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.03)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '14px',
                    background: svc.bg,
                    color: svc.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <svc.icon size={24} />
                  </div>
                  <span style={{
                    background: '#f1f5f9',
                    color: '#475569',
                    fontSize: '11px',
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: '20px',
                    whiteSpace: 'nowrap'
                  }}>
                    {svc.tag}
                  </span>
                </div>

                <div>
                  <h3 style={{ fontSize: '19px', fontWeight: 800, color: '#0f172a', margin: '0 0 8px' }}>{svc.title}</h3>
                  <p style={{ fontSize: '13.5px', color: '#64748b', lineHeight: 1.6, margin: 0 }}>{svc.desc}</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {svc.features.map((feat, fIdx) => (
                    <div key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#475569' }}>
                      <CheckCircle2 size={14} style={{ color: svc.color, flexShrink: 0 }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div style={{
                  borderTop: '1px solid #f1f5f9',
                  paddingTop: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <button
                    onClick={onOpenDemo}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: svc.color,
                      fontSize: '13.5px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: 0
                    }}
                  >
                    Request This Service <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── WHY OUR SERVICES ─────────────────────────────────────────── */}
      <div style={{ background: '#ffffff', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'center' }}>
          <div style={{ flex: '1 1 480px' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(30,149,211,0.1)',
              color: '#0d6ea0',
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              padding: '6px 14px',
              borderRadius: '20px',
              marginBottom: '16px'
            }}>
              <Award size={13} /> Our Implementation Promise
            </span>
            <h2 style={{ fontSize: '34px', fontWeight: 800, color: '#0f172a', margin: '0 0 16px', lineHeight: 1.25 }}>
              Why Businesses Trust<br />
              <span style={{ color: '#1e95d3' }}>Aasaan ERP Services</span>
            </h2>
            <p style={{ fontSize: '15.5px', color: '#475569', lineHeight: 1.7, margin: '0 0 28px' }}>
              We don't just install software — we engineer sustainable operational transformation. Our implementation methodology combines deep domain expertise with agile delivery to ensure every deployment delivers measurable business results.
            </p>

            {[
              { icon: Zap, title: 'Rapid 7-Day Go-Live', desc: 'Pre-configured industry templates accelerate time-to-value dramatically.' },
              { icon: ShieldCheck, title: 'Zero Data Loss Guarantee', desc: 'Military-grade migration protocols with triple-verified data reconciliation.' },
              { icon: TrendingUp, title: 'ROI in 90 Days', desc: 'Structured value realisation framework ensuring measurable payback within the first quarter.' },
              { icon: RefreshCw, title: 'Continuous Optimisation', desc: 'Post-live health reviews and workflow tuning every quarter to continuously improve performance.' }
            ].map((item, idx) => (
              <div key={idx} style={{ display: 'flex', gap: '14px', marginBottom: '20px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(30,149,211,0.1)',
                  color: '#1e95d3',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <item.icon size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', marginBottom: '3px' }}>{item.title}</div>
                  <div style={{ fontSize: '13.5px', color: '#64748b', lineHeight: 1.5 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ flex: '1 1 440px' }}>
            <div style={{
              background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)',
              borderRadius: '24px',
              padding: '40px',
              color: '#ffffff'
            }}>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#93c5fd', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '24px' }}>
                Typical Implementation Timeline
              </div>
              {[
                { phase: 'Phase 1', name: 'Discovery & Planning', days: 'Days 1–3', color: '#38bdf8' },
                { phase: 'Phase 2', name: 'Configuration & Setup', days: 'Days 4–7', color: '#34d399' },
                { phase: 'Phase 3', name: 'Data Migration & UAT', days: 'Days 8–12', color: '#fbbf24' },
                { phase: 'Phase 4', name: 'Training & Onboarding', days: 'Days 13–17', color: '#a78bfa' },
                { phase: 'Phase 5', name: 'Go-Live & Hypercare', days: 'Days 18–30', color: '#f87171' }
              ].map((phase, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    paddingBottom: idx < 4 ? '16px' : 0,
                    borderBottom: idx < 4 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                    marginBottom: idx < 4 ? '16px' : 0
                  }}
                >
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: `${phase.color}22`,
                    border: `1px solid ${phase.color}44`,
                    color: phase.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '11px',
                    fontWeight: 800,
                    flexShrink: 0
                  }}>
                    {idx + 1}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '14.5px', fontWeight: 700, color: '#ffffff' }}>{phase.name}</div>
                    <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '2px' }}>{phase.days}</div>
                  </div>
                  <CheckCircle2 size={16} style={{ color: phase.color, flexShrink: 0 }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <div style={{
        background: 'linear-gradient(135deg, #1e95d3 0%, #0d6ea0 60%, #212121 100%)',
        padding: '64px 24px',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '34px', fontWeight: 800, color: '#ffffff', margin: '0 0 12px' }}>
          Ready to Get Started?
        </h2>
        <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.8)', margin: '0 0 32px', maxWidth: '540px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
          Our enterprise advisors will assess your business needs and recommend the right service package — no commitment required.
        </p>
        <button
          onClick={onOpenDemo}
          style={{
            background: '#ffffff',
            color: '#1e95d3',
            border: 'none',
            borderRadius: '10px',
            padding: '16px 36px',
            fontSize: '16px',
            fontWeight: 800,
            cursor: 'pointer',
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            transition: 'all 0.2s ease',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#f0f9ff'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          Book a Free Consultation <ArrowRight size={17} />
        </button>
      </div>

    </div>
  );
}
